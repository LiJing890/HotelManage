/**
/**
 * hcard.js
 *
 * @description :: 卡信息表
 *
 * Created by libinqi on 2016/7/3.
 */

import {BaseModel} from './BaseModels/BaseModel';

export default class extends BaseModel {
  constructor() {
    super();
  }

  static tableName = 'hcard';
  static attributes = {
        id: {type: 'integer', primaryKey: true, autoIncrement: true},//Id
        cardno: {type: 'string'},//卡号
        status: {type: 'string'}//状态
    }
};
