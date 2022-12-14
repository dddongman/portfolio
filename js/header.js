// =========== navigation =============

document.querySelector('.nav-logo').onclick = function(){
    document.querySelector('.main').classList.remove('hide');

    document.querySelector('.hello').classList.add('hide');
    document.querySelector('.introduce').classList.remove('pop');

    document.querySelector('.projects').classList.add('hide');
    document.querySelector('.projects-right').classList.remove('pop');

    document.querySelector('.contact').classList.add('hide');
    document.querySelector('.contact-right').classList.remove('active');
    document.querySelector('.profile').classList.remove('active');

    shapeClassRemover();
}


document.querySelector('.nav-hello').onclick = function () {
    document.querySelector('.main').classList.add('hide');

    document.querySelector('.hello').classList.remove('hide');
    document.querySelector('.introduce').classList.add('pop');

    document.querySelector('.projects').classList.add('hide');    
    document.querySelector('.projects-right').classList.remove('pop');

    document.querySelector('.contact').classList.add('hide');
    document.querySelector('.contact-right').classList.remove('active');
    document.querySelector('.profile').classList.remove('active');

    shapeClassRemover();
    
    tri.classList.add('h');
    crc.classList.add('h');
    sqr.classList.add('h');
}


document.querySelector('.nav-proj').onclick = function(){
    document.querySelector('.main').classList.add('hide');

    document.querySelector('.hello').classList.add('hide');
    document.querySelector('.introduce').classList.remove('pop');

    document.querySelector('.projects').classList.remove('hide');
    document.querySelector('.projects-right').classList.add('pop');

    document.querySelector('.contact').classList.add('hide');
    document.querySelector('.contact-right').classList.remove('active')
    document.querySelector('.profile').classList.remove('active')

    shapeClassRemover();
    
    tri.classList.add('p');
    crc.classList.add('p');
    sqr.classList.add('p');
}


document.querySelector('.nav-cont').onclick = function() {
    document.querySelector('.main').classList.add('hide');

    document.querySelector('.hello').classList.add('hide');
    document.querySelector('.introduce').classList.remove('pop');

    document.querySelector('.projects').classList.add('hide');
    document.querySelector('.projects-right').classList.remove('pop');
    
    document.querySelector('.contact').classList.remove('hide');
    document.querySelector('.contact-right').classList.add('active')
    document.querySelector('.profile').classList.add('active')

    shapeClassRemover();
    
    tri.classList.add('c');
    crc.classList.add('c');
    sqr.classList.add('c');
}

let tri = document.querySelector('.triangle');
let crc = document.querySelector('.circle');
let sqr = document.querySelector('.square');

function shapeClassRemover(){
    if(tri.classList.contains('h')) {
        tri.classList.remove('h');
        crc.classList.remove('h');
        sqr.classList.remove('h');
    } else if (tri.classList.contains('p')) {
        tri.classList.remove('p');
        crc.classList.remove('p');
        sqr.classList.remove('p');
    } else if (tri.classList.contains('c')) {
        tri.classList.remove('c');
        crc.classList.remove('c');
        sqr.classList.remove('c');
    }
}