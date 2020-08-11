import{createStore} from 'redux'
import reducers from'./reducers'
//set the data in local storage
function saveToLocalStorage(state){
    try{
        const serializedState=JSON.stringify(state)
        localStorage.setItem('state',serializedState)
    }catch(e){
        console.log(e)
    }
}
// get the data from local storage
function loadFormLocalStorag(){
    try{
        const serializedState=localStorage.getItem('state')
        if(serializedState===null) return undefined
        return(JSON.parse(serializedState))
    }catch(e){
        console.log(e)
        return undefined
    }
}
//take the data from local storage
const persistedState=loadFormLocalStorag()
// create store
const store = createStore(
    reducers,
    persistedState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
// save the data in local storage
store.subscribe(()=>saveToLocalStorage(store.getState()))
export default store