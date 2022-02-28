import React, { PureComponent } from 'react';
import Recevier from './recevier';
import './index.scss';

export interface IIframeProps {
  url: string;
  disableHeightSync?: boolean;
  onUpdateHeight: (height: number) => void;
  id?: string;
  className?: string;
  style?: React.CSSProperties;
}

export default class Iframe extends PureComponent<IIframeProps> {
  static displayName = 'bg-iframe';

  recevier: Recevier;
  container: HTMLDivElement;
  iframe: HTMLIFrameElement;

  constructor(props) {
    super(props);
    this.container = null;
    this.iframe = null;
  }

  componentDidMount() {
    if (!this.props.disableHeightSync) {
      this.createRecevier();
    }
  }


  componentDidUpdate(prevProps) {
    if (prevProps.url.replace(/#.*$/, '') !== this.props.url.replace(/#.*$/, '')) {
      if (this.container) {
        this.container.style.height = (this.props.style && this.props.style.height.toString()) || '800px';
      }
    }
    if (prevProps.disableHeightSync !== undefined && prevProps.disableHeightSync !== this.props.disableHeightSync) {
      if (this.props.disableHeightSync) {
        this.destroyRecevier();
      } else {
        this.createRecevier();
      }
    }
  }

  componentWillUnmount() {
    this.destroyRecevier();
  }

  createRecevier = () => {
    this.destroyRecevier();
    this.recevier = new Recevier();
    this.recevier.on('updateHeight', (data, origin, source) => {
      if (this.iframe) {
        if (source === this.iframe.contentWindow) {
          //增加20px，防止在windows浏览器下出现滚动条抖动问题
          // this.container.style.height = (data.msg || 0) + 20 + 'px';
          this.container.style.height = (data.msg || 0) + 'px';
          this.props.onUpdateHeight && this.props.onUpdateHeight(data.msg || '#');
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
          style={{ height: 400, width: '100%', ...style }}
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