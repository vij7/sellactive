// Main scripts



const player = new Plyr('#player', {captions: {active: true}, controls: false});

$(document).ready(function(){

    //animation
    
    
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
        mousewheel: {
            releaseOnEdges: true,
            sensitivity: 30,
            eventsTarget: '.hslide_wrap'
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        on: {
            slideChange: function () {
                $('.aos-init').removeClass('aos-init').removeClass('aos-animate');
              },
              slideChangeTransitionEnd: function () {
                AOS.refreshHard();
              },

        }
    });
    AOS.init();
    // vswiper.on('slideChange', function () {
    //     AOS.init();
       
    //   });
    //horizontal slider
    var hswiper = new Swiper('.hslider', {
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });

    ///job_slider
    // var menu = ['Slide 1', 'Slide 2', 'Slide 3', 'Slide 3', 'Slide 3'];
      var swiper = new Swiper('.job_swiper', {
          effect: 'fade',
        pagination: {
          el: '.job_dots',
          clickable: true,
        },
        navigation: {
            nextEl: '.job-next',
            prevEl: '.job-prev',
           },
      });

///smooth scroll 
      $(".scroll_down").click(function() {
        $('html, body').animate({
            scrollTop: $("#pslider").offset().top
        }, 1000);
    });

      
    
})