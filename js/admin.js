const updateButton = document.getElementById('updateButton');
const headlineInput = document.getElementById('headlineInput');

updateButton.addEventListener('click',() => {
    if (headlineInput.value == "") {
        localStorage.setItem("header" , "<3");
    } else {
        localStorage.setItem("header" , headlineInput.value);
        headlineInput.value = "";
    }
});
function SetColor (color) {
    document.documentElement.style.setProperty("--main-color" , color);
};

SetColor(localStorage.getItem("mainColor") || "black");

// setfont(localStorage.getItem("mainFont") ||' "Roboto",sans-serif' );
 
function getColorElement(color) {
    return document.getElementById("color-" + color);
}

// function getFontElement(font) {
//     return document.getElementById("font-" +font);
// }

getColorElement("red").addEventListener("click" , () => {
    localStorage.setItem("mainColor" , "red");
    SetColor(localStorage.getItem("mainColor") || "black");
});

getColorElement("green").addEventListener("click" , () => {
    localStorage.setItem("mainColor" , "green");
    SetColor(localStorage.getItem("mainColor") || "black");
});

getColorElement("blue").addEventListener("click" , () => {
    localStorage.setItem("mainColor" , "blue");
    SetColor(localStorage.getItem("mainColor") || "black");
});

