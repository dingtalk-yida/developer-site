import React, { useEffect, useState } from 'react';
import { Tooltip } from 'antd';
import Axios from 'axios';
import 'antd/lib/tooltip/style/index.css';
import './index.scss';

export interface IContributorsProps {
  filePath?: string;
  showTitle?: boolean;
  size?: 'medium' | 'large';
}

export interface IContributor {
  username: string;
  url: string;
}

function Contributors({filePath, showTitle, size}: IContributorsProps) {
  const [list, setList] = useState<IContributor[]>([]);
  useEffect(() => {
    if (filePath) {
      Axios.get(
        `https://proapi.azurewebsites.net/doc/getAvatarList?filename=${filePath}&owner=dingtalk-yida&repo=developer-site`
      ).then((res) => {
        if (res && res.data) {
          setList(res.data as IContributor[]);
        }
      });
    } else {
      Axios.get('https://api.github.com/repos/dingtalk-yida/developer-site/contributors').then(res => {
        if (res && res.data) {
          setList(res.data.map(item => ({
            username: item.login,
            url: item.avatar_url,
          })));
        }
      });
    }
  }, []);

  if (!list || list.length === 0) return null;

  return (
    <div className={`contributors ${size || 'medium'}`}>
      {showTitle && <h3>文档贡献者</h3>}
      {(list || []).map((item) => (
        <Tooltip title={`${item.username}`} key={item.username}>
          <a
            className="avatar"
            href={`https://github.com/${item.username}`}
            style={{ backgroundImage: `url(${item.url})` }}
            target="_blank"
          />
        </Tooltip>
      ))}
    </div>
  );
}

export default Contributors;
