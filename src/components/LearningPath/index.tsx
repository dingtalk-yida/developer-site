import React from 'react';
import { Steps } from 'antd';
import Link from '@docusaurus/Link';
import data from './data';
import 'antd/lib/steps/style/index.css';
import './index.scss';

const { Step } = Steps;

function LearningPath() {
  const renderTitle = (title: string) => {
    return <div className="step-title">{title}</div>;
  };
  const renderSubTitle = (config) => {
    const { level = 2 } = config;

    const renderLinkList = (list) => {
      return (list || []).map((item, key) => (
        <Link className="path-item" to={item.path} key={key} style={item.width ? {width: item.width} : {}}>
          {item.title}
        </Link>
      ));
    }

    if (level === 1) {
      return (
        <div className="path-block">
          {renderLinkList(config.children)}
        </div>
      );
    }
    return (
      <div>
        {(config.children || []).map((sub, subKey) => (
          <div key={subKey}>
            <div className="step-sub-title">{sub.title}</div>
            <div className="path-block">
             {renderLinkList(sub.children)}
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="learning-path">
      <Steps direction="vertical">
        {data.map((item, key) => (
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
