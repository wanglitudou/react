import {combineReducers} from 'redux';
function todolist(state=[],actions){
 switch(actions.type){
     case 'add':
         return [...state,actions.data];
         break;
        case 'updateStatus':
        [...state]. map((item,index)=>{ 
         if(item.data==actions.data.target){
            //  item.status=actions.data .newStat us
         }
         return item
     })   
    //  case 'clear':
    // return [...state].filter((item)=>{
    //     if(item.status!=='finished'){
    //         return item
    //     }
    // })
        default:return [...state] 
 }
}

function filter(state="all",actions){
   if(actions.type=='filter-name'){
        return actions.text;
   }else{
       return state
   }
} 
export default combineReducers({
    todolist,
    filter
})