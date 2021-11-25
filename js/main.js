//variables 
let elAddBtn = document.getElementById("box__btn--add");
let elForm = document.getElementById("box__form");
let elINput = document.getElementById("inp");
let elBoxList = document.getElementById("box__list");
let elItem = document.querySelector("box__item");
let elCloseBtnIcon = document.querySelector("box__close--btn");
let elCompleteBtn = document.getElementById("box__btn-complete");
let arr = [];

//add events
elForm.addEventListener("submit", formFunc);
elBoxList.addEventListener("click", removeItem);
elBoxList.addEventListener("click", targetItem);
elCompleteBtn.addEventListener("click", sort)

//functions 
function formFunc(e){
    e.preventDefault();
    

    if(elINput.value == ""){
        alert("Choise the text...")
    }
    else if(elINput.value != ""){
        let elBoxItem = document.createElement("li"); // create li
        let elBoxCloseBtn = document.createElement("button"); // create button
        let elIcon = document.createElement("i"); // create icon
        elBoxItem.innerHTML = elINput.value; // add value from input to li
        elBoxItem.className  = "box__item"; // add class to li
        elBoxCloseBtn.className = "box__close--btn"; // add class to button
        elIcon.className = "bi bi-x box__icon"; // add class to icon
        elBoxItem.appendChild(elBoxCloseBtn); // append element to li
        elBoxList.appendChild(elBoxItem); // appent elemen to list
        elBoxCloseBtn.appendChild(elIcon); // append element to button
        elINput.value = ""; // input value clear
    }
    
}

function removeItem(e){
    if(e.target.classList.contains('box__close--btn')) {
        let elRemovedItem = e.target.parentElement;
        elBoxList.removeChild(elRemovedItem);
    }
}

function targetItem(e){
    let elTargededItem = e.target;
    if(elTargededItem.classList.contains("box__item")){
        arr.push(elTargededItem);
        elTargededItem.style.background = "#6aca9f";
        elTargededItem.style.color = "#fff";
        elTargededItem.lastChild.lastChild.className = "bi bi-check-lg";
        elTargededItem.lastChild.style.color = "#fff";
        elTargededItem.lastChild.style.borderColor = "#fff";
    }

    

}
function sort(e){
    for(let i = 0; i < arr.length; i++){
        arr[i].style.display = "none";
    }
}