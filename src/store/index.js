/*
 * @Description:存放home数据
 * @Autor: lifenglei
 * @Date: 2021-02-27 16:14:40
 */

import HomeStore from './homeStore'
import OneStore from './oneStore'
let oneStore = new OneStore();
let homeStore = new HomeStore();
const stores = {
  oneStore,
  homeStore
}
export default stores
