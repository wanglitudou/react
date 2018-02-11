import React,{Component} from 'react'
import Button from './button.jsx'

class Message extends Component{
    render(){
        let {message,bg,text}=this.props
        // return <p>{message}<Button bg={bg} text={text}></Button></p>
        return <p>{message}<Button></Button></p>
    }
}

export default Message; 