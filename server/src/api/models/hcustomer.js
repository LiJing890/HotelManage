/**
 * hcustomer.js
 *
 * @description :: 入住客户信息信息表
 *
 * Created by libinqi on 2016/7/3.
 */

import {BaseModel} from './BaseModels/BaseModel';

export default class extends BaseModel {
  constructor() {
    super();
  }

  static tableName = 'hcustomer';
  static attributes = {
        id: {type: 'integer', primaryKey: true, autoIncrement: true},//停车场Id
        h_r_id: {type: 'string', unique: true,required:true},//房间ID
        cusname: {type: 'string'},//客户姓名
        cussex: {type: 'string',required:true},//客户性别
        cuscard: {type: 'string'},//客户身份证
        tel: {type: 'string'},//客户电话
        birthplace: {type: 'string'},//客户户籍
        vehiclenumber: {type: 'string'},//车辆牌照
        cardno: {type: 'string'},//卡号ID
        intime : {type: 'datetime'},// 入住时间
        outime  : {type: 'datetime'},//预计离房时间
        actuallefttime  : {type: 'datetime'},//实际离开时间
        deposit : {type: 'float'},//押金
        cost  : {type: 'float'},//消费金额
        loss  : {type: 'float'},//损耗金额
        discount : {type: 'float'},// 优惠金额
        totalmoney  : {type: 'float'},//总费用
        costtype: {type: 'string'},//消费方式
        status : {type: 'string'},// 客户入住状态
        remark  : {type: 'string'},//备注
        create_by: {type: 'string'},//创建人
        create_name: {type: 'string'},//创建人名称
        create_date: {type: 'datetime'},//创建时间
        update_by: {type: 'string'},//修改人
        update_name: {type: 'string'},//修改人名称
        update_date: {type: 'datetime'},//修改时间
        delflag: {type: 'string'},//删除标志
        del_date: {type: 'datetime'},//删除时间
        hycode: {type: 'integer'},//hycode
        hecode: {type: 'integer'},//hecode
        ktamt: {type: 'integer'},//ktamt
        ktnum: {type: 'integer'}//ktnum

    }
};
