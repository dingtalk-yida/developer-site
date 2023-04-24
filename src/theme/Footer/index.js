import React, { useEffect } from 'react';
import classNames from 'classnames';
import { Popover } from 'antd';
import 'core-js/features/object/from-entries';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './styles.module.css';
import { useHistory } from '@docusaurus/router';
import { sendPV } from '../../utils';

function QrCodeTip( { qrCode, tip }) {
  return (
    <>
      <img className={styles.qrCode} src={qrCode} alt="Image 404" />
      <div className={styles.textTip}>{tip}</div>
    </>
  );
}

function YidaLogo({ logo }) {
  return (
    <div className={classNames("footer__title", styles.footer__title)}>
      <a href={logo.href}>
        <img className="logo-icon" src={logo.src} alt="Image 404" />
      </a>
    </div>
  )
}

export default function FooterWrapper(props) {
  const {
    siteConfig: { customFields: { icons, copyRight }, themeConfig: { footer: { links, logo } }, },
  } = useDocusaurusContext();
  // 增加埋点
  const history = useHistory();
  useEffect(() => {
    const unlisten = history.listen((location) => {
      sendPV(location);
    });
    sendPV(history.location);
    return () => {
      unlisten();
    };
  }, []);

  return (
    <>
      <div className={styles.footerWrapper}>
        <footer className={classNames("footer", styles.footer)} {...props}>
          <div className={classNames("container container-fluid", styles.container)}>
            <div className={classNames("row", styles.footerLinks, styles.row)}>
              <div className={classNames("col footer__col", styles.col)}>
                <YidaLogo logo={logo} />
                <ul className="footer__items clean-list">
                  <li className={classNames("footer__item", styles.footer__item)} >
                    <div className={styles.contactMobile}>
                      { icons.map(({ qrCode, tip }) => (
                        <div key={tip}>
                          <QrCodeTip qrCode={qrCode} tip={tip} />
                        </div>
                      ))}
                    </div>
                    <div className={styles.contactIcons}>
                    { icons.map(({ icon, qrCode, tip }) => (
                        <Popover key={tip} content={() => QrCodeTip( { qrCode, tip })} transitionName="" destroyTooltipOnHide={true} overlayClassName={styles.balloonOverlay}>
                          <div className={styles.contactIconWrapper}>
                            <img className={styles.contactIcon} src={icon} alt="Image 404" />
                          </div>
                        </Popover>
                      ))}
                    </div>
                  </li>
                </ul>
              </div>
              { links.map( ({ title, items }) => (
                <div className={classNames("col footer__col", styles.col)} key={title}>
                  <div className={classNames("footer__title", styles.footer__title)}>{title}</div>
                  <ul className="footer__items clean-list">
                    { items.map( ({ to, label }) => (
                       <li className={classNames("footer__item", styles.footer__item)} key={label}>
                          <a href={to} target="_blank" rel="noopener noreferrer" className="footer__link-item">{label}</a>
                       </li>
                    ))}
                  </ul>
                </div>
                )
              )}
            </div>
          </div>
        </footer>
      </div>
      <div className={classNames(styles.footerBottom, "text--center")}>
        <span>
          {`Copyright © ${new Date().getFullYear()}`}
        </span>
        <span>
          {copyRight.company}
        </span>
        <a href={copyRight.beianUrl}>
          {copyRight.beianNo}
        </a>
      </div>
    </>
  );
}
