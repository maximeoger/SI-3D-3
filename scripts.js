var tunnel_pages = document.querySelectorAll('.Tunnel-pages');
var buttonsRight = document.querySelectorAll('.Tunnel-pages-buttonRight');
var buttonsLeft = document.querySelectorAll('.Tunnel-pages-buttonLeft');
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
