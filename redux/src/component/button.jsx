import React,{Component} from 'react' 
import PropTypes from 'prop-types'
class Button extends Component{
    render(){
        console.log(this.context)
        let {bg,text} = this.props
        return <button style={{"background":this.context.bg}}>{text}</button>
    }
}


Button.contextTypes={
    bg:PropTypes.string,
    text:PropTypes.string
}
export default Button;