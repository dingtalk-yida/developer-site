import React from 'react';
import {Table, TableProps} from 'antd';
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import 'antd/lib/table/style/index.css';
import './index.scss';

const COLUMNS = [{
  title: '属性',
  dataIndex: 'code',
  width: '20%',
  render: (code) => <span style={{fontWeight: 600, display: 'inline-block'}}>{code}</span>
}, {
  title: '说明',
  dataIndex: 'desc',
  width: '30%',
  render: (desc) => <ReactMarkdown children={desc}  remarkPlugins={[remarkGfm]}/>
}, {
  title: '类型',
  dataIndex: 'type',
  width: '10%',
  render: (type) => <span style={{color: '#c41d7f', display: 'inline-block'}}>{type}</span>
}, {
  title: '默认值',
  dataIndex: 'default',
  width: '10%',
  render: (val) => val === '-' ? <span>-</span> : <ReactMarkdown children={val}  remarkPlugins={[remarkGfm]}/>
}, {
  title: '数据示例',
  dataIndex: 'demo',
  width: '30%',
  render: (demo) => <div style={{width: '100%'}}><ReactMarkdown children={demo} remarkPlugins={[remarkGfm]}/></div>
}];

export interface TableRecord {
  attr?: string;
  code?: string;
  type?: string;
  demo?: string;
  dynamic?: string;
  desc?: string;
}

function AttrTable(props: Pick<TableProps<TableRecord>, 'dataSource'>) {
  return (
    <Table className="attr-table" dataSource={props.dataSource} pagination={false} columns={COLUMNS} />
  );
}

export default AttrTable;
