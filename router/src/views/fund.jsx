import React,{Component} from "react"
import Dialog from "../component/dialog"
class Fund extends Component{
    constructor(){
        super()
        this.tips=this.tips.bind(this)
    }
    tips(){
        console.log(this.refs)
        this.refs.dialog.show()
    }
    render(){
        return <div className="home">
              <div className="list_list">
               <p>国投瑞银美丽中国混合 <span>(0000663)混合型</span></p>
               <div className="list_span">
                <div className="list_one">
                   <div className="left_left">
                    <span className="add">+</span>
                    <span >34</span>
                   </div>
                   <div className="right_right">
                    <p>季涨幅</p>
                     <p><span>.48%</span></p> 
                   </div> 
                </div>
                <div className="list_two">
                 <p><span>单位净值</span></p>
                 <p><span className="blod">2.0320</span></p>
                </div>
                <div className="list_there">3</div>

               </div>
              </div>
               
              </div>
    }
}

export default Fund;