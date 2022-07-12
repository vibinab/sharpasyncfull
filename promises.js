const posts=[
    {title:'post one', body:'this is post one'},
    {title:'post two', body:'this is post two'}
]


function getpost(){
    setTimeout(()=> {
        let output='';
        posts.forEach((post,index)=>{
            output+=`<li>${post.title}</li>`;
        });
        document.body.innerHTML=output;
    },1000);
}


function createPost(post){
    return new Promise((resolve,reject)=> {
        setTimeout(()=> {
            posts.push(post);

            const error=false;


            if(!error){
                resolve()
            }
            else {
                reject("error:something")
            }
        },2000)
    })
}

// createPost({title:'Post three', body:'this is post three'})
// .then(getpost)
// .catch(err=>console.log(err));














// var arr=[1,2,3]

// function getpost(){
//     setInterval(()=>{
//         let output=""
//         arr.forEach((a)=> {
//             output+=`<li>${a}</li>`

//         })
//         document.body.innerHTML=output;
          
//     },1000)
// }

function deletepost(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if (posts.values!==0){
                resolve(posts.pop())
            }
            else{
                reject('array is empty')
            }
        },1000)
    });
}

createPost({title:'post three',body:'this is post three'})
.then(()=>{getpost()
deletepost().then(()=>{
    getpost();
})
})
.catch(err=>console.log(err))


// function deletepost(){
//         return new Promise((resolve,reject)=> {
//             setTimeout(()=> {
//                 console.log(arr)
//                 arr.pop()
//                console.log(arr)
//                 const error=arr.length>0?false:true;
    
    
//                 if(!error){
//                     resolve()
//                 }
//                 else {
//                     reject("arr empty")
//                 }
//             },3000)
//         })
//     }


// deletepost().then(getpost).catch((err)=>console.log(err))
// deletepost().then(getpost).catch((err)=>console.log(err))
// deletepost().then(getpost).catch((err)=>console.log(err))



// function deletepost(){
//         return new Promise((resolve,reject)=> {
//             setTimeout(()=> {
               
    
//                 if(arr.length!==0){
//                     resolve(arr.pop())
//                 }
//                 else {
//                     reject("arr empty")
//                 }
//             },3000)
//         })
//     }


// deletepost().then(getpost).catch((err)=>console.log(err))
// deletepost().then(getpost).catch((err)=>console.log(err))
// deletepost().then(getpost).catch((err)=>console.log(err))