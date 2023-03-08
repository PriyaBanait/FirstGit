document.getElementById('my-form').addEventListener('submit', (event)=>{
    event.preventDefault();
    var name=document.getElementById('name').value;
    var mail=document.getElementById('mail').value;
    var phone=document.getElementById('phone').value;
    var date=document.getElementById('date').value;
    var time=document.getElementById('time').value;
    
    var saveDataObject={
        name:name,
        mail:mail,
        phone:phone,
        date:date,
        time:time
    }
axios.post("https://crudcrud.com/api/08fa52d6c9af4cc3b1d3ea37e260b4dd/appoinmentData", saveDataObject)
    .then((response)=>{
        showNewUserOnScreen(response.data)
      
    })
    .catch((err)=>{
        document.body.innerHTML=document.body.innerHTML+"<h4> Something went Wrong</h4>"
        console.log(err)
    })
    //localStorage.setItem(saveDataObject.mail,JSON.stringify(saveDataObject));
    
    //onScreen(saveDataObject);
})
window.addEventListener("DOMContentLoaded", () =>{
    axios.get("https://crudcrud.com/api/08fa52d6c9af4cc3b1d3ea37e260b4dd/appoinmentData")
    .then((response)=>{
        console.log(response)
        for(var i=0;i<response.data.length;i++){
            showNewUserOnScreen(response.data[i]);
        }
    })
    .catch((err)=>{
        console.log(err)
    })
})

function showNewUserOnScreen(user){
    document.getElementById('name').value='';
    document.getElementById('mail').value='';
    document.getElementById('phone').value='';
    document.getElementById('date').value='';
    document.getElementById('time').value='';
   


var parentNode=document.getElementById('object');
var childHTML=`<li id=${user._id}> ${user.name}- ${user.mail}-${user.phone}-${user.date}-${user.time}
                   <button onclick=deleteUser('${user._id}')> Delete user </button>
                    </li>`


                    parentNode.innerHTML= parentNode.innerHTML+childHTML

}

function deleteUser(userId){
    axios.delete(`https://crudcrud.com/api/08fa52d6c9af4cc3b1d3ea37e260b4dd/appoinmentData/${userId}`)
    .then((response)=>{
        removeUserFromScreen(userId)
    })
    .catch((err)=>{
        console.log(err)
    })
    
}

function removeUserFromScreen(userId){
    const parentNode=document.getElementById('object')
    const childNodeToBeDeleted=document.getElementById(userId)
    if(childNodeToBeDeleted){
        parentNode.removeChild(childNodeToBeDeleted);
    }
}