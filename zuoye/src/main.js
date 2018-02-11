import React from "react"
import ReactDOM from 'react-dom'
import * as router from 'react-router-dom'
console.log(router)

const {BrowserRouter,Link,Route}=router;

if(NODE.ENV=='development'){
    console.log("开发")
}else{
    console.log("打包")
}


import Dialog from "./component/dialog";
import Home from "./views/home.jsx"
import List from "./views/list.jsx"
import Detail from "./views/detail.jsx"

ReactDOM.render(
   <BrowserRouter>
    <div>
       <ul>
        <li><Link to="/home">首页</Link></li>
        <li><Link to="/list">列表页</Link></li>
        <li><Link to="/detail">详情页</Link></li>
        </ul>
        <Route path="/home" component={Home}></Route>
        <Route path="/list" component={List}></Route>
        <Route path="/detail" component={Detail}></Route>
        </div>
   </BrowserRouter>
   ,
    document.querySelector("#root") 
    

) 