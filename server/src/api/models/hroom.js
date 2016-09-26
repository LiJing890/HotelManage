/**
/**
 * hroom.js
 *
 * @description :: 房间信息信息表
 *
 * Created by libinqi on 2016/7/3.
 */

import {BaseModel} from './BaseModels/BaseModel';

export default class extends BaseModel {
  constructor() {
    super();
  }

  static tableName = 'hroom';
  static attributes = {
        id: {type: 'integer', primaryKey: true, autoIncrement: true},//Id
        h_f_id: {type: 'string'},//楼层ID
        rid: {type: 'string'},//房型ID
        roomno: {type: 'string'},//房号
        rstatus: {type: 'string'}//房间状态
    }
};
