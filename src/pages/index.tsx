import React, { useEffect } from 'react';
import clsx from 'clsx';
import 'core-js/features/object/from-entries';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';

// import HomepageFeatures from '../components/HomepageFeatures';
import LearningPath from '../components/LearningPath';
import Contributors from '../components/Contributors';

function HomepageHeader() {
  useEffect(() => {
    const search = new URLSearchParams(location.search);
    const from = search.get('from');
    
    if (from === 'appCreate') {
      const corpId = search.get('corpId');
      const userId = search.get('userId');
      if (corpId && userId) {
        try {
          const ec = encodeURIComponent(corpId);
          const eu = encodeURIComponent(userId);
          window.goldlog.record(
            '/YIDA.growth.creater2DevCenter',
            'EXP',
            `corpId=${ec}&userId=${eu}`
          );
          fetch(`/query/commodity/pushBizMsg?corpId=${ec}&userId=${eu}&leadsFrom=createAppReact`)
        } catch (e) {}
      }
    }
  }, []);
  
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
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
  // const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="首页"
      description="钉钉宜搭开发者中心，让开发者更好使用钉钉宜搭。">
      <HomepageHeader />
      <main>
        <div className="homepage-content">
          {/* <h1 className={styles.title}>产品特性</h1>
          <HomepageFeatures /> */}
          <h1 className={styles.title}>学习路径</h1>
          <LearningPath />

          <h1 className={styles.title}>内容贡献者</h1>
          <Contributors size="large"/>
        </div>
      </main>
    </Layout>
  );
}
