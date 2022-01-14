import App, { IAppApi } from './apis/app';


export class DB {
  static errorHandler: (error: any, wait?: number, callback?: any) => void;
  static App: IAppApi;
}

// 注意: index.js 中还要配一下 context.create('XXX', Api.XXX);
export default {
  App
};
