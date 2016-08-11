/**
 * hstayrate.js
 *
 * @description :: 客房入住率信息表
 *
 * Created by libinqi on 2016/7/3.
 */

import {BaseModel} from './BaseModels/BaseModel';

export default class extends BaseModel {
  constructor() {
    super();
  }

  static tableName = 'hstayrate';
  static attributes = {
        id: {type: 'integer', primaryKey: true, autoIncrement: true},
        staynum: {type: 'integer'},//入住
        totalnum: {type: 'integer'},//总数
        daytime: {type: 'datetime'}//
    }
};
