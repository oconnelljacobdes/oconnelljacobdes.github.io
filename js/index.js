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
        $('.showcase').html('<div class="content"><h1>Haley\'s Hut</h1>                      <div class="copy">This project was a branding exercise used for a fashion boutique, that specializes in custom made clothing. My task was to come up with a friendly and energetic brand styling, logo, custom typeface, iconography, and potential future mockups incorporating the brand.           </div></div><img src="https://i.imgur.com/SlkrqrR.jpg"/>  <img src="https://i.imgur.com/sXPBhk8.jpg"/>  <img src="https://i.imgur.com/OraDZhi.jpg"/>  <img src="https://i.imgur.com/U1KCC8Y.jpg"/>  <img src="https://i.imgur.com/bwSElRB.jpg"/>  <img src="https://i.imgur.com/EvSSNdY.jpg"/>  <img src="https://i.imgur.com/xSzcBAp.gif"/>');
       break;
       case 'mindfullness':
        $('.showcase').html('<div class="content"><h1>Mindfullness</h1>                      <div class="copy"> Small logo project for a eating disorder recovery community. Focus was on calming and organic visuals with a modern touch. </div></div> <img src="https://i.imgur.com/i9HwlHN.jpg"/><img src="https://i.imgur.com/uvkS58w.jpg"/><img src="https://i.imgur.com/3pt7slS.jpg"/><img src="https://i.imgur.com/8QdFcBa.jpg"/><img src="https://i.imgur.com/LLKNplg.jpg"/><img src="https://i.imgur.com/ZrR4JoD.jpg"/><img src="https://i.imgur.com/6FOvo5N.jpg"/><img src="https://i.imgur.com/2mfiyT4.jpg"/><img src="https://i.imgur.com/9DsO2nW.jpg"/><img src="https://i.imgur.com/CNxf6JT.jpg"/><img src="https://i.imgur.com/0uIi60t.jpg"/><img src="https://i.imgur.com/zFrghNS.jpg"/><img src="https://i.imgur.com/FyPrdPX.jpg"/><img src="https://i.imgur.com/iVSASAP.jpg"/><img src="https://i.imgur.com/GAugqwu.jpg"/>');
       break;
	   case 'marquettecastingscooking':
        $('.showcase').html('<div class="content"><h1>Marquette Castings Cooking</h1>                      <div class="copy"> This is a currently ongoing marketing series for Marquette Castings where we are using some of their cookware for instructional cooking videos showcased on various social media platforms. </div></div> <div class="vid"><iframe src="https://player.vimeo.com/video/235619128" width="800" height="450" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe></div> <div class="vid"><iframe src="https://player.vimeo.com/video/239526262" width="800" height="450" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe></div><div class="vid"> <iframe src="https://player.vimeo.com/video/235914570" width="800" height="450" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe></div>');
       break;
   }
   $('html,body').scrollTop(0);
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
