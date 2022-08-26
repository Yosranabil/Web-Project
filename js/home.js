const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie-list");

arrows.forEach((arrow, i) => {
    const itemNumber = movieLists[i].querySelectorAll("img").length;
    let clickCounter = 0;
    arrow.addEventListener("click", () => {
      const ratio = Math.floor(window.innerWidth / 300);
      clickCounter++;
      if (itemNumber - (1 + clickCounter) + (1 - ratio) >= 0) {
        movieLists[i].style.transform = `translateX(${
          movieLists[i].computedStyleMap().get("transform")[0].x.value - 300
        }px)`;
      } else {
        movieLists[i].style.transform = "translateX(0)";
        clickCounter = 0;
      }
    });
  
  });



const headline = document.getElementById('headline');

if(localStorage.getItem("header") == null) {
    headline.innerHTML = "your movie night";
} else {
    headline.innerHTML = localStorage.getItem("header");
}

SetColor(localStorage.getItem("mainColor") || "black");

// setfont(localStorage.getItem("mainFont") ||' "Roboto",sans-serif' ); 

const search = () =>{
  const searchbox = document.getElementById("search_input").value.toUpperCase();
  const storeitems = document.getElementById("search_bx");
  const product = document.querySelectorAll(".film");
  const pname = document.getElementsByTagName("h6");

  for(var i = 0; i < pname.length; i++){
    let match = product[i].getElementsByTagName('h6')[0];

    if(match){
      let textvalue = match.textContent || match.innerHTML

      if (textvalue.toUpperCase().indexOf(searchbox) > -1){
        product[i].style.display = "";
      } else{
        product[i].style.display = "none";
      }
    }
  }
}

function open_search() {
  var x = document.getElementById("box");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
} 