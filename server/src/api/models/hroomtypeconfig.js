/**
/**
 * hroomtypeconfig.js
 *
 * @description :: 房型配置关系信息表
 *
 * Created by libinqi on 2016/7/3.
 */

import {BaseModel} from './BaseModels/BaseModel';

export default class extends BaseModel {
  constructor() {
    super();
  }

  static tableName = 'hroomtypeconfig';
  static attributes = {
        id: {type: 'integer', primaryKey: true, autoIncrement: true},//Id
        rid: {type: 'string'},//房型ID
        rcid: {type: 'string'},//房型配置ID
        priceday: {type: 'float'},//数量
        remark:{type:'string'}// 备注
    }
};
