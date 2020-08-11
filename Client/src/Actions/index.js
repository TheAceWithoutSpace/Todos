//Action creater
export const isAdmin=admin=>{
    return{
        type:'IS_ADMIN',
        payload:admin
    }
}
//get Todos 
export const GetTodos=Todos=>{
    return{
        type:'Get_Todos',
        payload:Todos
    }
}
//get Subtodos
export const GetSubTodos=SubTodos=>{
    return{
        type:'Get_Todos',
        payload:SubTodos
    }
}