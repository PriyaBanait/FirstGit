const post=['POST1'];
function updateLastUserActivitiTime(){
return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        const date=new Date();
        resolve(date);

    },1000)
})
}
function createPost(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            const data=post.push('POST2')
            resolve(data);
        }, 2000);
    })
}
function deletePost(){
return new Promise((resolve,reject)=>{
setTimeout(()=>{
    if(post.length>0){
    const poppedElement=post.pop();
    resolve(poppedElement)
    }else{
        reject('ERROR')
    }
},1000)
})
}
updateLastUserActivitiTime().then(e=>{
    console.log(e);
}).then(()=>{
    Promise.all([createPost,updateLastUserActivitiTime]).then((values)=>{
        console.log(values);
    })
}).then(()=>{
    deletePost()
    .then(e=>{
        console.log(e);
    })
    .catch(e=>{
        console.log(e)
    })
})
