const box = document.getElementById("box");



start();

function start(){
    for(let i=0;i<30;i++){
    const colorBox = document.createElement("div");
    const color = ranColor();
    colorBox.classList.add("colorBox");
    colorBox.style.backgroundColor = "#"+color;
    colorBox.innerText = "#"+ color;
    box.appendChild(colorBox);
}}




function ranColor(){
    const chars = "0123456789abcdef";
    const cLength = 6;
    let random = "";
    for(let i = 0;i<cLength;i++){
        let num = Math.floor(Math.random()*chars.length);
        random = random + chars[num];
        console.log(random);
    }
    return random;
}