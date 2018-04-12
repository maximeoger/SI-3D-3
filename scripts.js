var tunnel_pages = document.querySelectorAll('.Tunnel-pages');
var buttonsRight = document.querySelectorAll('.Tunnel-pages-button-Right');
var buttonsLeft = document.querySelectorAll('.Tunnel-pages-button-Left');
var inputs = document.querySelectorAll('input');
 var index = 0;



  for (var i = 0; i < buttonsRight.length; i++) {
    buttonsRight[i].addEventListener('click', function() {
      tunnel_pages[index].classList.remove('is-active');
      index++;
      tunnel_pages[index].classList.add('is-active');

      for (var i = 0; i < inputs.length; i++) {
        var champs = inputs[i].value;
        if ( champs === '') {
          stopPropagation();
        }
      }

  });
  }
  for (var i = 0; i < buttonsLeft.length; i++) {
    buttonsLeft[i].addEventListener('click', function() {
    tunnel_pages[index].classList.remove('is-active');
    index--;
    tunnel_pages[index].classList.add('is-active');
  });
 }
