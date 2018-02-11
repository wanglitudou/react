import React,{Component} from "react"
import * as router from 'react-router-dom'
const {BrowserRouter,Link,Route,NavLink}=router;

import Produc from './produc.jsx';
import Fund from './fund.jsx';

class Product extends Component{
    render(){
        return <div>
           <header className="headers">
           <span>理财主页</span>
           <span className="right"></span>
        </header>
        <section className="sections">
        <div className="list_tab">
         <div className="tab_left">
           <NavLink  to="/index/product/produc">  
              债权产品
           </NavLink>
         </div>
         <div className="tab_right" >
           <NavLink to="/index/product/fund">
             优选基金
           </NavLink> 
        </div>
        </div>
             <Route path="/index/product/fund" component={Fund}></Route>
            <Route path="/index/product/produc" component={Produc}></Route>
        </section>
        </div>
    }
} 

export default Product;