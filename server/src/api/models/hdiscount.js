/**
 * hdiscount.js
 *
 * @description :: 客房优惠设置表信息表
 *
 */

import {BaseModel} from './BaseModels/BaseModel';

export default class extends BaseModel {
  constructor() {
    super();
  }

  static tableName = 'hdiscount';
  static attributes = {
        id: {type: 'integer', primaryKey: true, autoIncrement: true},//Id
        hbegintime:{type: 'integer'},//入住时间
        hendtime:{type: 'integer'},//退房时间
        hmendtime:{type: 'integer'},//最晚退房时间
        hmhour: {type: 'integer'},//最大钟点房时间
        housceamt: {type: 'float'}//客房优惠
    }
};
