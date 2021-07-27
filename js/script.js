function Texto() {
    alert("Spring will be here soon");
  }

const image1 = basicScroll.create({
  elem: document.querySelector('.fila2'),
  from: 'top-bottom',
  to: 'bottom-top',
  props: {
    '--image1': {
      from: '-15vh',
      to: '-75vh%'
    }
  }
});

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
})


image1.start();
char.start();
title.start();