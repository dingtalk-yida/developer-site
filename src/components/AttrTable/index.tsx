import React from 'react';
import {Table, TableProps} from 'antd';
import 'antd/lib/table/style/index.css'

const COLUMNS = [{
  title: '属性名',
  dataIndex: 'attr',
  width: '20%',
}, {
  title: '属性Code',
  dataIndex: 'code',
  width: '10%',
}, {
  title: '类型',
  dataIndex: 'type',
  width: '10%',
}, {
  title: '数据示例',
  dataIndex: 'demo',
  width: '30%',
}, {
  title: '默认值',
  dataIndex: 'dafault',
  width: '10%',
},{
  title: '备注',
  dataIndex: 'desc',
  width: '20%',
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
    <Table dataSource={props.dataSource} columns={COLUMNS} pagination={false} />
  );
}

export default AttrTable;
