import React from 'react';
import { Table, TableProps } from 'antd';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import formProps from './formProps';
import 'antd/lib/table/style/index.css';
import './index.scss';

export interface TableRecord {
  code?: string;
  type?: string;
  desc?: string;
  default?: string;
}
export interface IAttrTableProps extends Pick<TableProps<TableRecord>, 'dataSource'> {
  category?: string;
}
function AttrTable(props: IAttrTableProps) {
  const { category, dataSource } = props;
  const {siteConfig} = useDocusaurusContext();
  const updateBaseUrl = (mk: string): string => {
    return mk.replace(/\[(.*)\]\(\/docs\/(.*)\)/g, (m, text, path) => `[${text}](${siteConfig.baseUrl}docs/${path})`);
  }

  const COLUMNS = [
    {
      title: '属性',
      dataIndex: 'code',
      width: '20%',
      render: (code) => <div style={{ fontWeight: 600 }}>{code}</div>,
    },
    {
      title: '说明',
      dataIndex: 'desc',
      width: '45%',
      render: (desc) => <ReactMarkdown children={updateBaseUrl(desc)} remarkPlugins={[remarkGfm]} />,
    },
    {
      title: '类型',
      dataIndex: 'type',
      className: 'attr-type',
      width: '20%',
      render: (type) => <ReactMarkdown children={updateBaseUrl(type)} remarkPlugins={[remarkGfm]} />,
    },
    {
      title: '默认值',
      dataIndex: 'default',
      width: '15%',
      wordBreak: true,
      render: (val) => ((val === '-' || !val) ? <div> - </div> : <ReactMarkdown children={updateBaseUrl(val)} remarkPlugins={[remarkGfm]} />),
    },
  ];

  const data =
    (category === 'form'
      ? [...formProps, ...(dataSource || [])]
      : [...(dataSource || [])]).sort((a, b) => (a.code < b.code ? -1 : 1));
  return <Table className="attr-table" dataSource={data} pagination={false} columns={COLUMNS} />;
}

export default AttrTable;
