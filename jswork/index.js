//console.log("Hello World");
// const a=12;
// console.log("a="+a);
// if(a>10){
//     a=30;
//     console.log("Hi",a);
// }
// console.log("Hello",b);


// let a="12";
// let b=12;
// let sim = Symbol("122");
// let today = Date();
// console.log(Symbol("122"));
// console.log(typeof a);
// if(a===b)
//     console.log("Hi");

// let d=function (str="Java"){
//     console.log("Hello "+str);
// }
// d();
// console.log(d);


// function sum(a,b,c=12){
//     return a+b+c;
// }
// let t = sum(10,29);
// console.log(t);

// function cCompiler(){
//    return "c compiler selected";
// }
// function javaCompiler(){
//    return "java compiler selected";
// }

// function selectLanguage(clbk){
//    console.log("hi,you have selected "+clbk);
// }
// selectLanguage(cCompiler());



// function selectLanguage(lang){
//    let data;
// if(lang=='c'){
//     function cCompiler(){
//         console.log("c compiler selected");
//      }
//      data = cCompiler();
// }
// if(lang=='java'){
//      function javaCompiler(){
//         console.log("java compiler selected");
//      } 
//      data = javaCompiler();
//     } 
//     return  data;
// }
// selectLanguage('java');

// console.log("Hello JS");
// console.dir(document);
// let p=document.getElementsByClassName("parent");
// console.log(p);
// console.dir(p);
// console.log(p[0]);
// //p[0].innerText = "Hello , full stack";
// p[0].innerHTML="<h2 style=color:red;>ABESEC</h2>";
// const h1 = document.createElement("h1");
// h1.innerText="Element is created by DOM";
// h1.style.backgroundColor="cyan";
// h1.style.color="red";
// p[0].appendChild(h1);
// console.log(h1);

// const img=document.createElement('img');
// img.src='SOU 2.jpg';
// img.setAttribute("height","200px");
// console.log(img);
// p[0].appendChild(img);
// p[0].removeChild(img);

// const button = document.getElementById("btn");
// console.log(button);
// const display = document.getElementById("disp");
// console.log(display);
// Data=()=>{
//     console.log("calling Data function");
//     display.innerHTML="<h3 style=color:red>Welcome to CSE Department</h3>";
// // }

// // button.addEventListener("click",Data);


// const promise1 = new Promise(
//     (resolve,reject)=>{
//       let a = 12;
//       if(a<10){
//         resolve("OK");
//       }
//       else{
//         reject("NOT OK");
//       }
//     }
// );
// promise1.then(msg=>{console.log(msg)}).catch(error=>{console.log(error)}).finally(msg=>{console.log("All resources have been closed")});

// const promise2 = new Promise(
//     (resolve,reject)=>{
//       let a = Math.random()*100;
//       console.log(a);
//       if(a>100 && a<200){
//         resolve("Value is valid");
//       }
//       else{
//         reject("value is not valid");
//       }
//     }
// )
// promise2.then(msg=>{console.log(msg)}).catch(error=>{console.log(error)}).finally(msg=>{console.log("All resources have been closed")});

// const promise3 = new Promise(
//     (resolve,reject)=>{
//         resolve({name:"Amit",branch:"CSE"});
//     }
// );

// promise3.then(msg=>{console.log(msg)}).catch(error=>{console.log(error)}).finally(msg=>{console.log("All resources have been closed")});

const respoense=fetch("https://dummyjson.com/products");
respoense.then(data=>{
    console.log(data);
    data.json().then(res=>
        {
            let list=[];
            for(let i=0;i<6;i++){
            list.push(console.log(res.products[0].id+" "+res.products[0].title))
        }
    }
    )
})
