import React from 'react';
import DocItemFooter from '@theme-original/DocItemFooter';
import Contributors from '../../components/Contributors';

export default function DocItemFooterWrapper(props) {
  return (
    <>
      <Contributors filePath={props.content.metadata.source.replace('@site', '')} showTitle/>
      <DocItemFooter {...props} />
    </>
  );
}
