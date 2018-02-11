import React from "react"
import ReactDOM from 'react-dom'

import * as router from 'react-router-dom'
const { BrowserRouter, Switch, Link, Route, NavLink, Redirect, HashRouter } = router;
import './css/style.css';  
import './css/reset.css'; 
import './font/iconfont.css';
import './views/index/index.js'   

console.log(router)

if (NODE.ENV == 'development') {
    console.log("开发")
} else {
    console.log("打包")
}

import login from './views/login.jsx';
import index from './views/index/index.jsx';



ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route exact path="/" render={()=><Redirect to="/index/home" />}></Route>
            <Route path="/login" component={login}></Route>
            <Route path="/register" component={login}></Route>
            <Route path="/index" component={index}></Route>
            <Route path="/activity" component={login}></Route>
           

        </Switch>
    </BrowserRouter>
    ,
    document.querySelector("#root")
) 