const submitbutton=document.getElementById("submit");
const accounts = JSON.parse(localStorage.getItem("accounts"))|| [];

submitbutton.addEventListener("click",() => {
    let uname=document.getElementById("uname").value;
    let pass=document.getElementById("pass").value;
    let found=false;
    for(let i=0 ; i<accounts.length ; i++){
        if (accounts[i].uname == uname){
            found=true;
            if (accounts[i].pass == pass){
                //localStorage.setItem("currentUser",JSON.stringify(accounts[i]));
               // if(accounts[i].type =="admin"){
               //     window.location.href= "./admin.html";
              //  } else{
                    window.location.href= "Home.html";
             // }
             // break;
            }
        } else {
            alert("Password OR Username is Wrong");
            break;
        }
    }

    if (!found){
        alert("Account Not Found");
    }
});
 //may be use it in admin
//if(localStorage.getItem("currentUser") != null)
//{
  //  window.location.href= "./Home.html";
//}
