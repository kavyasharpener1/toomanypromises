console.log('person1:show ticket');
console.log('person2:show ticket');
const PromiseWifeBringingTicks=new Promise((resolve,reject)=>
{
    setTimeout(()=>
    {
        resolve('ticket');
    },3000);
});
PromiseWifeBringingTicks.then((t)=>
{
    console.log(`person 3:shows ${t}`);
});
console.log('person 4:shows ticket');
console.log('person 5:shows ticket');