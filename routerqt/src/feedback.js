import {createStore} from 'redux'
//创建数据容器
let store = createStore(reduce,9)
//render是一个纯函数，接收2个参数，state,actions
function reducer(state,actions){
    if(actions.type=='increment'){
        return state+actions.step
    }else if(actions.type=='decrement'){
        return state-actions.step
    }else{
        return state
    }
}

//操作视图，触发actions
let container = document.querySelector('h1');
let increment = document.querySelector('.increment');
let decrement = document.querySelector('.decrement');

function actionsCreator(type){
    //定义action
    return{
        type:type,
        step:3
    }
}


function count(state,actions){
    if(actions.type=='increment'){
        return state+actions.step
    }else if(actions.type=='decrement'){
        return state-actions.step
    }else{
        return state
    }
}

function list(state,actions){
    return [...state]
}


increment.onclick=function(){
    //触发actions
    store.dispatch(actionsCreator('increment'))
}

decrement.onclick=function(){
    store.dispatch(actionsCreator('decrement'))
}
//监听器，每一次数据容器的值发生变化，就会触发subscribe
store.subscribe(()=>{
    console.log(store.getState())
    container.innerHTML=store.getState().count;
    
})