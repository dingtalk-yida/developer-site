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