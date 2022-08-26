//photo...declaring

const imgdiv = document.querySelector(".img-icon");
const img = document.querySelector("#photo");
const file = document.querySelector("#file");
const uploadbtn = document.querySelector("#uploadbtn");

//if user hover on profile div

imgdiv.addEventListener('mouseenter',function()
 {
   uploadbtn.style.display="block";
 });

//if user hover out from img div

imgdiv.addEventListener('mouseleave',function()
 {
  uploadbtn.style.display="none";
 });

 //lets work for image showing functionality when we choose an image to uoload
  //when we choose a photo to upload
  file.addEventListener('change',function()
  {
    //this refers to file
    const choosedfile = this.files[0];
    if (choosedfile){
        const reader= new FileReader();
        reader.addEventListener('load',function()
        {
            img.setAttribute('src',reader.result);
        });

        reader.readAsDataURL(choosedfile);
    }

  });
  //user_data

  accounts = JSON.parse(localStorage.getItem("accounts")) ;
  function load_user(){
    var currentUser = localStorage.getItem("currentUser");
    accounts.indexOf(currentUser);
  if(typeof currentUser === undefined || currentUser === null){
    currentUser = JSON.stringify({uname:"",pass:"",mail:"",phone:""});
    localStorage.setItem("currentUser",currentUser);
  }
    

    return JSON.parse(currentUser);
  }

  //reload the page
  function save_user(uname , pass, mail, phone){
    currentUser = JSON.stringify({uname:uname,pass:pass,mail:mail,phone:phone,type:"user"});
    localStorage.setItem("currentUser",currentUser);
      return currentUser;
  }
  
  
  const submitbutton=document.getElementById("submit");
   
  submitbutton.addEventListener("click",function(){
    save_user(
    document.getElementById('uname').value,
    document.getElementById('pass').value,
    document.getElementById('mail').value,
    document.getElementById('phone').value,
    
    );
    currentUser = load_user();
    document.getElementById('uname').value = currentUser.uname;
    document.getElementById('pass').value = currentUser.pass;
    document.getElementById('mail').value = currentUser.mail;
    document.getElementById('phone').value = currentUser.phone;
    
  });
  
  currentUser= load_user();
  
  //id of page
  document.getElementById('uname').value = currentUser.uname;
  document.getElementById('pass').value = currentUser.pass;
  document.getElementById('mail').value = currentUser.mail;
   document.getElementById('phone').value = currentUser.phone;
  
   //currentUser=update_user;
   let newaccount=
   {
   uname : uname.value,
   pass : pass.value,
   mail : mail.value,
   phone : phone.value,
   type: "user"
   }

accounts.push(newaccount);
localStorage.setItem("accounts",JSON.stringify(accounts));
  