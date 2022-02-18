import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
// import HomepageFeatures from '../components/HomepageFeatures';
import LearningPath from '../components/LearningPath';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h3 className="hero__title">{siteConfig.title}</h3>
        {/* <p className="hero__subtitle">{siteConfig.tagline}</p> */}
        <div className={styles.buttons}>
          <Link
            className="button button--secondary"
            style={{
              margin: '0 10px'
            }}
            to="/docs/guide/about"
          >
            介绍
          </Link>
          <Link
            className="button button--secondary"
            style={{
              margin: '0 10px'
            }}
            to="/docs/guide/start"
          >
            快速开始
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="宜搭开发者中心，让开发者更好使用宜搭。">
      <HomepageHeader />
      <main>
        {/* <h1 className={styles.title}>产品特性</h1>
        <HomepageFeatures /> */}
        <h1 className={styles.title}>学习路径</h1>
        <LearningPath />
      </main>
    </Layout>
  );
}
