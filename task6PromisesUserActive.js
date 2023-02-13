   //timerId
   intervalId=setInterval(()=>
   {

       let output='';
       for(let i=0;i<posts.length;i++)
       {
@@ -24,6 +25,7 @@ function getPost()
       document.body.innerHTML=output;

   },1000);

}
//getPost();
function printPost()
@@ -38,7 +40,7 @@ function printPost()
       for(let i=0;i<posts.length;i++)
       {
           output+=posts[i].title+", ";
            //console.log(output);        
            console.log(posts[i]);        
       }  
        resolve(output);
       }
@@ -125,24 +127,33 @@ function deletepost()
         posts.pop();

         resolve();
       }, 5000);
       }, 2000);

     });
}
getPost();
create2ndPost({title:'post Two',body:'This is post two'}).then(getPost).then(updateLastUserActivityTime);
create3rdPost({title:'post Three',body:'This is post Three'}).then(getPost).then(updateLastUserActivityTime);
create4thPost({title:'post Four',body:'This is post Four'}).then(getPost).then(updateLastUserActivityTime);
const p5=printPost();
console.log(p5);
create2ndPost({title:'post Two',body:'This is post two'})
.then(getPost)
.then(updateLastUserActivityTime)
.then(create3rdPost({title:'post Three',body:'This is post Three'}))
.then(getPost)
.then(updateLastUserActivityTime)
.then(create4thPost({title:'post Four',body:'This is post Four'}))
.then(getPost)
.then(updateLastUserActivityTime)
.then(printPost);
//const p5=printPost();
//console.log(p5);
const p6=deletepost();
const p7=printPost();
Promise.all([p6,p7,updateLastUserActivityTime()]).then((values)=>{
Promise.all([p7,updateLastUserActivityTime()]).then((values)=>{
   console.log(values);
});
var timer;
var count=0;
function lastEditedInSecondsAgo(){


//var timer;
//var count=0;
/*function lastEditedInSecondsAgo(){
   count=0;
   clearInterval(timer);
   timer=setInterval(()=>
@@ -152,5 +163,5 @@ function lastEditedInSecondsAgo(){
       console.log(count)
   },5000);
}
}*/
//lastEditedInSecondsAgo();