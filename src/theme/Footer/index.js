import React, { useEffect } from 'react';
import 'core-js/features/object/from-entries';
import Footer from '@theme-original/Footer';
import { useHistory } from '@docusaurus/router';
import { sendPV } from '../../utils';

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
