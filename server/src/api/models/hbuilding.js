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
        bplace: {type: 'string'}//楼栋位置


    }
};
