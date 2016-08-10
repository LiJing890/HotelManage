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
        remark: {type: 'string'},//备注
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
