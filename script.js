let aux = 30;
let html = document.getElementById("html");
let imgBebida = document.getElementsByClassName("imgBebida");
window.onscroll = function (e) {
  var st = window.pageYOffset || html.scrollTop;
  if (st > 0) {
    aux -= 5;
    if (aux < 0) {
      aux = 0;
    }
  } else {
    aux += 30;
  }
  imgBebida[0].style.marginRight = aux + "rem";
  imgBebida[1].style.marginRight = aux + "rem";
  imgBebida[2].style.marginRight = aux + "rem";
};
