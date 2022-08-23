const submitbutton=document.getElementById("submit");

submitbutton.addEventListener("click",() => {
    let uname=document.getElementById("uname");
    let password=document.getElementById("pass");
    let mail =document.getElementById("mail");
    let phone=document.getElementById("phone");
    let accounts = JSON.parse(localStorage.getItem("accounts"))|| [];

    let newaccount={
        uname : uname.value,
        pass : password.value,
        mail : mail.value,
        phone : phone.value,
       // type: "user"
    }
    accounts.push(newaccount);
    localStorage.setItem("accounts",JSON.stringify(accounts));
    window.location.href= "login.html";

});