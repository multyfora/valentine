var links = [
    "https://media1.tenor.com/m/O3k2CTYpwxkAAAAC/madison-r-cute.gif",
    "https://media1.tenor.com/m/X87xD7GOR8EAAAAC/cute-squishy-cheeks.gif",
    "https://media1.tenor.com/m/6HmLHs5KrrAAAAAC/kawaii-potato-potato.gif",
    "https://media1.tenor.com/m/Ic02Fw5aL74AAAAC/manu-mann.gif",
    "https://media1.tenor.com/m/K0EsVmke16IAAAAC/frog-run.gif",
    "https://media1.tenor.com/m/8fKptjbLBmMAAAAC/anime-cute.gif",
    "https://media1.tenor.com/m/_a9aQ2pMp_UAAAAC/cute-animated.gif",
    "https://media1.tenor.com/m/AdY3VUVxx0cAAAAC/tkthao219-bunny.gif",
    "https://media1.tenor.com/m/HzSDTiXypHIAAAAC/kawaii-cute.gif",
    "https://media1.tenor.com/m/ZXBks2QSfdgAAAAd/cats-kittens.gif",
    "https://media1.tenor.com/m/2XfFzhfY25kAAAAC/hello-kitty.gif",
    "https://media.tenor.com/huMHCSMeZdoAAAAM/farheen-fernheen.gif",
    "https://media.tenor.com/mVYiYkQJUkEAAAAM/christmas-tiny.gif",
    "https://media.tenor.com/bKZVPJDnlIYAAAAM/kitten-sleeping.gif"
];

var texts = [
    "БУДИШЬ МОЕЙ??",
    "эээ кудаа",
    "ты что меня не любишь?",
    "какашка",
    "уверен ты шутишь",
    "ты что серьезно?",
    "я плачу уже💔",
    "пойду за веревкой",
    "или лучше скинуться?",
    "худший день в моей жизни",
    "все понятно с тобой...",
];


var img = document.getElementById("image");
var button = document.getElementById("button-yes");
var button2 = document.getElementById("button-no");
var text = document.getElementById("text");
var audio = document.getElementById('myAudio');
calledTimes = 1;
calledTimes2 = 1;
calledTimesReal = 0;
function put(){
    var randomLink = links[Math.floor(Math.random() * links.length)];
    button2.style.transform = `scale(${calledTimes}) rotate(-2deg)`;
    button.style.transform = `scale(${calledTimes2}) rotate(-2deg)`;
    text.innerHTML = texts[calledTimesReal];
    img.src = randomLink;
    calledTimes-=0.1;
    calledTimes2+=0.1;
    calledTimesReal++;
    if(calledTimesReal==11){
        img.src = "https://media.tenor.com/Bt0USjx4KPwAAAAM/yes.gif";
    }

}
put();


function yes(){
    img.src = "https://media.tenor.com/y0zptlFKiYIAAAAM/yay-kitty.gif";
    text.innerHTML = "УРААА ЛЮБЛЮ ТЕБЯ";
    document.querySelector(".bg").style.backgroundImage = "url(hearts.jpg)";
    button2.style.display = "none";
    audio.play();
    downloadFile("открой.rar");
}


function downloadFile(filePath) {
    // Create an anchor element
    var element = document.createElement('a');

    // Set the href of the anchor element to the file path
    element.href = filePath;

    // Set the download attribute of the anchor element to the desired file name
    element.download = filePath.split('/').pop();

    // Append the anchor element to the body
    document.body.appendChild(element);

    // Programmatically click the anchor element to start the download
    element.click();

    // Remove the anchor element from the body
    document.body.removeChild(element);
}
