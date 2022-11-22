function Type() {
    const content = "..."
const text = document.querySelector(".dotdotdot")
let index = 0;

 function sleep(delay){ 
     const start = new Date().getTime(); 
     while (new Date().getTime() < start + delay); 
    }

function typing(){
    text.textContent += content[index++];
    if(index > content.length){
        text.textContent = ""
        index = 0;
    }
}
setInterval(typing, 500)

}

Type();

var tl1 = new TimelineMax();
tl1.to(".square", 1, {
    x: -180, rotation: 90, delay: 1, transformOrigin: "100% 100%", repeat: -1
})

var tl2 = new TimelineMax();
tl2.to(".triangle", 1, {
    x: -208, rotation: 120, delay: 1, transformOrigin: "100% 100%", repeat: -1
})