const headline = document.getElementById('headline');

if(localStorage.getItem("header") == null) {
    headline.innerHTML = "Default";
} else {
    headline.innerHTML = localStorage.getItem("header");
}