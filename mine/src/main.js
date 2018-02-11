import React from "react"
import ReactDOM from 'react-dom'

import * as router from 'react-router-dom'
const {BrowserRouter,Link,Route,NavLink}=router;
import './css/style.css'
import './css/reset.css';
import './font/iconfont.css';

console.log(router)

if(NODE.ENV=='development'){    
    console.log("开发")
}else{
    console.log("打包")
}

import Produc from './views/produc.jsx';
import Total from './views/total.jsx';
import Keep from './views/keep.jsx'
import Allergy from './views/allergy.jsx'
ReactDOM.render(
   <BrowserRouter>
    <div>
    <Route exact path="/" component={Total}></Route> 
    <Route path="/produc" component={Produc}></Route>  
    <Route path="/keep" component={Keep}></Route>  
    <Route path="/allergy" component={Allergy}></Route>  
    </div>
   </BrowserRouter>
   ,   
    document.querySelector("#root") 
) 