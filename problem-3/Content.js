let audio = new Audio("https://cdn.pixabay.com/audio/2023/09/30/audio_bd797ed8d0.mp3")
audio.muted=true;
const playAudio = () => {
    console.log("playinggg")
    audio.muted=false
    audio.play();
}
//array of gifs
let dancingGifs = [
    "https://media.tenor.com/F7Cd9OI_XRQAAAAM/kid-meme.gif",
    "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExMGNzdWxyMXV6ZjRycWc5eW5pY3g4bDZoeTNjY3Y4ZDAyODc2ZzVucyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/5z2cV4tWz04P4BQj9Z/giphy.gif",
    "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExenN0anVkazN2NGN3azA5djdtajVrbnFjZmc1N3UwMG8xN2ZycTBvYyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/tSaApE2vVQKE8/giphy.gif",
    "https://media.tenor.com/Tk58yoEpmYIAAAAM/dog-drums.gif",
	"https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExZ28yZWQ4azY4N2lwZTA0aDg4MnByaGhsZXk4bmE5Y2QwcjlrYm5mYiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/DLzlA5dQQYX2mT9KlP/giphy.gif",
    "https://media.tenor.com/ei52h7lO8iMAAAAC/sturdy-drill.gif",
    "https://media.tenor.com/BpCriX2YZTsAAAAC/dance-crazy.gif",
    "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExNXJ3Z3o1M3EyNXprZW9lODd5NWtlN3VjZmVvbG9tbmJsYnN5N2RzMiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/pejC6N6W5GLEPtA27w/giphy.gif"
];

//reverse through array of gifs
//getting random gif from the array we created before (we use math.floor and math.random to grab a random index in the array)
let gender = true;
const changeGifs = () => {
    const imgs = document.getElementsByTagName("img");
    for (let i = 0; i < imgs.length; i++) {
        const randomImg = Math.floor(Math.random() * dancingGifs.length)
        imgs[i].src = dancingGifs[randomImg]
    }
}
setInterval(changeGifs, 2500)

//do the same for h1 elements
const headers = document.getElementsByTagName("h1");
for (let i = 0; i < headers.length; i++){
    headers[i].innerText = "🔊🔊🔊🔊🔊🔊🔊";
}

const changeSpanColorAndEmojis= () => {
    const spans = document.getElementsByTagName("span");
    for (let i = 0; i < spans.length; i++){

        let randomColor = Math.floor(Math.random()*16777215).toString(16);
        spans[i].style.backgroundColor = "#" + randomColor;
        spans[i].style.transition = "background-color 0.1s ease"
    }

    //do the same for p elements, add dancing emojis
    const p = document.getElementsByTagName("p");
    for (let i = 0; i < p.length; i++){
        let randomColor = Math.floor(Math.random()*16777215).toString(16);
        p[i].style.backgroundColor = "#" + randomColor;
        p[i].style.transition = "background-color 0.1s ease"
        if(gender === true) {
            p[i].innerText = "🕺🕺🕺";
            gender = false;
        } else {
            p[i].innerText= "💃💃💃";
            gender = true;
        }
    }
}
window.setInterval(changeSpanColorAndEmojis, 1034)


const changeBgColor = () => {
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = "#" + randomColor;
    document.body.style.transition = "background-color 0.1s ease"
    document.body.style.fontSize = "20px"
}
window.onload= () => {
    document.body.addEventListener("mouseover", playAudio)
    document.body.fontWeight = "normal";
}
window.setInterval(changeBgColor, 284)


