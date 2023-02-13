console.log('person1:show ticket');
console.log('person2:show ticket');
const preMovie=async()=>
{
const PromiseWifeBringingTicks=new Promise((resolve,reject)=>
{
    setTimeout(()=>
    {
        resolve('ticket');
    },3000);
});

const getPocorn=new Promise((resolve,reject)=>resolve('popcorn'));
const getCandy=new Promise((resolve,reject)=>resolve('candy'));
const getcake=new Promise((resolve,reject)=>resolve('cake'));

let ticket=await PromiseWifeBringingTicks;
let [popcorn,candy,cake]=await Promise.all([getPocorn,getCandy,getcake]);
console.log(`${popcorn},${candy},${cake}`);
return ticket;
}
preMovie().then((m)=>console.log(`person 3: shows ${m}`));
console.log('person 4:shows ticket');
console.log('person 5:shows ticket');