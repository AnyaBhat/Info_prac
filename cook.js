// Cookie Storage

// localStorage.setItem('name','Bob')
// console.log(localStorage.getItem('name'))
// localStorage.removeItem('name')

// sessionStorage.setItem('name','JOhn')
// console.log(sessionStorage.getItem('name'))
// sessionStorage.removeItem('name')


// document.cookie='name=Kyle;expires='+new Date(2029,0,1).toUTCString()
// document.cookie='lastname=Smith;expires='+new Date(2029,0,1).toUTCString()

// console.log(document.cookie)

// String method
let FullN='Nahaana'
let LastN='Smith'

console.log(FullN+LastN);
console.log(FullN.toLowerCase())
console.log(FullN.toUpperCase())
console.log(FullN.indexOf('h'))
console.log(FullN.lastIndexOf('a'))
console.log(FullN.slice(0,5))
console.log(FullN.substring(4,6))
console.log(FullN.replace('a','e'))

//Array Methods
let ninjas=['shaun','ryu','chun']
console.log(ninjas[1])
console.log(ninjas.length)
console.log(ninjas.join('-'))
console.log(ninjas.indexOf('chun'))
console.log(ninjas.concat(['ken','crystal']))
console.log(ninjas.push('ken'))
console.log(ninjas.pop())
console.log(ninjas)


//Type Conversion
score='100';
score=Number(score);
console.log(score+1);
console.log(typeof (typeof score))

for(let i=0;i<3;i++){
    console.log('loop',i)
}

let i=3
while(i<4){
    console.log('hello',i++)
}
let result=' '

switch(i){
    case 1:
        result=100;
        break;
    case 4:
        result='Hello World';
        break
}

console.log(result)

if (i<=4){
    var a=i*2;
}
console.log(a);

