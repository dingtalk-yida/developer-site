import * as React from 'react';
import { Button } from '@ali/deep';
import YidaLogo from '@/components/YidaLogo';
import UtilsCase from '@/components/UtilsCase';
import styles from './index.module.scss';

const Guide = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Welcome to YidaFE Cloud Dev Tool!</h2>
      <p className={styles.description}>提高效率，早点回家！</p>
      <YidaLogo/>
      <div className={styles.action}>
        <a
          href="https://yuque.antfin-inc.com/yidafe"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            marginRight: 10,
          }}
        >
          <Button type="primary" size="large">
            宜搭前端知识库
          </Button>
        </a>
        <a
          href="https://www.aliwork.com/s/yida-dev"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            marginRight: 10,
          }}
        >
          <Button type="secondary" size="large">
            宜搭工作台
          </Button>
        </a>
        <UtilsCase />
      </div>
    </div>
  );
};

export default Guide;
