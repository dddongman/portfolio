var tl1 = new TimelineMax();
tl1.to(".loading-square", .5, {
    x: -180, rotation: 90, delay: 1, repeatDelay: .5, transformOrigin: "100% 100%", repeat: -1
})

var tl2 = new TimelineMax();
tl2.to(".loading-triangle", .5, {
    x: -208, rotation: 120, delay: 1, repeatDelay: 1, transformOrigin: "100% 100%", repeat: -1
})

$(document).ready(function(){
    $('.pre-loader').delay('3500').fadeOut();
})