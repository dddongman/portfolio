// =========== hello page =============

let helloTab = document.querySelector('.introduce')
let skillsTab = document.querySelector('.skills')

// == introduce ==
document.querySelector('.introduce-trigger').onclick = function () {
    helloTab.classList.add('active');
    document.querySelector('.introduce-content').classList.remove('hide');
    document.querySelector('.background-darken').classList.remove('hide');
    document.querySelector('.skills').classList.remove('hide');

    makeCloseBtn();
}

// == skills ==
document.querySelector('.skills-trigger').onclick = function(){
    skillsTab.classList.add('active');
    document.querySelector('.skills-content').classList.remove('hide')
    helloTab.classList.add('scoot');
    document.querySelector('.close-btn').classList.add('scoot');

    makeBackBtn();
}

// =========== button add =============

function makeCloseBtn() {
    let closeBtn = document.createElement('button');
    closeBtn.innerHTML = '<i class="fa-solid fa-xmark fa-xl"></i>';
    closeBtn.setAttribute('class', 'close-btn');
    closeBtn.onclick = function(){
        p = this.parentElement;
        p.removeChild(this);

        p.classList.remove('active');
        p.classList.remove('scoot')
        document.querySelector('.introduce-content').classList.add('hide');
        document.querySelector('.background-darken').classList.add('hide');
        skillsTab.classList.add('hide');
        skillsTab.classList.remove('active');
        document.querySelector('.skills-content').classList.add('hide')
        if (document.querySelector('.back-btn') !== null) {
            document.querySelector('.back-btn').remove();
        }
    }
    helloTab.appendChild(closeBtn);
}

function makeBackBtn() {
    let backBtn = document.createElement('button');
    backBtn.innerHTML = '<i class="fa-solid fa-arrow-left fa-2xl"></i>';
    backBtn.setAttribute('class', 'back-btn');
    backBtn.onclick = function(){
        p = this.parentElement;
        p.removeChild(this);

        p.classList.remove('active')
        document.querySelector('.skills-content').classList.add('hide')
        helloTab.classList.remove('scoot')
        document.querySelector('.close-btn').classList.remove('scoot')
    }
    skillsTab.appendChild(backBtn)
}