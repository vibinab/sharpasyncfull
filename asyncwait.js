// console.log('person1: show ticket')
// console.log('person2:shows ticket')

// // const promisewifebringticks=new Promise((resolve,reject)=>{
// //     setTimeout(()=> {
// //         resolve('ticket')
// //     },3000)
// // });

// // const getpopcorn=promisewifebringticks.then((t)=> {
// //     console.log("wife:i have the tickets")
// //     console.log('husband:we should go in' );
// //     console.log('wife:no i am hungry');
// //     return new Promise((resolve,reject)=>resolve(`${t} popcorn`))
// // });

// // const getbutter=getpopcorn.then((t)=>{
// //     console.log('husdand:i got some popcorn')
// //     console.log('husband:we should go in');
// //     console.log('wife:i need butter on my popcorn');
// //     return new Promise((resolve,reject)=>resolve(`${t} butter`))
// // })

// // const getColdDrinks=getbutter.then((t)=>{
// //     console.log('husband:i got butter ')
// //     console.log('husband:we should go in')
// //     console.log('wife:i need colddrink ');
// //     return new Promise((resolve,reject)=>resolve(`${t} colddrink`))
// // })

// // getColdDrinks.then((t)=>console.log(t))


// // async function return promises

// const preMovie=async()=>{

//     const promisewifebringticks= new Promise((resolve,reject)=>{
//         setTimeout(()=>resolve('ticket'),3000);

//     });

//     const getpopcorn= new Promise((resolve,reject)=> resolve(`popcorn`));
    
//     const addbutter= new Promise((resolve,reject)=>resolve(`butter`))

//     const colddrinks= new Promise((resolve,reject)=>resolve(`colddrink`))

//     let ticket= await promisewifebringticks;
//     console.log(`wife: ihave the ${ticket}`)
//     console.log('husband we should go in') 
//     console.log('wife:no i am hungry')

//     let popcorn=await getpopcorn
//     console.log(`husband i got some ${popcorn}`);
//     console.log('husband: we should go in')
//     console.log('wife:i need butter on my popcorn');



//     let butter= await addbutter;
//     console.log(`husband:i got some ${butter} on popcorn`);
//     console.log(`husband: anything else darling`);
//     console.log(`wife:lets got we are getting  late`);
//     console.log(`husband:thank you for the reminder `)

//     let drinks= await colddrinks;
//     console.log(`husband:i got some ${drinks} `);
//     console.log(`wife:lets got we are getting  late`);






//     return ticket;



// }

// preMovie().then((m)=> console.log(`person 3 shows ${m} `))







// console.log('person4: show ticket')
// console.log('person5:shows ticket')




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


async function init(){
   await  createPost({title:'async post',body:'async'})

   getpost();

   await deletepost();
   await deletepost();

   getpost();
}


init()




