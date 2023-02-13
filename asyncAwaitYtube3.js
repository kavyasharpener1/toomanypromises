console.log('person1:show ticket');
console.log('person2:show ticket');
const preMovie=async()=>{
const PromiseWifeBringingTicks=new Promise((resolve,reject)=>
{
    setTimeout(()=>
    {
        resolve('ticket');
    },3000);
});

const getPocorn=new Promise((resolve,reject)=>resolve('popcorn'));
const addButter=new Promise((resolve,reject)=>resolve('butter'));
let ticket=await PromiseWifeBringingTicks;
    console.log(`wife:I have ${ticket}`);
    console.log('husband:we should go in');
    console.log('wife:no I am Hungry');
    console.log('wife:I want popcorn');
    console.log('Husband:ok...');
let popcorn=await getPocorn;

    console.log(`husband:see..I got ${popcorn}`);
    console.log('husband:we should go in');
    console.log('wife:no I need some Butter');
    console.log('Husband:ok...');
let butter=await addButter;
console.log(`husbund: i got some ${butter}`);
console.log('husband:anything yelse??');
    console.log('wife:No we are getting late!!');
    console.log('Husband:ok. thanks my darling!!');
return ticket;
}
preMovie().then((m)=>console.log(`person 3: shows ${m}`));
console.log('person 4:shows ticket');
console.log('person 5:shows ticket');