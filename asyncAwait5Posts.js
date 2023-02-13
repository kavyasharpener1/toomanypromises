const posts=[
    {
        title:"post One",
        body:"this is post one",
        createdAt:new Date().getTime()
    }];
let intervalId=0;
const prePost=async()=>{
const getpost=new Promise((resolve,reject)=>{
{
    clearInterval(intervalId);
    //timerId
    resolve(
    intervalId=setInterval(()=>
    {

        let output=''
        for(let i=0;i<posts.length;i++)
        {
            output+=`<li>${posts[i].title}-last updated ${((new Date().getTime())-(posts[i].createdAt))/1000} seconds ago </li>`;
        }
        //console.log(timerId);
        console.log("timer running id",intervalId);
        document.body.innerHTML=output;

    },1000));
}
})
//getPost();
const create2ndPost=new Promise((resolve,reject)=>
{
    resolve(
    setTimeout(() => {
        posts.push({...post,createdAt:new Date().getTime()});
        callback();
    }, 2000));
})
const create3rdPost=new Promise((resolve,reject)=>
{ 
  resolve(setTimeout(() => {
        posts.push({...post,createdAt:new Date().getTime()});
        callback();
    }, 3000));
})
const created4thPost=new Promise((resolve,reject)=>
{
    resolve(setTimeout(() => {
        posts.push({...post,createdAt:new Date().getTime()});
        callback()
    }, 4000));
})
const deletepost=new Promise((resolve,reject)=>
{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
          posts.pop();
          //splice(post);
          resolve();
        }, 5000);
      });
})

    posts.forEach((post)=>{
    setInterval(() => {
        deletepost().then(() => {
            deletepost().then(() => {
              deletepost();
              });
          });
     }, 4000);
    })


 //console.log("empty");
 let post=await getPost();
let [post1,post2,post3]=await Promise.all([create2ndPost,create3rdPost,created4thPost]);
console.log(`${post1},${post2},${post3}`);
return post;
}
preMovie().then((m)=>console.log(`person 3: shows ${m}`));



var timer;
var count=0;
function lastEditedInSecondsAgo(){
    count=0;
    clearInterval(timer);
    timer=setInterval(()=>
    {
        //set
        count++;
        console.log(count)

    },1000);
}
}