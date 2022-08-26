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

setColor(localStorage.getItem("mainColor") || "blue");

// setfont(localStorage.getItem("mainFont") ||' "Roboto",sans-serif' );

function getColorElement(color) {
    return document.getElementById("color-" + color);
}

// function getFontElement(font) {
//     return document.getElementById("font-" +font);
// }

getColorElement("red").addEventListener("click" , () => {
    localStorage.setItem("mainColor" , "red");
    setColor(localStorage.getItem("mainColor") || "blue");
});

getColorElement("blue").addEventListener("click" , () => {
    localStorage.setItem("mainColor" , "blue");
    setColor(localStorage.getItem("mainColor") || "blue");
});

getColorElement("green").addEventListener("click" , () => {
    localStorage.setItem("mainColor" , "green");
    setColor(localStorage.getItem("mainColor") || "blue");
});

