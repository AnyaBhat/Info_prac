const posts=[
    {title:'Post One', body:'This is post one'},
    {title:'Post Two', body:'This is post two'},
]

function getPosts(){ //regular function 
    setTimeout(()=>{
        let output='';
        posts.forEach((post,index)=>{  //ForEach
            output+=`<li>${post.title}</li>`;
        });
        document.body.innerHTML=output; //DOM 
    },1000);
}

// function createPost(post,callback){
//     setTimeout(()=>{
//         posts.push(post);  //Array method 
//         callback(); //calling the function 
//     },2000);
// }

function createPost(post){
    return new Promise((resolve,reject)=>{ //Promise
        setTimeout(()=>{
            posts.push(post);  //Array method 
            const error=false;

            if(!error){   ///If statement
                resolve();
            }else{
                reject('Error!!!!');
            }
        },2000);
    });
}


// createPost({title:'Post Three', body:'This is post three'},getPosts
// ); //CallBack


// createPost({title:'Post Three', body:'This is post three'})
//     .then(getPosts)                    //then-catch 
//     .catch(err=>console.log(err));



//Promise.all
// const promise1= Promise.resolve('Helllo World');
// const promise2= 10;
// const promise3= new Promise((resolve,reject)=> setTimeout(resolve,2000,'Goodbye'));
// const promise4=fetch('https://jsonplaceholder.typicode.com/users').then(res=>res.json());


// Promise.all([promise1,promise2,promise3,promise4]).then((values)=>console.log(values));

//async await fetch

// const promise4='https://jsonplaceholder.typicode.com/users/1';

// async function setup(){  
//     noCanvas();
//     let response=await fetch(promise4);
//     let json=await response.json();
//     createP(json.name)
//     console.log(json);
// }

//async await
// async function init(){
//     await createPost({title:'Post Three', body:'This is post three'})

//     getPosts();
// }

// init();
