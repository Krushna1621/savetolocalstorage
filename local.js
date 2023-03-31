function Savetolocalstorage(event){
    event.preventDefault();
    var name=event.target.username.value;
    var email=event.target.emailid.value;
    var phoneno=event.target.phoneno.value;
    const obj={
        name,
        email,
        phoneno
    }
    localStorage.setItem('userdetails',JSON.stringify(obj));
    ShowUserOnScreen(obj)
}
