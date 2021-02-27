/*
 * @Description: 
 * @Autor: lifenglei
 * @Date: 2021-02-27 09:34:22
 */
import React, { useState, useEffect } from 'react'
import {getStorage,setStorage} from '../src/utils/localStorage'


function List() {
  const [list, setList] = useState([]),
    [inputValue, setInputValue] = useState(''),
    [name,setName] = useState('笑靥')
    useEffect(() => {
    setList(getStorage()||[])
    }, [])
    useEffect(() => {
      document.title=name
    },[name])
  function addItem() {
    setList(setStorage({
      id: new Date().getTime(),
      text:inputValue
    }))
  }
  function removeItem(id) {
    setList(setStorage(null,id))
  }
  
  return (
    <div className="wrapper">
        <div className="input-box">
        <input type="text" placeholder="请输入项目" onChange={(e) => setInputValue(e.target.value)} />
        <input type="text" onChange={(e)=>setName(e.target.value)} />
          <button type="button" onClick={addItem}>Click Me!</button>
        </div>
        <div className="list-box">
          <ul className="list">
            {
              list && list.map((item,index) => {
                return (
                  <li key={index}>
                    <span>{item.text}</span>
                    <button type="button" onClick={()=>{removeItem(item.id)}}>删除</button>
                  </li>
                )
              })
            }
          </ul>
        </div>
      </div>
  )
}
export default List
