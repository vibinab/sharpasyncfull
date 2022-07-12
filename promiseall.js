const promise1= Promise.resolve('hello')

const promise2= 10;

const promise3= new Promise((resolve,reject)=>setTimeout(resolve,200,'goodbye'));

const promise4=fetch('https://jsonplaceholder.typicode.com/users').then(res=>res.json())

Promise.all([promise1,promise2,promise3,promise4]).then(
    (values)=>console.log(values)
)





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
        },3000)
    })
}


// createPost({title:'Post three', body:'this is post three'})
// .then(getpost) 
// .catch(err=>console.log(err));




const user={
    username:'abc',
    lastactivity:'12'
}

function updateLastUserActivityTime(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{

           user.lastactivity=new Date().getTime();
           resolve(user.lastactivity)

        },1000)
    })
}

// updateLastUserActivityTime().then(getpost).catch(err=>console.log(err))




function userupdate(){
    Promise.all([createPost,updateLastUserActivityTime]).then(([createPostresovles,updateactivityresolves])=>{
        console.log(createPostresovles())
        console.log(updateactivityresolves())

    })
    .catch(err=>console.log(err))
}


userupdate()