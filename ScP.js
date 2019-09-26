$(document).on("ready",configurarApp);
//diseño que decidi no incluir por el momento
function configurarApp (){
    var  canvas = document.getElementById("miCanvas");
    var ctx = canvas.getContext("2d");
    canvas.width = screen.availWidth;
    dibujoF(canvas,ctx)
}
//diseño que decidi no incluir por el momento
function dibujoF(canvas,contexto){
    contexto.fillStyle = "rgba(0,0,0,0.8)";
    contexto.moveTo(0,0);
    contexto.quadraticCurveTo(0,0,canvas.width -0,canvas.height)
    contexto.fill();
}
function initMap() {
}
{
    var uluru = {lat: -18.490565, lng: 69.791968};
  
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 4,
      center: uluru
    });
  
  }