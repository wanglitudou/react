import React,{Component} from 'react'
import ReactDOM,{render} from 'react-dom'
import MessageList from './component/messagelist.jsx'
let listData=[{
    message:'哈喽',
    bg:'lightblue',
    text:"think"
},
 {
    message:'哈喽2017',
    bg:'lightblue',
    text:"think"  
 }
]




render(
    <div><MessageList listData={listData}></MessageList></div>,
    document.querySelector("#root")
)