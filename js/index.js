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
   var data = $(this).data('showcase');
   show('showcase');
   switch(data){
       case 'hh':
        $('.showcase').html('<img src="https://lh5.googleusercontent.com/OpWOoelkWdF-yCK3gB95pXxGWzdQuheu8L3lscum9qwgAhQDDtyH8P5o4DuUUA0lQmXjZqGQhFzJpck=w838-h875" alt=""/><img src="https://lh5.googleusercontent.com/OpWOoelkWdF-yCK3gB95pXxGWzdQuheu8L3lscum9qwgAhQDDtyH8P5o4DuUUA0lQmXjZqGQhFzJpck=w838-h875" alt=""/>');
       break;
   }
});
$('.nav').click(function(){
    show($(this).text().toLowerCase());
});
function show(clas){
  $('.work,.about,.contact,.showcase').hide();
  $('.' + clas).show();
    
}