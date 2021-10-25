function Texto() {
    alert("Spring will be here soon");
  }

const char = basicScroll.create({
  elem: document.querySelector('.contenedoresi'),
  from: 'top-top',
  to: 'middle-top',
  props: {
    '--chars': {
      from: 1,
      to: 0
    }
  }
});

const title = basicScroll.create({
  elem: document.querySelector('.contenedoresii'),
  from: 'top-bottom',
  to: 'top-top',
  props: {
    '--title': {
      from: '75vh',
      to: '-5vh'
    }
  }
});

$(window).on('load', () => {
  $('.footer h3').prepend(`&copy; ${(new Date).getFullYear()} Gian Luca Porto`);
}); 

$(window).scroll(function() {
  parallax();
});

function parallax() {
  var wScroll = $(window).scrollTop();
  var height = $(window).height();

  var offset = $('.fila2').offset().top;

  var dFB = offset - wScroll - height;
  if ($(window).width() < 950) {
    $('.fila2').css({
      'background-position': `center ${wScroll-height-300}px`,
      'background-position-x': '25%'
    });
  } else {
    $('.fila2').css('background-position', `center ${wScroll-height}px`);
  }
}

char.start();
title.start();
