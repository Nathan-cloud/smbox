(function ($) {
  'use strict';

  /*---------------------
    preloader
    --------------------- */

  $(window).on('load', function () {
    $('#preloader').fadeOut('slow', function () {
      $(this).remove();
    });
  });

  /*-----------------
    sticky
    -----------------*/
  $(window).on('scroll', function () {
    if ($(window).scrollTop() > 50) {
      $('header').addClass('navbar-fixed-top');
    } else {
      $('header').removeClass('navbar-fixed-top');
    }
  });

  /*-----------------
    sticky-mobile
    -----------------*/
  $(window).on('scroll', function () {
    if ($(window).scrollTop() > 100) {
      $('.custom-mobile-menu-area').addClass('navbar-fixed-top');
    } else {
      $('.custom-mobile-menu-area').removeClass('navbar-fixed-top');
    }
  });

  /*-----------------------------------------
     Active current menu while scrolling
    -----------------------------------------*/

  $(window).on('scroll', function () {
    activeMenuItem($('.menu-list'));
  });

  // function for active menuitem
  function activeMenuItem($links) {
    var top = $(window).scrollTop(),
      windowHeight = $(window).height(),
      documentHeight = $(document).height(),
      cur_pos = top + 2,
      sections = $('section'),
      nav = $links,
      nav_height = nav.outerHeight(),
      home = nav.find(' > ul > li:first');

    sections.each(function () {
      var top = $(this).offset().top - nav_height - 40,
        bottom = top + $(this).outerHeight();

      if (cur_pos >= top && cur_pos <= bottom) {
        nav.find('> ul > li > a').parent().removeClass('active');
        nav
          .find("a[href='#" + $(this).attr('id') + "']")
          .parent()
          .addClass('active');
      } else if (cur_pos === 2) {
        nav.find('> ul > li > a').parent().removeClass('active');
        home.addClass('active');
      } else if ($(window).scrollTop() + windowHeight > documentHeight - 400) {
        nav.find('> ul > li > a').parent().removeClass('active');
      }
    });
  }

  /*------------------------------
         counter
    ------------------------------ */
  $('.counter-up').counterUp();

  /*---------------------
    smooth scroll
    --------------------- */
  $('.smoothscroll').on('click', function (e) {
    e.preventDefault();
    var target = this.hash;

    $('html, body')
      .stop()
      .animate(
        {
          scrollTop: $(target).offset().top - 80,
        },
        1200
      );
  });

  /*---------------------
    countdown
    --------------------- */
  $('[data-countdown]').each(function () {
    var $this = $(this),
      finalDate = $(this).data('countdown');
    $this.countdown(finalDate, function (event) {
      $this.html(
        event.strftime(
          '<span class="cdown days"><span class="time-count">%-D</span> <p>Days</p></span> <span class="cdown hour"><span class="time-count">%-H</span> <p>Hour</p></span> <span class="cdown minutes"><span class="time-count">%M</span> <p>Min</p></span> <span class="cdown second"> <span><span class="time-count">%S</span> <p>Sec</p></span>'
        )
      );
    });
  });

  /*---------------------
    Request-form
    --------------------- */

  function ShowHideDiv(chkinstituation) {
    var dvinst = document.getElementById('dvins');
    dvinst.style.display = chkinstituation.checked ? 'block' : 'none';
  }
  function ShowHideDi(chpersonal) {
    var dvper = document.getElementById('dvper');
    dvper.style.display = chpersonal.checked ? 'block' : 'none';
  }

  function ShowHideskl(chskl) {
    var sklhide = document.getElementById('sklhide');
    sklhide.style.display = chskl.checked ? 'block' : 'none';
  }
  function ShowHidecomp(chcomp) {
    var comphide = document.getElementById('comphide');
    comphide.style.display = chcomp.checked ? 'block' : 'none';
  }

  /*---------------------
    video-popup
    --------------------- */
  $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
    disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 300,
    preloader: false,
    fixedContentPos: false,
  });

  /*---------------------
    tooltip
    --------------------- */
  $('[data-toggle="tooltip"]').tooltip();

  /*---------------------
    testimonial-carousel
    --------------------- */
  function testimonial_carousel() {
    var owl = $('.testimonial-carousel');
    owl.owlCarousel({
      loop: true,
      margin: 20,
      responsiveClass: true,
      navigation: true,
      navText: [
        "<i class='fa fa-angle-left'></i>",
        "<i class='fa fa-angle-right'></i>",
      ],
      nav: false,
      items: 1,
      smartSpeed: 2000,
      dots: true,
      autoplay: false,
      autoplayTimeout: 4000,
      center: true,
      responsive: {
        0: {
          items: 1,
        },
        480: {
          items: 1,
        },
        760: {
          items: 1,
        },
      },
    });
  }
  testimonial_carousel();

  /*---------------------
    smb-carousel
    --------------------- */
  function smb_carousel() {
    var owl = $('.smb-carousel');
    owl.owlCarousel({
      loop: true,
      margin: 20,
      responsiveClass: true,
      navigation: true,
      navText: [
        "<i class='fa fa-angle-left'></i>",
        "<i class='fa fa-angle-right'></i>",
      ],
      nav: true,
      items: 1,
      smartSpeed: 2000,
      dots: false,
      autoplay: false,
      autoplayTimeout: 4000,
      center: true,
      responsive: {
        0: {
          items: 1,
        },
        480: {
          items: 1,
        },
        760: {
          items: 1,
        },
      },
    });
  }
  smb_carousel();

  /*---------------------
    screenshot-carousel
    --------------------- */
  function screenshot_carousel() {
    var owl = $('.screenshot-carousel');
    owl.owlCarousel({
      loop: true,
      margin: 20,
      responsiveClass: true,
      navigation: true,
      navText: [
        "<i class='fa fa-angle-left'></i>",
        "<i class='fa fa-angle-right'></i>",
      ],
      nav: true,
      items: 1,
      smartSpeed: 2000,
      dots: false,
      autoplay: false,
      autoplayTimeout: 4000,
      center: true,
      responsive: {
        0: {
          items: 1,
        },
        480: {
          items: 1,
        },
        760: {
          items: 1,
        },
      },
    });
  }
  screenshot_carousel();

  /*-----------------------------
    whats new masonary activation
    ------------------------------- */
  $('#container').imagesLoaded(function () {
    //image loaded

    // filter items on button click
    $('.wtn-menu').on('click', 'ul li', function () {
      var filterValue = $(this).attr('data-filter');
      $grid.isotope({ filter: filterValue });
    });

    // masonary activation
    var $grid = $('.grid_container').isotope({
      itemSelector: '.grid',
      percentPosition: true,
      masonry: {
        // use outer width of grid-sizer for columnWidth
        columnWidth: '.grid',
      },
    });
  });

  /*---------------------
    Ajax Contact Form
    --------------------- */
})(jQuery);
