import React,{Component} from "react"

class ButtonParent extends Component{
 

    render(){
        return   <div className="dialog-content">
                  {this.props.children}
                 </div>
      
    }
}

export default ButtonParent;