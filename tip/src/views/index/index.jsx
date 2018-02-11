import React,{Component} from "react";
import {BrowserRouter,Link,Route,Switch} from 'react-router-dom';
import './index.css'
import Home from '../home.jsx';
import Product from '../product.jsx';

class Index extends Component{
    constructor(){
        super()
        this.home=this.home.bind(this);
    }
    home(props){
        return <Home{...props}/>
    }
    product(){
        return <Product />
    }
    render(){
        const {url}=this.props.match;
       
        return  <div id="index">
         <div className="list">
          <Switch>
            <Route path={url+'/home'} render={this.home}></Route>
            <Route path={url+'/product'} render={this.product}></Route>
          </Switch>
         </div>
         <nav className="nav">
           <ul>
            <li><Link to={{pathname:'/index/home'}}><span>首页</span></Link></li>
            <li><Link to={{pathname:'/index/product'}}><span>理财</span></Link></li>
            <li><Link to={{pathname:'/index/account'}}><span>账户</span></Link></li>
            <li><Link to={{pathname:url+'/more'}}><span>更多</span></Link></li>
           </ul>
         </nav>
        </div>
    }
}
export default Index; 