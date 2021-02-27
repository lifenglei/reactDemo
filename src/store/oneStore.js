/*
 * @Description: 
 * @Autor: lifenglei
 * @Date: 2021-02-27 16:14:34
 */
import { makeAutoObservable } from 'mobx'

export default class OneStore {
  constructor() {
    makeAutoObservable(this)
  }
   oneNum = 90
   changeNum() {
    this.oneNum += 1
    console.log(this.oneNum)
  }
 }
