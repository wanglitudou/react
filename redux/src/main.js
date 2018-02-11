import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import * as redux from 'redux';
console.log(redux)
let {createStore}=redux;
//createStore  params :reducer,initstate,options  

// reduce人就是一个“纯函数”   params ： state ,action 
function reducer(state=0,action){
     console.log('我才想看',action.step)
   if(action.type=='increment'){
       return state+action.step
   }else if(action.type=='decrement'){
      return state-action.step
   }else{
    return state;
   }
    
}

//创建数据容器 提供的核心api是getState   subscribe dispath  
let store=createStore(reducer);


//改变store的数据，action必须是唯一的
function actionCreate(type){
    return {
            type:type,
            step:2
    }
}

// let action={
//     type:"increment"
// }
// store.dispatch(action);

let increment_btn=document.querySelector('.increment');
let decrement_btn=document.querySelector('.decrement');
let count=document.querySelector('.count')

increment_btn.onclick=function(){
    store.dispatch(actionCreate('increment'));
}

decrement_btn.onclick=function(){
    store.dispatch(actionCreate('decrement'));
}

//每次store的数据发生变化都会触发subscribe()
store.subscribe(function(){
  count.innerHTML=store.getState()
})

ReactDOM.render(
  <div><h1>halou!</h1></div>,
    document.querySelector("#root")
) 
