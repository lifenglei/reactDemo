/*
 * @Description:路由组件
 * @Autor: lifenglei
 * @Date: 2021-02-27 15:55:07
 */
import React, { Component,Fragment } from 'react'
import {HashRouter,Route} from 'react-router-dom'
import One from '../pages/one'
import Home from '../pages/home'
class Router extends Component {
  render() {
    return (
      <HashRouter>
        <Fragment>
          <Route exact path={'/'} component={Home }/>
          <Route exact path={'/one'} component={One } />
        </Fragment>
      </HashRouter>
    )
  }
}
export default Router
