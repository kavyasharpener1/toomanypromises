console.log('person1:show ticket');
console.log('person2:show ticket');
const PromiseWifeBringingTicks=new Promise((resolve,reject)=>
{
    setTimeout(()=>
    {
        resolve('ticket');
    },3000);
});
const getPocorn=PromiseWifeBringingTicks.then((t)=>
{
    console.log('wife:I have ticket');
    console.log('husband:we should go in');
    console.log('wife:no I am Hungry');
    console.log('wife:I want popcorn');
    console.log('Husband:ok...');
    return new Promise((resolve,reject)=>
    {
        resolve((`${t} popcorn`));
    });
});

const getButter=getPocorn.then((t)=>
{
    console.log('husband:see..I got popcorn');
    console.log('husband:we should go in');
    console.log('wife:no I need some Butter');
    console.log('Husband:ok...');
    return new Promise((resolve,reject)=>
    {
        resolve((`${t} butter`));
    });
});

const getColdDrinks=getButter.then((t)=>
{
    console.log('wife:see I got butter');
    console.log('husband:we should go in');
    console.log('wife:no I need some coldDrinks');
    console.log('Husband:ok...');
    return new Promise((resolve,reject)=>
    {
        resolve((`person 3 :${t} coldDrinks`));
    });
});
getColdDrinks.then((t)=>
{
    console.log('wife:see I got coldDrinks');
    console.log('husband:we should go in');
    console.log('wife:yes we can');
    console.log('Husband:ok. thanks my darling!!');
    console.log(t);
});

console.log('person 4:shows ticket');
console.log('person 5:shows ticket');