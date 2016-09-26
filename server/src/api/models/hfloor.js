/**
/**
 * hfloor.js
 *
 * @description :: 楼层信息信息表
 *
 * Created by libinqi on 2016/7/3.
 */

import {BaseModel} from './BaseModels/BaseModel';

export default class extends BaseModel {
  constructor() {
    super();
  }

  static tableName = 'hfloor';
  static attributes = {
        id: {type: 'integer', primaryKey: true, autoIncrement: true},//Id
        h_b_id: {type: 'string'},//楼栋ID
        floorcode: {type: 'string'},//楼层编号
        floor: {type: 'string'},//楼层名称
        roomcount: {type: 'integer'}//房间数
    }
};
