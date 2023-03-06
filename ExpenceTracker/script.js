document.getElementById('my-form').addEventListener('submit', (event)=>{
    event.preventDefault();
    var expences=document.getElementById('expences').value;
    var description=document.getElementById('description').value;
    var category=document.getElementById('category').value;
    
    var saveDataObject={
        expences:expences,
        description:description,
        category:category,
    }
    localStorage.setItem(saveDataObject.description,JSON.stringify(saveDataObject));
    
    onScreen(saveDataObject);
  })

    function onScreen(saveDataObject){
        var parent=document.getElementById('object')
        //parent.innerHTML=parent.innerHTML+`<li> ${saveDataObject.name} - ${saveDataObject.mail}-${saveDataObject.phone}-${saveDataObject.date}-${saveDataObject.time}</li>`
        var child=document.createElement('li');
        child.textContent=saveDataObject.expences+'-'+saveDataObject.description+'-'+saveDataObject.category;

        const deleteButton=document.createElement('input');
        deleteButton.value='Delete';
        deleteButton.type='button'

        const editButton=document.createElement('input');
        editButton.value='Edit';
        editButton.type='button';

        deleteButton.onclick=()=>{
            localStorage.removeItem(saveDataObject.description);
            parent.removeChild(child);  
        }

      editButton.onclick=()=>{
            localStorage.removeItem(saveDataObject.description);
            parent.removeChild(child);
            document.getElementById('expences').value=saveDataObject.expences;
            document.getElementById('description').value=saveDataObject.description;
            document.getElementById('category').value=saveDataObject.category;
        }
        
        child.appendChild(deleteButton);
        child.appendChild(editButton);
        parent.appendChild(child);
    }