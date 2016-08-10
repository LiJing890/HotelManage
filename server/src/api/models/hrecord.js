/**
/**
 * hrecord.js
 *
 * @description :: 客房入住记录信息表
 *
 * Created by libinqi on 2016/7/3.
 */

import {BaseModel} from './BaseModels/BaseModel';

export default class extends BaseModel {
  constructor() {
    super();
  }

  static tableName = 'hrecord';
  static attributes = {
        id: {type: 'integer', primaryKey: true, autoIncrement: true},//Id
        userid: {type: 'string'},//用户ID
        username: {type: 'string'},//用户名称
        startdate: {type: 'datetime'},//上班时间
        enddate: {type: 'datetime'},//下班时间
        innum: {type: 'integer'},//开房数
        outnum: {type: 'integer'},//退房数
        amt: {type: 'float'},//客房费
        state: {type: 'string'}//状态
    }
};
