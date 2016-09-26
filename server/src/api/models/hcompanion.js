/**
 * hcompanion.js
 *
 * @description :: 同行人信息表
 *
 * Created by libinqi on 2016/7/3.
 */

import {BaseModel} from './BaseModels/BaseModel';

export default class extends BaseModel {
  constructor() {
    super();
  }

  static tableName = 'hcompanion';
  static attributes = {
        id: {type: 'integer', primaryKey: true, autoIncrement: true},//优惠Id
        h_c_id: {type: 'string'},//入住客_id
        cname: {type: 'string'},//同行人姓名
        csex: {type: 'string'},//同行人性别
        ccard: {type: 'string'},//同行人身份证号
        remark: {type: 'string'}//备注
    }
};
