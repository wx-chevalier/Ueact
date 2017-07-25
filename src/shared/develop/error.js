/* @flow */

import { inBrowser } from '../env/browser';
import { warn } from './warn';
import { config } from './config';

/**
 * Description 处理错误
 * @param err
 * @param vm
 * @param info
 */
export function handleError(err: Error, vm: any, info: string) {
  if (config.errorHandler) {
    config.errorHandler.call(null, err, vm, info);
  } else {
    if (process.env.NODE_ENV !== 'production') {
      warn(`Error in ${info}: "${err.toString()}"`, vm);
    }
    /* istanbul ignore else */
    if (inBrowser && typeof console !== 'undefined') {
      console.error(err);
    } else {
      throw err;
    }
  }
}
