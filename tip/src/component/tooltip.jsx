import React,{Component} from 'react'

import ReactDOM from 'react-dom'

export default class Tooltip extends Component{
    constructor(){
        super()
        this.el=document.querySelector('.info-wrap');
        console.log(this.el)
    }
    render(){
        //  return this.props.children
        return this.props.children!=='' && ReactDOM.createPortal(<h3 className="info">{this.props.children}</h3>,this.el);

    }
}
