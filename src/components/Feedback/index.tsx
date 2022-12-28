import React, { useState } from 'react';
import { Checkbox, Input, Button, Affix } from 'antd';
import { LikeFilled, DislikeFilled, CheckCircleFilled } from '@ant-design/icons';
import { sendAESEvent } from '../../utils';
import 'antd/lib/icon/style/index.css';
import 'antd/lib/checkbox/style/index.css';
import 'antd/lib/input/style/index.css';
import 'antd/lib/button/style/index.css';

import './index.scss';

const CHECKBOX_LIST = [
  {
    label: '内容有误',
    value: 'reason1',
  },
  {
    label: '更新不及时',
    value: 'reason2',
  },
  {
    label: '缺乏案例',
    value: 'reason3',
  },
  {
    label: '无法理解',
    value: 'reason4',
  },
  {
    label: '其他',
    value: 'other',
  },
];

function Feedback() {
  const [mode, setMode] = useState<'normal' | 'useless' | 'uselessResult' | 'usefulResult'>('normal');
  const [checkboxValue, setCheckboxValue] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const changeMode = (mode) => {
    if (mode === 'usefulResult') {
      sendAESEvent('feedback', 'useful');
    } else if (mode === 'useless') {
      sendAESEvent('feedback', 'useless');
    } else if (mode === 'uselessResult') {
      sendAESEvent('feedback', 'uselessReason', {
        reasons: checkboxValue,
        otherReason: inputValue,
      });
    }
    setMode(mode);
  };

  const renderHeader = () => {
    return (
      <div className="feedback-header">
        <span>本文档对您是否有帮助？</span>
        <div className="use-icon" onClick={() => changeMode('usefulResult')}>
          <LikeFilled /> 有用
        </div>
        <div className="use-icon" onClick={() => changeMode('useless')}>
          <DislikeFilled /> 没用
        </div>
      </div>
    );
  };

  const renderResult = (useful: boolean) => {
    return (
      <div className="feedback-result">
        {useful ? (
          <>😘 感觉有用！谢谢您的反馈，我们会努力做的更好！</>
        ) : (
          <>😕 感觉没用！谢谢您的反馈，我们会努力做的更好！</>
        )}
        <div className="success-message">
          <CheckCircleFilled /> 提交成功
        </div>
      </div>
    );
  };
  const renderuselessForm = () => {
    return (
      <div className="feedback-form">
        <div className="label">您是否遇到以下问题？</div>
        <Checkbox.Group options={CHECKBOX_LIST} value={checkboxValue} onChange={(val) => setCheckboxValue(val)} />
        {checkboxValue.includes('other') && (
          <Input value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
        )}
        {checkboxValue.length > 0 && (
          <div>
            <Button type="primary" onClick={() => changeMode('uselessResult')}>
              提交反馈
            </Button>
          </div>
        )}
      </div>
    );
  };

  return (
    <Affix offsetBottom={0}>
      <div className="feedback">
        {mode === 'normal' && renderHeader()}
        {mode === 'useless' && renderuselessForm()}
        {['uselessResult', 'usefulResult'].includes(mode) && renderResult(mode === 'usefulResult')}
        <div className="feedback-footer">
          如需获取帮助，欢迎前往&nbsp;
          <a
            onClick={() => {
              sendAESEvent('feedback', 'aliyun');
              window.open('https://developer.aliyun.com/group/yida#/?_k=4qgqh5');
            }}
          >
            宜搭社区
          </a>
          &nbsp; 交流。
        </div>
      </div>
    </Affix>
  );
}

export default Feedback;
