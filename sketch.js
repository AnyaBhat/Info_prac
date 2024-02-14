let catApi="https://catfact.ninja/fact"

//add  <script src="p5\p5.js"></script> in html file to run 
function setup(){
     noCanvas();
     delayES8('hello')
      .then(()=>createP('hello'))
      .catch((err)=>console.error(err));
}

function delay(time){
  setTimeout(sayHello,time);
}

async function delayES8(time){
  await delay(time);
  return ;
}

function delay(time){
  return new Promise((resolve,reject)=>{
    if(isNaN(time)){
      reject(new Error('delay requires a valid number'))
    }else{
      setTimeout(resolve,time);
    }
  });
}