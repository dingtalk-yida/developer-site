interface IParams {
  [key: string]: any;
}

type IRequest = (params?: IParams) => Promise<any>;

export interface IAppApi {
  getInfo: IRequest;
}

export default {
  getInfo: {
    url: "https://mocks.alibaba-inc.com/mock/kov988uy/temp",
    method: "GET",
  }
};
