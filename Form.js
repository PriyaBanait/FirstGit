function saveData(event){
    event.preventDefault();
   var name=event.target.name.value;
   var mail=event.target.mail.value;
    var phone=event.target.phone.value;
    var date=event.target.date.value;
    var time=event.target.time.value;

    localStorage.setItem("name", name);
    localStorage.setItem("mail", mail);
    localStorage.setItem("phone", phone);
    localStorage.setItem("date", date);
    localStorage.setItem("time", time);

}
