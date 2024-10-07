const backToTop = document.querySelector("#backTop");
const navList = document.querySelector("nav ul");
const overlay = document.querySelector(".overlay");


const mobileButton = document.querySelector(".mobile");
const modalButton = document.querySelector("#mobButton");
const closeButton = document.querySelector("#closeButton");


backToTop.addEventListener('click', (ev) => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.querySelector("header").style.backdropFilter = "blur(100px)";
        document.querySelector("header, logo h1").style.fontSize = "12px";
        document.querySelector("header").style.height = "50px";
    } else {
        document.querySelector("header").style.backgroundColor = "Transparent";
        document.querySelector("header").style.height = "100px";
        document.querySelector("header, logo h1").style.fontSize = "12px";
    }
}

const toggleMenu = () => {
    navList.classList.toggle('responsive');
}

const toggleModal = () => {
    overlay.classList.toggle('visible');
    //overlay.style.display = 'visible';
}

mobileButton.addEventListener("click", toggleMenu);
modalButton.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
overlay.addEventListener("click", toggleModal);