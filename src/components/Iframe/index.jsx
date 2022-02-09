import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Recevier from '@ali/b3-iframe/lib/recevier';
import './index.module.scss';

const getOffset = item => {
  let total = 0;
  while (item !== null) {
    total += item.offsetTop;
    item = item.offsetParent;
  }
  return total;
};

export default class BGIframe extends PureComponent {
  static displayName = 'bg-iframe';
  static propTypes = {
    className: PropTypes.string,
    disableHeightSync: PropTypes.bool,
    id: PropTypes.string,
    onUpdateHeight: PropTypes.func,
    onUpdateUrl: PropTypes.func,
    style: PropTypes.object,
    url: PropTypes.string.isRequired
  };
  static defaultProps = {
    className: '',
    disableHeightSync: false,
    id: '',
    onUpdateHeight: () => {},
    onUpdateUrl: () => {},
    style: {},
    syncParam: true,
    url: ''
  };

  constructor(props) {
    super(props);
    this.container = null;
    this.iframe = null;
    this.state = {
      loading: true
    };
  }

  componentDidMount() {
    if (this.iframe) {
      this.iframe.onload = () => {
        this.setState({
          loading: false
        });
      };
    }
    if (!this.props.disableHeightSync) {
      this.createRecevier();
    }
  }

  componentWillReceiveProps({ url, disableHeightSync, style }) {
    if (url.replace(/#.*$/, '') !== this.props.url.replace(/#.*$/, '')) {
      if (this.container) {
        this.container.style.height = (style && style.height) || '800px';
      }
      this.setState({
        loading: true
      });
    }
    if (disableHeightSync !== this.props.disableHeightSync) {
      if (disableHeightSync) {
        this.destroyRecevier();
      } else {
        this.createRecevier();
      }
    }
  }

  componentDidUpdate(prevProps) {
    if (!prevProps.url && this.iframe) {
      this.iframe.onload = () => {
        this.setState({
          loading: false
        });
      };
    }
  }

  componentWillUnmount() {
    this.destroyRecevier();
  }

  createRecevier = () => {
    this.destroyRecevier();
    this.recevier = new Recevier();

    this.recevier.on('popup', (data, origin, source) => {
      if (this.iframe) {
        if (source === this.iframe.contentWindow) {
          const scrollY = window.scrollY;
          const offset = getOffset(this.iframe);
          const vpHeight = window.innerHeight;
          const iframeHeight = this.iframe.clientHeight;
          this.iframe.contentWindow.postMessage(
            {
              type: 'updatePopup',
              value: {
                scrollY,
                offset,
                iframeHeight,
                type: data.value,
                vpHeight
              }
            },
            '*'
          );
        }
      }
    });
    this.recevier.on('updateHeight', (data, origin, source) => {
      if (this.iframe) {
        if (source === this.iframe.contentWindow) {
          //增加20px，防止在windows浏览器下出现滚动条抖动问题
          // this.container.style.height = (data.msg || 0) + 20 + 'px';
          this.container.style.height = (data.msg || 0) + 'px';
          this.props.onUpdateHeight(data.msg || '#');
        }
      }
    });
  };

  destroyRecevier = () => {
    if (this.recevier) {
      this.recevier.destroy();
      this.recevier = null;
    }
  };

  render() {
    const { className, id, style, url } = this.props;

    if (url) {
      return (
        <div
          className={'bg-iframe ' + className}
          id={id}
          style={{ height: 800, width: '100%', ...style }}
          ref={ref => {
            this.container = ref;
          }}
        >
          <iframe
            src={url}
            style={{ border: 'none', width: '100%', height: '100%' }}
            ref={ref => {
              this.iframe = ref;
            }}
          />
        </div>
      );
    } else {
      return <div className="bg-iframe empty">Iframe</div>;
    }
  }
}