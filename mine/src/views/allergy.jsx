import React,{Component} from "react"
import * as router from 'react-router-dom'
const {BrowserRouter,Link,Route,NavLink}=router;
class Keep extends Component {
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
                <span className="cent">基本信息</span>    
            </header>  
            <section className="sections">
            <div className="gender">
                   <div className="list">
                     <div className="centers">
                       <p>有无过敏食物</p>
                       <div className="choose">
                        <div className="ch_left">
                          <label><input name="Fruit" type="radio" value="" /> 无</label> 
                        </div>
                        <div className="ch_right">
                          <label><input name="Fruit" type="radio" value="" />有 </label> 
                        </div>
                       </div>
                       <div className="list_list">
                       <p>
                         <span>羊肉</span>
                         <span>海鲜</span>
                         <span>芹菜</span>
                         </p>
                         <p>
                         <span>胡萝卜</span>
                         <span>芹菜</span>
                         <span>芹菜</span>
                         </p>
                         
                       </div>
                       <div className="keep">
                       <NavLink  to="/allergy">
                        <button className="go_on" onClick={this.go_next}>继续</button>
                       </NavLink> 
                       
                        </div>
                     </div>
                     
                   </div>

               </div>
            </section>
        </div>
    }
}

export default Keep;