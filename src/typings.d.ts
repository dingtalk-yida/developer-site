/* eslint-disable camelcase */

interface Window {
  AES: any;
  AESPluginEvent: (key: string, args: any) => void;
  AESPluginPV: any;
  AES_QUEUE: (() => void) [];
}

