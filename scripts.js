
var tunnel_pages = document.querySelectorAll('.Tunnel-pages');
var buttonsRight = document.querySelectorAll('.Tunnel-pages-button-Right');
var buttonsLeft = document.querySelectorAll('.Tunnel-pages-button-Left');
var inputs = document.querySelectorAll('input');
var index = 0;


var gameInstance = UnityLoader.instantiate("gameContainer", "Build/Build_Final.json", {onProgress: UnityProgress});

 function GetInfo(data) {

//   console.log(data.Ring, data.RingColor, data.Ornement, data.OrnementColor);
     /*
   document.querySelector("#Ring-name").innerHTML(data.Ring);
   document.querySelector("#Ornement-name").innerHTML(data.Ornement);
   document.querySelector("#Ornement-color").innerHTML(data.OrnementColor);
   document.querySelector("#Ring-color").innerHTML(data.RingColor);
   */

     // les lignes de dessus servent à remplir les td #Ring-* avec les données reçues par la fonction
 }