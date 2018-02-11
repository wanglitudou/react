import React,{Component} from "react"

import Swiper from 'swiper'
import '../css/swiper.css';
class Home extends Component{
    constructor(){
        super()
        this.go_to_login=this.go_to_login.bind(this)
    }
    go_to_login(){
      let {history} = this.props;  
      history.push('/login',{from:'home'})
    }
    componentDidMount(){
        var mySwiper=new Swiper('.swiper-container',{
            autoplay:true,
            pagination:".swiper-pagination",
            loop:true,
            autoplayDisableOnInteraction:false
        })
        console.log(this.props)
    }
    render(){
      return  <div className="container"> 
          {/* <h1 onClick={this.go_to_login}>首页</h1>            */}
          <header className="headers">
           <span>开财宝</span>
           {/* <span>11</span> */}
          </header>
          <section className="sections">
          <div className="swiper-container">
            <div className="swiper-wrapper">
                <div className="swiper-slide" ><img src="../src/img/1.jpg" alt=""/></div>
                <div className="swiper-slide" ><img src="../src/img/2.jpg" alt=""/></div>
                <div className="swiper-slide" ><img src="../src/img/3.jpg" alt=""/></div>
                <div className="swiper-slide" ><img src="../src/img/4.jpg" alt=""/></div>
                <div className="swiper-slide" ><img src="../src/img/5.jpg" alt=""/></div>
            </div>
          </div>
           <div className="tab_list">
             <div className="tab_left">
               <p>累计成交金额</p>
               <p><span>29,089.80</span></p>
             </div>
             <div className="tab_right">
               <p>为投资人赚取利益</p>
               <p><span>594.89万元</span></p>
             </div>
           </div>
           <div className="list_list">
             <div className="list_one">
              <p><span><b className="list_bao">押车宝</b></span><span className="list_poc">汽车供应链75期</span></p>
               <div className="list_num">
                    <div className="list_num_one">
                      <span className="poc">12</span>
                      <span className="years">年化收益</span>
                      <span className="num">.1%</span>
                     <p></p>
                    </div>
                    <div className="list_num_two">
                    <p>期限</p>
                     <p>
                      <b className="blo">3</b>个月
                     </p>
                    </div>
                    <div className="list_num_there">
                    <p></p>
                    <p>163人购买</p>
                    </div>
               </div>
             </div>
           </div>
           
          </section>
       </div>
       
        
  
  
    }
} 

export default Home;