import React,{Component,Fragment} from "react"
import ReactDOM,{render} from 'react-dom'

import Tooltip from './component/tooltip.jsx'
import './css/index.css'

export default class App extends Component{
    constructor(){
        super()
        this.state={
            tips:''
        }
        this.tip=this.tip.bind(this)
    }
    tip(){
        this.setState({
            tips:"  要提示的信息?"
        })
    } 
    render(){
        return(
           <Fragment>
            <div className="tooltip">
            <h1 onMouseOver={()=>{this.tip(" 要提示的信息?")}} onMouseOut={()=>{this.tip('')}}>鼠标滑过弹出tooltip提示框</h1>
             <Tooltip>
              {this.state.tips}
             </Tooltip>
            </div>
     
           
           </Fragment>
        )
    }

  
}