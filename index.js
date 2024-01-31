const posts=[{title: 'Post1',body:'this is post one',createdAt:new Date().getTime()},
            {title:'Post2', body:'this is post two',createdAt:new Date().getTime()}]
           
   async function createPost(obj){
    return await new Promise((resolve, reject)=>{
        setTimeout(()=>{
            posts.push(obj)
            resolve()
        },5000);
    });
}

 function printAll(){
    posts.forEach((post) => {
        console.log(post.title)
    })

}
async function userLastActivity(){
    return await new  Promise((resolve,reject)=>{
        setTimeout(()=>{
            const lastActivity=new Date().getTime();
            console.log('Last Activity Time:'+lastActivity)
            resolve();
        },1000)
    })
}
const post3=createPost({title:'post3', body:'this is post three'});
const post4=createPost({title:'post4', body:'body'})
post3
  .then(() => post4)
  .then(() => {
    printAll();
    return userLastActivity();
  })
  .catch((error) => {
    console.log(error);
  });