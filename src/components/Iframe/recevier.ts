
export type Subscriptions = Record<string, Listener[]>;
export type Listener =  (...args: any[]) => void;
export default class Receiver {

  subscriptions: Subscriptions = {};
  constructor() {
    window.addEventListener('message', this.handleMsg.bind(this), false);
  }

  on(type, fn) {
    this.subscriptions[type] = this.subscriptions[type] || [];
    this.subscriptions[type].push(fn);
  }

  off(type, fn) {
    if (!this.subscriptions[type]) return;
    const idx = this.subscriptions[type].findIndex(item => item === fn);
    this.subscriptions[type].splice(idx, 1);
  }

  handleMsg(e) {
    if (!e.data || !e.data.type) return;
    (this.subscriptions[e.data.type] || []).forEach(fn => {
      fn(e.data, e.origin, e.source);
    });
  }

  destroy() {
    window.removeEventListener('message', this.handleMsg);
    this.subscriptions = {};
  }
}