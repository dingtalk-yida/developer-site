import * as React from 'react';
import { Button, Message } from '@ali/deep';
import DB from '@/api/index';

const UtilsCase = () => {
  return (
    <Button
      type="primary"
      size="large"
      onClick={() => {
        DB.App.getInfo().then(() => {
          Message.success('success');
        }, DB.errorHandler);
      }}
    >
      发起请求
    </Button>
  );
};

export default UtilsCase;