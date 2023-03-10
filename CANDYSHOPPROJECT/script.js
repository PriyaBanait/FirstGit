document.getElementById('order-form').addEventListener('submit', (event)=>{
    event.preventDefault();
    var candy=document.getElementById('candy').value;
    var description=document.getElementById('description').value;
    var price=document.getElementById('price').value;
    var quantity=document.getElementById('quantity').value;
    
    
    var saveDataObject={
        candy:candy,
        description:description,
        price:price,
        quantity:quantity,
        
    }
axios.post("https://crudcrud.com/api/848e99e1469d4f16848a780158351dab/shop", saveDataObject)
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
    axios.get("https://crudcrud.com/api/848e99e1469d4f16848a780158351dab/shop")
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
    document.getElementById('candy').value='';
    document.getElementById('description').value='';
    document.getElementById('price').value='';
    document.getElementById('quantity').value='';
   

var parentNode=document.getElementById('object');
var childHTML=`<li id=${user._id}> ${user.candy}-${user.description}-${user.price}-${user.quantity}
                   <button onclick=deleteUser('${user._id}')> Delete user </button>
                   
                   <button onclick="editUser('${user.candy}','${user.description}','${user.price}','${user.quantity}','${user._id}')"> Edit user </button>
                    </li>`


                    parentNode.innerHTML= parentNode.innerHTML+childHTML

}

function editUser(candy, description, price, quantity, userId){
    document.getElementById('candy').value=candy;
    document.getElementById('description').value=description;
    document.getElementById('price').value=price;
    document.getElementById('quantity').value=quantity;
   
 deleteUser(userId);

}

function deleteUser(userId){
    axios.delete(`https://crudcrud.com/api/848e99e1469d4f16848a780158351dab/shop/${userId}`)
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

