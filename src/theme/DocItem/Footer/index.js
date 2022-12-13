import React from 'react';
import Footer from '@theme-original/DocItem/Footer';
import { useDoc } from '@docusaurus/theme-common/internal';
import Contributors from '../../../components/Contributors';
import Feedback from '../../../components/feedback';

export default function FooterWrapper(props) {
  const docMeta = useDoc();
  return (
    <>
      <Contributors filePath={docMeta.metadata.source.replace('@site', '')} showTitle/>
      <Footer {...props} />
      <Feedback />
    </>
  );
}
