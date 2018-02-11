import React,{Component} from "react"

class Login extends Component{
    componentDidMount(){
        let {state}=this.props.location;
        console.log(state)
        // console.log(this.props.match)
    }
    render(){
        return <h2>这是登录页面</h2>
    }
}

export default Login;