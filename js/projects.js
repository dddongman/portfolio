$(document).ready(function(){

    $('.project1').hover(function () {
        $('.projects-right').prepend('<div class="project-preview"><img src="./img/pado-main.png" alt=""></div>');
    }, function () {
        if($('.projects-right').hasClass('active')) {
    
        } else {
            $('.project-preview').remove();
        }
    });

    $('.project1').click(function () {
        $('.project-desc').empty()
        $(this).toggleClass('active')
        $('.project2').toggleClass('scoot')
        $('.project3').toggleClass('scoot')
        $('.project-desc').append('<div class="project-desc-l"><h3>쉽고 똑똑한 청년복지의 시작, 파도</h3><span>2022.03 ~ 2022.06</span><p>학교 팀 프로젝트로 커뮤니케이션 디자인 공모전에 출품 작품을 위한 웹페이지를 제작했습니다. 이 프로젝트를 통해 메타태그 작성을 통한 웹 검색 최적화를 연습해 볼 수 있었습니다. jQuery를 사용해 순수 Javascript 뿐만 아니라 플러그인을 적절히 활용해 유연하고 빠르게 작업하고자 했습니다.</p></div><div class="project-desc-r"><button class="weblink"><a href="https://dddongman.github.io/p_s" target="_blank">Visit <br> Web</button></div>');
        $('.projects-right').toggleClass('active')
        $('.background-darken').toggleClass('hide');
    });
    

    $('.project2').hover(function () {
        $('.projects-right').prepend('<div class="project-preview"><img src="./img/malkkom-main.png" alt=""></div>');
    }, function () {
        if($('.projects-right').hasClass('active')) {
    
        } else {
            $('.project-preview').remove();
        }
    });

    $('.project2').click(function () {
        $('.project-desc').empty()
        $(this).toggleClass('active')
        $('.project1').toggleClass('scoot')
        $('.project3').toggleClass('scoot')
        $('.project-desc').append('<div class="project-desc-l"><h3>말눈치 상승 앱서비스, 말꼼</h3><span>2022.09 ~ 2022.11</span><p>학교 팀 프로젝트로 졸업작품인 말꼼 앱 서비스의 소개 페이지를 함께 기획하고, 퍼블리싱했습니다. 이 프로젝트를 통해 팀 협업, 특히 기획과 디자인 파트 뿐 아니라 개발자가 두명일 때 협업의 경험을 할 수 있었습니다. SVG 파일로 벡터를 웹에서 활용하고 애니메이션을 작업하는 법을 익힐 수 있었습니다.</p></div><div class="project-desc-r"><button class="proj-review">Project Review</button><button class="weblink"><a href="https://malkkom.github.io/malkkom" target="_blank">Visit <br> Web</a></button></div>');
        $('.projects-right').toggleClass('active')
        $('.projects-right').append('<div class="review"><div class="review-content"><img class="review-img" src="./img/review-img2.png" alt=""><p>디자인 시안에 포함되어있던 배경 스트로크를 SVG 코드로 불러와 CSS에서 keyframes 애니메이션을 활용해  그려지는 모션을 만들어냈습니다.</p> <p>최초 작업 시에 스트로크가 시작점인 좌측이 아닌 우측 끝에서 등장했다가 다시 사라지는 문제가 발생했습니다. stroke-dasharray를 조정해 애니메이션 시작 시 스트로크가 깨지지 않도록 했습니다.</p></div></div>')
        $('.background-darken').toggleClass('hide');

        $('.proj-review').click(function(){
            $('.review').addClass('active')
            $('.review').append('<div class="review-x"><i class="fa-solid fa-xmark fa-xl"></i></div>')
            
            $('.review-x').click(function(){
                $('.review').removeClass('active')
            })
        })
    });


    $('.project3').hover(function () {
        $('.projects-right').prepend('<div class="project-preview"><img src="./img/dawn-main.png" alt=""></div>');
    }, function () {
        if($('.projects-right').hasClass('active')) {
    
        } else {
            $('.project-preview').remove();
        }
    });

    $('.project3').click(function () {
        $('.project-desc').empty()
        $(this).toggleClass('active')
        $('.project1').toggleClass('scoot')
        $('.project2').toggleClass('scoot')
        $('.project-desc').append('<div class="project-desc-l"><h3>Dawn FM 앨범 소개페이지</h3><span>2022.09 ~ 2022.12</span><p>학교 수업 기말 프로젝트로 진행한 The Weeknd의 앨범 Dawn FM 소개 페이지입니다. 단독으로 진행한 프로젝트이며 jQuery를 배우는 인터렉션 수업이기에 최대한 다양한 인터렉션을 jQuery를 사용해 구현해보고 연습해보았습니다.</p></div><div class="project-desc-r"><button class="weblink">Visit <br> Web</button></div>');
        $('.projects-right').toggleClass('active')
        $('.background-darken').toggleClass('hide');
    });

    // if($('.project2').hasClass('active')) {
    //     $('.proj-review').click(function(){
    //         console.log('click');
    //         $('.projects-right').append('<div class="review"><div class="review-content"><img class="review-img" src="./img/review-img2.png" alt=""><p>디자인 시안에 포함되어있던 배경 스트로크를 SVG 코드로 불러와 CSS에서 keyframes 애니메이션을 활용해  그려지는 모션을 만들어냈습니다.</p> <p>최초 작업 시에 스트로크가 시작점인 좌측이 아닌 우측 끝에서 등장했다가 다시 사라지는 문제가 발생했습니다. stroke-dasharray를 조정해 애니메이션 시작 시 스트로크가 깨지지 않도록 했습니다.</p></div></div>')
    //     })
    // }


});