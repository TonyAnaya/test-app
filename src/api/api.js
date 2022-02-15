const apiLogin = async (userData) =>{
    return await fetch('http://localhost:3001/login',{
        method: 'POST',
        body: JSON.stringify(userData),
        headers:{
            'Content-Type': 'application/json'
        }
    })
    .then(res=>res.json())
    .catch(err => console.log(err))
}

const searchUser = async (searchUse)=>{
    return await fetch('http://localhost:3001/search',{
        method: 'POST',
        body:  JSON.stringify({searchUse}),
        headers:{
            'Content-Type': 'application/json',
        }
    })
    .then(res=>res.json())
    .catch(err => console.log(err)) 

}

const apiRegister = async (regis)=>{
    return await fetch('http://localhost:3001/registro',{
        method: 'POST',
        body:  JSON.stringify({regis}),
        headers:{
            'Content-Type': 'application/json',
        }
    })
    .then(res=>res.json())
    .catch(err => console.log(err)) 
}



export {apiLogin,searchUser, apiRegister};
