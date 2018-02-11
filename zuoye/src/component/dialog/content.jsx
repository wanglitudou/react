import React,{Component} from "react"

class Content extends Component{
    render(){
        return <div className="dialog-content">
        {this.props.children}
        </div>
    }
}

export default Content;