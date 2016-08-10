/**
/**
 * hroomtype.js
 *
 * @description :: 房型信息表
 *
 * Created by libinqi on 2016/7/3.
 */

import {BaseModel} from './BaseModels/BaseModel';

export default class extends BaseModel {
  constructor() {
    super();
  }

  static tableName = 'hroomtype';
  static attributes = {
        id: {type: 'integer', primaryKey: true, autoIncrement: true},//Id
        rtname: {type: 'string'},//房型名称
        rtcode: {type: 'string'},//房型编码
        pricehour: {type: 'float'},//单价_小时
        priceday: {type: 'float'},//单价_天
        remark:{type:'string'},// 备注
        create_by: {type: 'string'},//创建人
        create_name: {type: 'string'},//创建人名称
        create_date: {type: 'datetime'},//创建时间
        update_by: {type: 'string'},//修改人
        update_name: {type: 'string'},//修改人名称
        update_date: {type: 'datetime'},//修改时间
        delflag: {type: 'string'},//删除标志
        del_date: {type: 'datetime'}//删除时间

    }
};
