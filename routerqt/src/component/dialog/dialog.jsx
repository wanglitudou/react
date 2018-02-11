import React,{Component} from "react";  
import './dialog.css';
import Masker from './masker.jsx';
import Content from './content.jsx';   
import Title from './title.jsx';
import Message from './message.jsx';
import ButtonParent from './ButtonParent.jsx';
import Button from './button.jsx';
class Dialog extends Component{
   
  constructor(){
      super()
      this.state={
          isShow:false
      }
      this.close=this.close.bind(this)
  }
    show(){
      this.setState(state=>{
          state.isShow=true;
          return state;
      })
    }
    close(){
        this.setState(state=>{
            state.isShow=false;
            return state;
        })
    }
    render(){
        let {isShow}=this.state;
        return (isShow &&  <div className="dialog">
     
       <Masker>
         <Content>
          <Title tag="h1">作业做完了吗，还想着玩？<span>X</span></Title>
          <Message>嗯嗯嗯</Message>
        <ButtonParent>
           <Button onclose={this.close}>确定</Button>
           <Button onclose={this.close}>取消</Button>
           
           
         </ButtonParent>
         </Content>
        </Masker>
      </div>)
     
    }
}

export default Dialog;