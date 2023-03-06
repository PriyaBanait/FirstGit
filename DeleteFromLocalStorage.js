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
    localStorage.setItem(saveDataObject.mail,JSON.stringify(saveDataObject));
    
    onScreen(saveDataObject);
  })

    function onScreen(saveDataObject){
        var parent=document.getElementById('object')
        //parent.innerHTML=parent.innerHTML+`<li> ${saveDataObject.name} - ${saveDataObject.mail}-${saveDataObject.phone}-${saveDataObject.date}-${saveDataObject.time}</li>`
        var child=document.createElement('li');
        child.textContent=saveDataObject.name+'-'+saveDataObject.mail+'-'+saveDataObject.phone+'-'+saveDataObject.date+'-'+saveDataObject.time;

        const deleteButton=document.createElement('input');
        deleteButton.value='Delete';
        deleteButton.type='button'

        const editButton=document.createElement('input');
        editButton.value='Edit';
        editButton.type='button';

        deleteButton.onclick=()=>{
            localStorage.removeItem(saveDataObject.mail);
            parent.removeChild(child);
            
        }

      editButton.onclick=()=>{
            localStorage.removeItem(saveDataObject.mail);
            parent.removeChild(child);
            document.getElementById('name').value=saveDataObject.name;
            document.getElementById('mail').value=saveDataObject.mail;
            document.getElementById('phone').value=saveDataObject.phone;
            document.getElementById('date').value=saveDataObject.date;
            document.getElementById('time').value=saveDataObject.time;

        }
        
        child.appendChild(deleteButton);
        child.appendChild(editButton);
        parent.appendChild(child);
    }
