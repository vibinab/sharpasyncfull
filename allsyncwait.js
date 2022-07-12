console.log('person1:shows ticket')
console.log('person2:  shows ticket')

const preMovie= async()=> {
    const promisewifebringticks=new Promise((resolve,reject)=>{
        setTimeout(()=> resolve('ticket'),3000)
    })
    
    const getpopcorn= new Promise((resolve,reject)=>resolve('popcorn'));

    const getcandy= new Promise((resolve,reject)=> resolve('candy'));

    const getcoke= new Promise((resolve,reject)=>resolve('coke'));

    let ticket= await promisewifebringticks;

    let [popcorn,candy,coke]=await Promise.all([getpopcorn,getcandy,getcoke])

    console.log(`${popcorn},${candy},${coke}`)

    return ticket
}

preMovie().then((m)=>console.log(`person 3:shows ${m}`));

console.log('person4:shows ticket')
console.log('person5:  shows ticket')










console.log('person4: shows ticket')
console.log('person5: shows ticket')