var div = document.querySelectorAll('.div');
var buttonRight = document.querySelectorAll('.button1');
var buttonLeft = document.querySelector('.button2');
 var index = 0;
  for (var i = 0; i < buttonRight.length; i++) {
    buttonRight[i].addEventListener('click', function() {
    div[index].classList.remove('is-active');
    index++;

    div[index].classList.add('is-active');

  });
  }
  buttonLeft.addEventListener('click', function() {
    div[index].classList.remove('is-active');
    index--;
    div[index].classList.add('is-active');
  });
