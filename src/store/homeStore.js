/*
 * @Description: 
 * @Autor: lifenglei
 * @Date: 2021-02-27 16:14:28
 */
import {makeAutoObservable} from 'mobx'
console.log(makeAutoObservable)

export default class HomeStore {
  constructor() {
    makeAutoObservable(this)
  }
  homeNum = 90
   addNum() {
    this.homeNum +=1
  }
   lessNum() {
    this.homeNum -= 1
  }
 }
