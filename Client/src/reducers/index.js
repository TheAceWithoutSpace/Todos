import {combineReducers} from 'redux';
//Admin Reducer
const AdminReducer=(admin=false,action)=>{
    if(action.type==='IS_ADMIN'){
        return action.payload
    }
    return admin
}
//TodoReducer
const TodosReducer=(Todos=[],action)=>{
    switch(action.type)
    {
        case 'Get_Todos':{
            return action.payload
        }
        case 'Delete_Todo':{
            return Todos
        }
        case 'Add_Todo':{
            return Todos
        }
        default:{
            return Todos
        }
    }
}
//SubTodo Reducer
const SubTodosReducer=(SubTodos=[],action)=>{
    switch(action.type)
    {
        case 'Get_SubTodos':{
            return action.payload
        }
        case 'Delete_SubTodo':{
            return SubTodos
        }
        case 'Add_SubTodo':{
            return SubTodos
        }
        default:{
            return SubTodos
        }
    }
}
export default combineReducers({
    Admin:AdminReducer,
    Todos:TodosReducer,
    SubTodos:SubTodosReducer
});