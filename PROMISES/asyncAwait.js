console.log('person1: shows ticket');
console.log('person2: shows ticket');
const preMovie=async()=>{
const promiseWifeBringsTicks=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('ticket');
    },3000)
})
/*promiseWifeBringsTicks.then((t)=>{
console.log(`person3: shows ${t}`);
})*/
const getPopcorn=new Promise((resolve,reject)=>resolve(`popcorn`));
const addbutter=new Promise((resolve,reject)=>resolve(`butter`));
const getColdDrinks=new Promise((resolve,reject)=>resolve(`colddrinks`));
let ticket= await promiseWifeBringsTicks;


    console.log(`wife: I have the ${ticket}`);
    console.log('husband: We should go in');
    console.log('wife: No i am hungry');
    
let popcorn=await getPopcorn;

    console.log(`husband: I got some ${popcorn}`);
    console.log('husband: We should go in');
    console.log('wife: I need butter on my popcorn');
   
let butter=await addbutter;
     console.log(`husband: I got some ${butter} on ${popcorn}`);
    
     console.log(`wife: Its too hot I also want a cold drink`);
let colddrinks =await getColdDrinks ;
     console.log(`husband: I got ${colddrinks}`);
    console.log('husband: Anything else darling');
    console.log('wife: Lets go we are getting late');
    console.log('husband: Thank you for the reminder *grins*');
return ticket;

} 
preMovie().then((m)=>console.log(`person3: shows ${m}`));
console.log('person4: shows ticket');
console.log('person5: shows ticket');