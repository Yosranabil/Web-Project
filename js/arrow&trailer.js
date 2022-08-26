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

  /* Open when someone clicks on the span element */
  function openNav(clicked_id) {

    document.getElementById(clicked_id).style.width = "100%";
  }

/* Close when someone clicks on the "x" symbol inside the overlay */
  function closeNav(clicked_id) {
    document.getElementById(clicked_id).style.width = "0%";
  } 

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