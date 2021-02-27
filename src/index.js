/*
 * @Description: 
 * @Autor: lifenglei
 * @Date: 2021-02-26 10:39:14
 */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Router from './router/router'
import { Provider } from 'mobx-react'
import stores from './store/index'
import { configure } from 'mobx';
ReactDOM.render(
  <Provider {...stores}>
    <App></App>
    <p>这是一个路由页面</p>
     <Router />
  </Provider>
 ,
  document.getElementById('root'))

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
configure({
  enforceActions:'observed'
})
