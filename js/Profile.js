//declaring
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
 