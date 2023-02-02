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
        parent.innerHTML=parent.innerHTML+`<li> ${saveDataObject.name} - ${saveDataObject.mail}-${saveDataObject.phone}-${saveDataObject.date}-${saveDataObject.time}</li>`
    }