import React,{Component} from 'react';
import ReactDOM from 'react-dom';

class BaseComp extends Component{
    constructor(){
         super()
         this.state={
             msg:'hello world'
         }
    }
    componentWillMount(){
        let {msg}=this.props
        this.setState({
            msg
        })
    }
    render(){
        return <div>{this.state.msg}</div>
    }
}

 function ho(MyComponent){
    class Enhancer extends Component{
        constructor(){
            super()
            this.state={
                msg:"高阶组件"
            }
        }
         render(){
             return <MyComponent msg={this.state.msg}/>
         }
    }
    return Enhancer
}
const HoComp=ho(BaseComp)

export default HoComp;