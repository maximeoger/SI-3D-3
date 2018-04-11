var tunnel_pages = document.querySelectorAll('.tunnel-pages');
var buttonsRight = document.querySelectorAll('.button1');
var buttonsLeft = document.querySelectorAll('.button2');
 var index = 0;
  for (var i = 0; i < buttonsRight.length; i++) {
    buttonsRight[i].addEventListener('click', function() {
    tunnel_pages[index].classList.remove('is-active');
    index++;
    tunnel_pages[index].classList.add('is-active');
  });
  }
  for (var i = 0; i < buttonsLeft.length; i++) {
    buttonsLeft[i].addEventListener('click', function() {
    tunnel_pages[index].classList.remove('is-active');
    index--;
    tunnel_pages[index].classList.add('is-active');
  });
 }
