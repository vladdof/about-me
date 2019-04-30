  $('.about').on('mousemove', (e) => {
    const x = e.pageX / $(window).width(),
          y = e.pageY / $(window).height();
    
    if ($(window).width() > 550) {
      $('.about__content').css(
        'transform',
        'translate(-' + x * 60 + 'px, -' + y * 60 + 'px)'
      );
    }
  });