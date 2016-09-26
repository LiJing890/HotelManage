/**
 * hdiscount.js
 *
 * @description :: 客房优惠设置表信息表
 *
 * Created by libinqi on 2016/7/3.
 */

import {BaseModel} from './BaseModels/BaseModel';

export default class extends BaseModel {
  constructor() {
    super();
  }

  static tableName = 'hdiscount';
  static attributes = {
        id: {type: 'integer', primaryKey: true, autoIncrement: true},//车位Id
        housceamt: {type: 'float'},//客房优惠
        htime: {type: 'datetime'}//客房结算时间
    }
};
