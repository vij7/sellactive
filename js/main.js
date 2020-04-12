// Main scripts



const player = new Plyr('#player', {captions: {active: true}, controls: false});

$(document).ready(function(){

    //animation
    AOS.init();
    
    // Menu toggle
    $('.menu_toggle').click(function(){
        $('.menu_wrap').toggleClass('active');
        $(this).toggleClass('active');
        $('.menu_text').text($('.menu_text').text() == 'MENU' ? 'CLOSE' : 'MENU');
        
    })
    // video actions
    $('.vid_play').click(function(e){
        e.preventDefault();
        if (player.paused == false) {
            player.pause();
            player.muted = true;
            $('.vid_play').removeClass('playing');
        } else {
            player.play();
            player.muted = false;
            $('.vid_play').addClass('playing');
            
        }
        // if(player.playing == true) {
        //     $(this).addClass('playing');
        // }
        // else {
        //     // $(this).removeClass('playing');
        // }
    })
    // vertical slider
    var vswiper = new Swiper('.v-slider', {
        direction: 'vertical',
        slidesPerView: 1,
        spaceBetween: 30,
        // mousewheel: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
    });
    // vswiper.on('slideChange', function () {
    //     AOS.refresh();
    //   })
    //horizontal slider
    var hswiper = new Swiper('.hslider', {
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });

      
    
})