import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

type FeatureItem = {
  title: string;
  image: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: '简单',
    image: '/img/undraw_docusaurus_mountain.svg',
    description: (
      <>
        提供所见即所得的拖拽式开发模式，官方实现大量常用组件及系统API，让您轻松上手低代码开发。
      </>
    ),
  },
  {
    title: '高效',
    image: '/img/undraw_docusaurus_tree.svg',
    description: (
      <>
        提供全栈式解决方案，打通后端数据模型及存储，屏蔽前端工程化细节，让您快速搭建精美页面。
      </>
    ),
  },
  {
    title: '灵活',
    image: '/img/undraw_docusaurus_react.svg',
    description: (
      <>
        提供灵活的低代码研发模式，通过可视化搭建快速实现UI效果，通过JS代码编写轻松搞定业务逻辑。
      </>
    ),
  },
];

function Feature({title, image, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img className={styles.featureSvg} alt={title} src={image} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container" style={{maxWidth: 1400, margin: 'auto'}}>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
