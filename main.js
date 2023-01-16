// spread operator
const num1=[1,2,3]
const num2=[4,5,6]
const arr=[...num1,...num2]
console.log(arr)

// constructor
function a(first,second){
    this.name=first
    this.second=second
}
const bro=new a("shubham","bhagyawant")
console.log(bro)

// prototype
// closure
function makeadd(x){
    return function(y){
        return x+y
    }
}
const added=makeadd(5)
console.log(added(2))

// callback
function display(){
console.log("this is callback")
}
function calculate(n1,n2,callback){
    let sum=n1+n2
    console.log(sum)
    callback()
}
calculate(5,5,display)

// callback hell 
function callback1(callback2){
    callback2()
    function callback2(callback3){
        callback3()
            function callback3(callback4){
                  callback4()
                  function callback4(){
                    console.log("callback hell")
                  }
            }
        }
    }
callback1()

// prototype chain
const arr1=[1,2]
console.log(arr1)

// hoisting
add(5,5)
function add(number1,number2){
let sum=number1+number2
console.log(sum)
}

// promise 
let promise=new Promise(function(res,rej){
    x=1
    if(x===0){
        res("ok")
    }else{
       rej("okk")
    }
})
promise.then(function(value){
    console.log(value)
}).catch(function(err){
    console.log(err)
})

// promise chaining 
let c=new Promise(function(resolve,reject){
    setTimeout(()=>resolve(2),1000)
}).then(function(result){
    console.log(result)
    return result*2
}).then(function(result){
    console.log(result)
    return result*2
}).then(function(result){
    console.log(result)
    return result*4
})

// pure function 
function d(num){
 return num*100
}
console.log(d(15))

// pass by value 
let a=10
let b=a
b=20
console.log(a)
console.log(b)

// pass by reference 
let obj1={
    name:"shivani",
    surname:"bhagyawant"
}
let obj2=obj1
obj2.age=23
console.log(obj1)
console.log(obj2)

// async await
let pro =new Promise(function(res,rej){
    setTimeout(()=>{
        res("promise resolved")
    },3000)
})
async function abc(){
    let result=await pro
    console.log(result)
    console.log("this is it ")
}
abc()

// arrow function
const abcd=(num1,num2)=>{
let into=num1+num2
console.log(into)
}
abcd(5,6)

// __proto__ and prototype
function demo(name,mark){
    this.name=name
    this.mark=mark
}
demo.prototype.age="24"
let demo1=new demo("shivani","bhagyawant")
demo1.__proto__.first="pashu"
console.log(demo1)




let obj1={
    name:"shivani",
    age:24
}
function abc(rollno){
    console.log(this.name+" is "+this.age+" years old" + rollno)
}

// call 
abc.call(obj1,123)

// apply
abc.apply(obj1,[123])

// bind 
let value=abc.bind(obj1)
value(123)

// setTimeout
function abc(){
setTimeout(()=>{
console.log("1")
setTimeout(()=>{
    console.log("2")
    setTimeout(()=>{
        console.log("3")
        setTimeout(()=>{
            console.log("4")
            setTimeout(()=>{
                console.log("5")
                setTimeout(()=>{
                    console.log("6")
                    setTimeout(()=>{
                        console.log("7")
                        },7000)
                    },6000)
                },5000)
            },4000)
        },3000)
    },2000)
},1000)
}
abc()

// setInterval
setInterval(()=>{
    console.log("1")
},1000)

// self inviking function
(function abc(){
    console.log("hello")
})()


inheritance


// map 
const a=[1,2,3,4]
const arr=a.map((num)=>num+2)
console.log(arr)

filter 
const a=[2,7,4,9,10,15]
const b=a.filter((num)=>num>10)
console.log(b)

find 
const a=[2,7,4,9,10,15,17]
const b=a.find((num)=>num>10)
console.log(b)


// promise using print 1 to 5
function print(number){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log(number)
            resolve()
        },1000)
    })
}
let pro=Promise.resolve()
for(let i=1;i<=5;i++){
    pro=pro.
    then(()=>print(i))
}


function change(){
    const heading=document.createElement("h1")
    heading.setAttribute("class","heading")
    heading.innerHTML="heading"
    document.getElementById("temp").appendChild(heading)
}

// event loop
function one(){
    console.log("1")
    two()
}

function two(){
    console.log("2")
    three()
}
function three(){
    console.log("3")
    four()
}
function four(){
    console.log("4")
}
one()









