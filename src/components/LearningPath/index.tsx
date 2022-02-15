import React from 'react';
import { Steps } from 'antd';
import Link from '@docusaurus/Link';
import { HomeOutlined, SettingFilled, SmileOutlined } from '@ant-design/icons';
import './index.scss';
import { useRouteMatch } from '@docusaurus/router';

const { Step } = Steps;

const Data = [
  {
    title: '指南',
    icon: HomeOutlined,
    children: [
      {
        title: '介绍',
        path: '/docs/guide/about',
      },
      {
        title: '快速开始',
        path: '/docs/guide/start',
      },
      {
        title: '设计器功能介绍',
        path: '/docs/guide/designer',
      },
      {
        title: '核心概念',
        children: [
          {
            title: '全局变量',
            path: '/docs/concept/state',
          },
          {
            title: '远程API',
            path: '/docs/concept/dataSource',
          },
          {
            title: '页面生命周期',
            path: '/docs/concept/lifeCycle',
          },
        ],
      },
    ],
  },
  {
    title: '教程',
    icon: SettingFilled,
    children: [
      {
        title: 'TodoMVC',
        path: '/docs/tutorial/todoMVC',
      },
    ],
  },
  {
    title: '组件',
    icon: SmileOutlined,
    children: [
      {
        title: '布局组件',
        children: [
          {
            title: '选项卡',
            path: '/docs/components/tabLayout',
          },
          {
            title: '布局容器',
            path: '/docs/components/regionalContainer',
          },
        ],
      },
      {
        title: '基础组件',
        children: [
          {
            title: '图标',
            path: '/docs/components/icon',
          },
          {
            title: '按钮',
            path: '/docs/components/button',
          },
          {
            title: '文本',
            path: '/docs/components/text',
          },
          {
            title: '图片',
            path: '/docs/components/image',
          },
        ],
      },
    ],
  },
];

function LearningPath() {
  const renderTitle = (title: string) => {
    return (
      <div className="step-title">{title}</div>
    );
  }
  const renderSubTitle = (items) => {
    return (
      <div>
        {
          (items.children || []).map((sub, subKey) =>(
            <div key={subKey}>
              <div className="step-sub-title">{sub.title}</div>
              <div className="path-block">
                {(items.children || []).map((item, key) => (
                  <Link className="path-item" to={item.path} key={key}>{item.title}</Link>
                ))}
              </div>
            </div>
          ))
        }
      </div>
    )
  };
  return (
    <div className="learning-path">
      <h2 style={{marginBottom: 20}}>学习路径</h2>
      <Steps direction="vertical">
        {Data.map((item, key) => (
          <Step
            status="finish"
            title={renderTitle(item.title)}
            key={key}
            icon={<item.icon />}
            subTitle={renderSubTitle(item)}
          ></Step>
        ))}
      </Steps>
    </div>
  );
}

export default LearningPath;
