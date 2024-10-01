const backToTop = document.querySelector("#backTop");

console.log(backToTop);

backToTop.addEventListener('click', (ev) => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});