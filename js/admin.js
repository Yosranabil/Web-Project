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
