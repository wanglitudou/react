import React,{Component} from 'react'
import PropTypes from 'prop-types'
import Message from './message.jsx'


class MessageList extends Component{
    getChildContext(){
        return {
            bg:'red',
            text:'确定'
        }
    }
    render(){
        let {listData}=this.props
        let list=listData.map((item,index)=><Message key={index} message={item.message} bg={item.bg} text={item.text}></Message>)
        return <div>{list}</div>
    }
}

MessageList.childContextTypes={
    bg:PropTypes.string,
    text:PropTypes.string
}

export default MessageList;