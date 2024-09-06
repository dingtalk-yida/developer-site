export function sendAESEvent(eventName: string, ...customArgs: any[]): void {
  const sendLog = () => {
    if (window.AESPluginEvent) {
      const extraArgs = {} as Record<string, any>;
      for (let i = 1; i <= 6; i++) {
        if (customArgs[i - 1]) {
          extraArgs[`c${i}`] = customArgs[i - 1];
        }
      }
      window.AESPluginEvent(eventName, {
        et: 'EXP',
        ...extraArgs,
      });
    }
  }

  if (window.AESPluginEvent) {
    return sendLog();
  }

  window.AES_QUEUE = window.AES_QUEUE || [];
  window.AES_QUEUE.push(() => {
    setTimeout(() => sendLog(), 0);
  });
}

export function sendPV(location): void {
  const pageId = location.pathname.replace(/^\/developer-site/, '');
  if (window.AES && window.AES.getConfig('page_id') !== pageId) {
    // 如果之前有pageId 则先发送leave埋点
    if (window.AES.getConfig('page_id')) {
      window.AESPluginPV && window.AESPluginPV.sendLeave();
    }
    const params = new URLSearchParams(location.search);
    const query = params.get('search');
    if (query) {
      window.AES.setConfig({
        dim1: query.length,
      });
    }
    // 修改PageId并发送PV埋点
    window.AES.setConfig({
      page_id: pageId,
    });
    window.AESPluginPV && window.AESPluginPV.sendPV();
  }
};