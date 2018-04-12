var tunnel_pages = document.querySelectorAll('.Tunnel-pages');
var buttonsRight = document.querySelectorAll('.Tunnel-pages-button-Right');
var buttonsLeft = document.querySelectorAll('.Tunnel-pages-button-Left');
var inputs = document.querySelectorAll('input');
var index = 0;

//var gameInstance = UnityLoader.instantiate("gameContainer", "Build/Build.json", {onProgress: UnityProgress});


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

 function GetInfo(obj1, obj2, obj3, obj4) {

     var Items = {
         Ring : obj1,
         RingColor : obj2,
         Ornement : obj3,
         OrnementColor : obj4
     }

     console.log(Items.Ring, Items.RingColor, Items.Ornement, Items.OrnementColor);
 }




