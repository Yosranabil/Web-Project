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