

//Variables Case Converter
const popupCase = document.getElementById('popupCaseConverter');
const popToggleCase = document.getElementsByClassName('open-window')[0];
const popCloseCase = document.getElementsByClassName('button')[0];

//Variables FlashCards
const popupFlash = document.getElementById('popupFlashCards');
const popToggleFlash = document.getElementsByClassName('open-window')[1];
const popCloseFlash = document.getElementsByClassName('button')[1];

//variables Piano
const popupPiano = document.getElementById('popupPiano');
const popTogglePiano = document.getElementsByClassName('open-window')[2];
const popClosePiano = document.getElementsByClassName('button')[2];

//Variables To Do List
const popupToDoList = document.getElementById('popupToDoList');
const popToggleToDoList = document.getElementsByClassName('open-window')[3];
const popCloseToDoList = document.getElementsByClassName('button')[3];

//función Case Converter
popToggleCase.onclick = function (){
    popupCase.style.display="block";
};

popCloseCase.onclick = function (){
    popupCase.style.display="none";
};


//función FlashCards
popToggleFlash.onclick = function (){
    popupFlash.style.display="block";
};

popCloseFlash.onclick = function (){
    popupFlash.style.display="none";
};

//función Piano
popTogglePiano.onclick = function (){
    popupPiano.style.display="block";
};

popClosePiano.onclick = function (){
    popupPiano.style.display="none";
};

//Función To Do List
popToggleToDoList.onclick = function (){
    popupToDoList.style.display="block";
};

popCloseToDoList.onclick = function (){
    popupToDoList.style.display="none";
};



//Menu

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

    hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav-link");

    navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}