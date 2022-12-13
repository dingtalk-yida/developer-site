/* eslint-disable camelcase */

interface Window {
  AESPluginEvent: (key: string, args: any) => void;
  AES_QUEUE: (() => void) [];
}

