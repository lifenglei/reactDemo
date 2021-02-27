/*
 * @Description: 本地存储
 * @Autor: lifenglei
 * @Date: 2021-02-27 10:19:24
 */
function getStorage() {
  return JSON.parse(localStorage.getItem('list')) || [];
}
function setStorage(item, id) {
  let listData = JSON.parse(localStorage.getItem('list')) || [];
  if (id) {
    listData = listData.filter((cur) => {
      return cur.id!==id
    })
  } else {
    listData.push(item)
  }
  console.log(listData)
  localStorage.setItem('list',JSON.stringify(listData))
  return listData
}
export {
  getStorage,
  setStorage
}
