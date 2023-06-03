
document.getElementById("my-form").addEventListener('submit',(e)=>{
    e.preventDefault();
    var expences=document.getElementById("expences").value;
    var description=document.getElementById("description").value;
    var category=document.getElementById("category").value;

    let object={
        expences:expences,
        description:description,
        category:category
    }

    localStorage.setItem(object.expences,JSON.stringify(object))
    showOnScreen(object)
})
    function showOnScreen(object){
         var parent=document.getElementById("object");
var child=document.createElement("li");
 
child.textContent=object.expences+"-"+object.description+"-"+object.category;

var deleteButton=document.createElement('input');
deleteButton.value='delete';
deleteButton.type='button';
var editButton=document.createElement('input');
editButton.value='edit';
editButton.type='button';


deleteButton.onclick=()=>{
    localStorage.removeItem(object.description)
    parent.removeChild(child)
}
editButton.onclick=()=>{
    localStorage.removeItem(object.description);
    parent.removeChild(child);

    document.getElementById('expences').value=object.expences;
    document.getElementById('description').value=object.description;
    document.getElementById('category').value=object.category;
}


child.appendChild(deleteButton);
child.appendChild(editButton);
parent.appendChild(child);
    }
