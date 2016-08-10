/**
/**
 * hbuilding.js
 *
 * @description :: 楼栋信息表
 *
 * Created by libinqi on 2016/7/3.
 */

import {BaseModel} from './BaseModels/BaseModel';

export default class extends BaseModel {
  constructor() {
    super();
  }

  static tableName = 'hbuilding';
  static attributes = {
        id: {type: 'integer', primaryKey: true, autoIncrement: true},//Id
        bcode: {type: 'string'},//楼栋编码
        bname: {type: 'string'},//楼栋名称
        bheight: {type: 'string'},//楼栋层数
        bplace: {type: 'string'},//楼栋位置
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
