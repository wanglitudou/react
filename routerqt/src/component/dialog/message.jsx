import React,{Component} from "react"

class Message extends Component{
    render(){
         return <p>{this.props.children}</p>
    }
}

export default Message;