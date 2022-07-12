// const posts=[
//   {title:'post one', body:"this is post one"},
//   {title:'post two', body:'this is post two'}

// ];



// function getpost(){
//     setTimeout(()=> {
//         let output='';
//         posts.forEach((post,index)=> {
//             output+=`<li>${post.title}</li>`
//         });
//         document.body.innerHTML=output;

//     },1000);
// }



// sync
// function createPost(post){
//     setTimeout(()=>{
//         posts.push(post)
//     },2000)
// }

// async
// function createPost(post, callback){
//     setTimeout(()=>{
//         posts.push(post);
//         callback();
//     },5000)
// }
// createPost({title:"post three", body:"this is post three"},getpost)

// function create4thPost(post,callback){
//     setTimeout(()=> {
//         posts.push(post);
//         callback()
//     },10000)

// }

// create4thPost({title:"post four", body:"this is post four"},getpost)






const posts1=[
    {title:'post1 one', body:"this is post1 one", createdAt: new Date().getTime()},
    {title:'post1 two', body:'this is post1 two',createdAt: new Date().getTime()}
  
  ];

  let intervalid=0; 


  function getpost1(){

    clearInterval(intervalid)
    intervalid=setInterval(()=>{
        let output=""
        for(let i=0;i<posts1.length;i++){
         output+=`<li>${posts1[i].title}-last updated ${new Date().getTime()-posts1[i].createdAt} seconds</li>`
        }
        document.body.innerHTML=output;

    },1000)
   
 }
 
 



function createpost1(post,callback){
    setTimeout(()=> {
        posts1.push({...post, createdAt:new Date().getTime()})
        callback()
    },8000)
}

createpost1({title:"post three", body:"this is post three"},getpost1)




















// var arr=[1,2,3]

// function getpost(){
//     setTimeout(() => {
//         let output=""
//         arr.forEach((a)=> {
//             output+=`<li>${a}</li>`
//         })
//       document.body.innerHTML=output  
//     }, 1000);
// }


// function poppost(callback){
//     setInterval(()=>{
//         arr.pop()
//         callback()
//     },2000)
// }

// poppost(getpost)



// getpost()