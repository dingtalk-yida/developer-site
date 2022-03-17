import React, { useEffect } from 'react';
import Footer from '@theme-original/Footer';
import { useHistory } from '@docusaurus/router';

const sendPV = (location) => {
  const pageId = location.pathname.replace(/^\/developer-site/, '');
  if (window.AES && window.AES.getConfig('page_id') !== pageId) {
    // 如果之前有pageId 则先发送leave埋点
    if (window.AES.getConfig('page_id')) {
      window.AESPluginPV && window.AESPluginPV.sendLeave();
    }
    // 修改PageId并发送PV埋点
    window.AES.setConfig({
      page_id: pageId,
    });
    window.AESPluginPV && window.AESPluginPV.sendPV();
  }
};

export default function FooterWrapper(props) {
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
      <Footer {...props} />
    </>
  );
}
