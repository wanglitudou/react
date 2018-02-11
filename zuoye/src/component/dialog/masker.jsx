import React,{Component} from "react"

class Masker extends Component{
    render(){
      return <div className="dialog-masker">{this.props.children}</div>  
    }
} 

export default Masker;