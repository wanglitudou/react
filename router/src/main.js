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


import Home from "./views/home.jsx";
import List from "./views/list.jsx";
import Detail from "./views/detail.jsx";
import Mine from './views/mine.jsx';  
import Produc from './views/produc.jsx';
import Fund from './views/fund.jsx';
ReactDOM.render(
   <BrowserRouter>
    <div className="box"> 
        <header className="headers">
           <span>理财主页</span>
           <span className="right"> <i className="iconfont">&#xe682;</i></span>
        </header>
        <section className="sections">
         <div className="list_tab">
         <div className="tab_left">
           <NavLink  to="/produc">
              债权产品
           </NavLink>
         </div>
         <div className="tab_right" >
           <NavLink to="/fund">
             优选基金
           </NavLink>
        </div>
        </div>
            <Route path="/home" component={Home}></Route>
            <Route path="/list" component={List}></Route>
            <Route path="/detail" component={Detail}></Route> 
            <Route path="/mine" component={Mine}></Route>
            <Route path="/fund" component={Fund}></Route>
            <Route path="/produc" component={Produc}></Route>
        </section>
        <footer className="footers"> 
                <div>  
                <Link to="/home">
                    <span>首页</span> 
                </Link>
                </div>
                <div>
                  <Link to="/list">
                    <span>列表页</span>
                  </Link>
                </div>
                <div><Link to="/detail">
                    <span>详情页</span>
                   </Link>
               </div>
               <div>
                <Link to="/mine">
                  <span>我的</span>  
                </Link>
               </div>  
            </footer>

        </div>
   </BrowserRouter>
   ,   
    document.querySelector("#root") 
) 