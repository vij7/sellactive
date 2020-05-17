// Main scripts



const player = new Plyr('#player', { captions: { active: true }, controls: false });



$(document).ready(function () {
  var slideCnt = 0;

  var vswiper = new Swiper('.v-slider', {
    direction: 'vertical',
    slidesPerView: 1,
    spaceBetween: 30,
    loop: false,
    // autoplay: {
    //   delay: 6000,
    //   disableOnInteraction: true,
    // },
    mousewheel: {
      sensitivity: 0,
      releaseOnEdges: true,
      eventsTarget: '.hslide_wrap'
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    on: {
      reachBeginning: function () {
        AOS.refreshHard();
        slideCnt++;
        if (slideCnt >= 1) {
          // alert(1);
          setTimeout(function () {
            $('.ps_overlay').addClass('active');
          }, 7000);

        }
      },
      reachEnd: function () {
        slideCnt++;
        if (slideCnt >= 1) {
          // alert(1);
          setTimeout(function () {
            $('.ps_overlay').addClass('active');
          }, 1000);

        }
      },
      slideChange: function () {
        AOS.refresh();
      },
      slideChangeTransitionEnd: function () {
        AOS.refreshHard();
        $('.aos-init').addClass('aos-init').addClass('aos-animate');

      },

    }
  });
  //  vswiper.mousewheel.disable();

  //Fullpage
  new fullpage('#fullpage', {
    normalScrollElements: '.v-slider',
    fixedElements: '.main_header',
    afterLoad: function (origin) {
      setTimeout(function () {
        if ($(window).width() > 1024) {
          vswiper.mousewheel.enable();
        }
      }, 1500);
      if (origin.index == 1 || origin.index == 2) {
        // alert(0);
        var slideCnt = 0;

        $('.ps_overlay').removeClass('active');

      }
      if (origin.index == 0) {
        vswiper.slideTo(0, 300, false);
      }


      if (origin.index != 1) {
        $('.main_header').addClass('fixed');
      }
      else {
        $('.main_header').removeClass('fixed');
      }






      $('.aos-init').addClass('aos-animate');
      $('.aos-init').addClass('aos-init').addClass('aos-animate');

    },
  });


  $('.fp-viewing-0 .main_header').removeClass('fixed');


  // Menu toggle
  $('.menu_toggle').click(function() {
    $('.menu_wrap').toggleClass('active');
    $(this).toggleClass('active');
    $('.menu_text').text($('.menu_text').text() == 'MENU' ? 'CLOSE' : 'MENU');

  });
  // video actions
  $('.vid_play').click(function (e) {
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


  AOS.init();
  //horizontal slider
  var hswiper = new Swiper('.hslider', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  ///job_slider
  // var menu = ['Slide 1', 'Slide 2', 'Slide 3', 'Slide 3', 'Slide 3'];
  var titles = [];
  $('.jobs_slider .swiper-slide').each(function (i) {
    titles.push($(this).data('title'))
  });
  var swiper = new Swiper('.job_swiper', {
    effect: 'fade',
    navigation: {
      nextEl: '.job-next',
      prevEl: '.job-prev',
    },
    pagination: {
      el: '.jobs_pagination',
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="tab__link ' + className + '">' + titles[index] + '</span>';
      },
    },
  });

  ///smooth scroll 
  $(".scroll_down").click(function() {
    // $('html, body').animate({
    //     scrollTop: $("#pslider").offset().top
    // }, 1000);
    fullpage_api.moveSectionDown();
  });

  $(".scroll_2").click(function() {
    // $('html, body').animate({
    //     scrollTop: $("#servc_section").offset().top
    // }, 1000);
    fullpage_api.moveSectionDown();
  });


  // if ($(window).width() <= 1024) {
  //   // alert(1);
  //   fullpage_api.destroy('all');
  //   if (vswiper.mousewheel.enabled) {
  //     // alert('enabled');
  //   }
  //   else {
  //     // alert('disabled');
  //   }
  // }

  const player2 = new Plyr('.grafikVideo', { controls: false });

  $('.grfk_play .vd_play').click(function (e) {
    e.preventDefault();
    if (player2.paused == false) {
      player2.pause();
      player2.muted = true;
      $('.grfk_play .vd_play').removeClass('playing');
    } else {
      player2.play();
      player2.muted = false;
      $('.grfk_play .vd_play').addClass('playing');

    }
    // if(player.playing == true) {
    //     $(this).addClass('playing');
    // }
    // else {
    //     // $(this).removeClass('playing');
    // }
  })


})

$(window).scroll(function () {
  if ($(window).scrollTop() >= 100) {
    $('.main_header').addClass('fixed');
  }
  else {
    $('.main_header').removeClass('fixed');
  }
});


