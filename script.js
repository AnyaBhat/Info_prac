//Fetch

// fetch('https://reqres.in/api/users',{
//     method:'POST',
//     headers:{
//         'Content-Type':'application/json'
//     },
//     body:JSON.stringify({
//         name:'User 1'
//     })
// }).then(res=>{
//         return res.json()
//     })
//     .then(data=>console.log(data))
//     .catch(error=> console.log('ERROR'));

// fetch('https://reqres.in/api/users')
//     .then(res=>console.log(res))


//Import and export statements

export default class User{
    constructor(name,age){
        this.name=name
        this.age=age
    }
}

export function printName(user){
    console.log(`User's name is ${user.name}`)
}
export function printAge(user){
    console.log(`User is ${user.age} year old`)
} 

// export default User

// export{printAge,printName}