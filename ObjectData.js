document.getElementById('my-form').addEventListener('submit', (event)=>{
    event.preventDefault();
    var name=document.getElementById('name').value;
    var mail=document.getElementById('mail').value;
    var phone=document.getElementById('phone').value;
    var date=document.getElementById('date').value;
    var time=document.getElementById('time').value;
    
    var data={
        name:name,
        mail:mail,
        phone:phone,
        date:date,
        time:time
    }
    localStorage.setItem('data',JSON.stringify(data));
    var obj=JSON.parse(localStorage.getItem('data'));
    console.log(obj);

})