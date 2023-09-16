function makeBubbles() {
    let clutter = "";
    for (let i = 0; i < 52; i++) {
        let rdnum = Math.floor(Math.random() * 10);
        clutter += `<div class="bubble">${rdnum}</div>`;
    }
    document.getElementById("pbtm").innerHTML = clutter;
}
makeBubbles();

function timerRun() {
    let timerNum = 60
    let timer = setInterval(() => {
        if (timerNum > 0) {
            timerNum --;
            document.querySelector("#timeRem").textContent = timerNum;
        } else {
            clearInterval(timer);
            document.getElementById("pbtm").innerHTML = '<div class="gameOver">Game Over !</div>'
            document.getElementById("hitElem").textContent = "^_^"
        }
    }, 1000);
}
timerRun();

// i need a function that will turn the score + 10 and refresh the hit value
// function to generate random hit numbers and display it on the web page
function hitGen(){
    let rdnum = Math.floor(Math.random() * 10);
    document.getElementById("hitElem").textContent = rdnum;
}
hitGen();

var score = 0;
function increaseScore(){
    score += 10;
    document.querySelector("#scoreNum").textContent = score;
}
function checkHit(bubbleNum){
    let hitNum = document.getElementById("hitElem").textContent;
    if (bubbleNum === hitNum) {
        hitGen();
        increaseScore();
        makeBubbles();
    }
}
document.querySelector("#pbtm").addEventListener('click',function (dets){
    console.log(dets.target.textContent);
    checkHit(dets.target.textContent);
})