import UiUtils from '@ali/yc-ui-utils';
import Api from './api';

const { utils, ui } = UiUtils;

const context = utils.getDBContent();

context.create('App', Api.App);

context.errorHandler = ui.errorHandler;

export default context.api;
