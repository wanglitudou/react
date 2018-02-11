import React,{Component} from "react"
import * as router from 'react-router-dom'
const {BrowserRouter,Link,Route,NavLink}=router;
class Produc extends Component {
    constructor() {
        super()
        this.tips = this.tips.bind(this)
    }
    tips() {
        console.log(this.refs) 
    }
    render() {
        return <div className="product">
            <header className="headers">
                <span className="left">
                    <i className="iconfont">&#xe679;</i>
                </span>
                <span className="cent">我感觉？</span>
            </header>
            <section className="sections">
               <div className="gender">
                   <div className="list">
                     <div className="centers">
                     <div className="cent_img">
                     
                       {/* <p>请选择您的性别</p> */}
                       <div className="choose">
                        <div className="ch_left">
                          {/* <p>我是男神</p> */}
                          <label><input name="Fruit" type="radio" value="" /> </label> 
                        </div>
                        <div className="ch_right">
                          {/* <p>我是女神</p> */}
                          <label><input name="Fruit" type="radio" value="" /> </label> 
                        </div>
                       </div>
                       <div className="keep">
                       <NavLink  to="/keep">
                        <button className="go_on" onClick={this.go_next}>继续</button>
                       </NavLink> 
                       
                        </div>
                     </div>
                     </div>
                   </div>

               </div>
            </section>
        </div>
    }
}

export default Produc;