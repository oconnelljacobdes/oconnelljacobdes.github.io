$(".header-links span")
  .mouseenter(function() {
    $(".face").addClass("excited");
  })
  .mouseleave(function() {
    $(".face").removeClass("excited");
  });
var eyeR = $("#eyeRight");
var eyeL = $("#eyeLeft");
var windowWidth;
var windowHeight;

  function resizeCanvas() {
    windowWidth = $('body').width();
    windowHeight = $('body').height();
  }
resizeCanvas();
window.addEventListener('resize', resizeCanvas, false);
window.addEventListener(
  "mousemove",
  function(evt) {
    var mouse = {};
    mouse.x = evt.clientX;
    mouse.y = evt.clientY;
    lookAt(eyeR, mouse, 8, 200);
    lookAt(eyeL, mouse, 8, 200);
  },
  false
);
function lookAt(ob, target, maxDist, maxRange) {
  if (!target) {
    return;
  }
  var dX = target.x - windowWidth/2;
  var dY = target.y - ob.offset().top - 115;
  var dH = Math.sqrt(dX * dX + dY * dY);
  var speedMod = dH / maxRange;
  speedMod = speedMod > 1 ? 1 : speedMod;
  var xx = dX / dH * maxDist * speedMod;
  var yy = dY / dH * maxDist * speedMod;
  ob.css({top:yy,left:xx});
}
$('.tile').click(function(){
   $('.nav.active').removeClass('active');
   var data = $(this).data('showcase');
   show('showcase');
   switch(data){
       case 'hh':
        $('.showcase').html('<div class="content"><h1>Haley\'s Hut</h1>           <div class="separator"></div>           <div class="copy">This project was a branding exercise used for a fashion boutique, that specializes in custom made clothing. My task was to come up with a friendly and energetic brand styling, logo, custom typeface, iconography, and potential future mockups incorporating the brand.           </div></div><img src="https://i.imgur.com/SlkrqrR.jpg"/>  <img src="https://i.imgur.com/sXPBhk8.jpg"/>  <img src="https://i.imgur.com/OraDZhi.jpg"/>  <img src="https://i.imgur.com/U1KCC8Y.jpg"/>  <img src="https://i.imgur.com/bwSElRB.jpg"/>  <img src="https://i.imgur.com/EvSSNdY.jpg"/>  <img src="https://i.imgur.com/xSzcBAp.gif"/>');
       break;
       case 'marquette':
        $('.showcase').html('marquette');
       break;
   }
});
$('.nav').click(function(){
   $('.nav.active').removeClass('active');
   $(this).addClass('active');
    show($(this).text().toLowerCase());
});
function show(clas){
  $('.work,.about,.contact,.showcase').hide();
  $('.' + clas).show();
    
}
