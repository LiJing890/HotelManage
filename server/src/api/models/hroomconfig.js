/**
 * hroomconfig.js
 *
 * @description :: 房间配置信息表
 *
 * Created by libinqi on 2016/7/3.
 */

import {BaseModel} from './BaseModels/BaseModel';

export default class extends BaseModel {
  constructor() {
    super();
  }

  static tableName = 'hroomconfig';
  static attributes = {
        id: {type: 'integer', primaryKey: true, autoIncrement: true},
        rctype: {type: 'string'},//类型
        rcname: {type: 'string'},//名称
        rcprice: {type: 'float'},//采购价格
        rcdamageprice: {type: 'float'},//损坏赔偿价格
        remark: {type: 'string'}//备注
    }
};
