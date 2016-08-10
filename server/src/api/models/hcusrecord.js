/**
 * hcusrecord.js
 *
 * @description :: 入住赔偿记录信息表
 *
 * Created by libinqi on 2016/7/3.
 */

import {BaseModel} from './BaseModels/BaseModel';

export default class extends BaseModel {
  constructor() {
    super();
  }

  static tableName = 'hcusrecord';
  static attributes = {
        id: {type: 'integer', primaryKey: true, autoIncrement: true},//车位Id
        h_customer_id: {type: 'string'},//客户入住信息ID
        h_roomconfig_id: {type: 'string'},//房间配置赔偿标准ID
        num: {type: 'integer'}//损坏数量

    }
};
