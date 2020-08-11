import Axios from 'axios'

const serverLink='http://localhost:3000/'

const servercall=async(Status,page,data)=>{
    const Link=serverLink+page+'/'+data;
    if(Status==='get'){
        console.log(Link)
        Axios.get(Link)
        .then(res=>{const Todos=res.data
        return Todos
        })
    }
    else if(Status==='set'){
        const resData=Axios.set(serverLink+page,data)
        return resData.data
    }else if(Status==='delete'){
        const resData=Axios.delete(serverLink+page,data)
        return resData.data
    }

}
export default servercall

