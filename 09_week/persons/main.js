
/*

setTimeout(() => {
    for (let i = 0; i < 1000; i++) {
        fetch('https://api.thecatapi.com/v1/images/search')
            .then((response) => response.json())
            .then((json) => {

                document.querySelector("#image").src = json[0].url;
            });
    }
}, "1 second");


async fetchCats() {
    const response = await fetch('https://api.thecatapi.com/v1/images/search');
    const data = await response.json
}*/