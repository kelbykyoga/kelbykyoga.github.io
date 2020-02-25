$(window).load(function(){
  var fixed = document.getElementById('fixed-nav');
  fixed.style.display = "flex";
  $(window).scroll(function() {
     var hT = $('#about').offset().top,
         hH = $('#about').outerHeight(),
         wH = $(window).height(),
         wS = $(this).scrollTop();
     if (wS > (hT+hH-wH)){
         removeClass(fixed, "hide");
         addClass(fixed, "show");
     }else{
         removeClass(fixed, "show");
         addClass(fixed, "hide");
     }
  });
});

function addClass(element, name) {
  var arr;
  arr = element.className.split(" ");
  if (arr.indexOf(name) == -1) {
    element.className += " " + name;
  }
}

function removeClass(element, name) {
  var arr;
  arr = element.className.split(" ");
  if (arr.indexOf(name) != -1) {
    arr.splice( arr.indexOf(name), 1 );
    element.className = arr;
  }
}

function mobile_menu(){
  var list = document.getElementById("mobile-menu-items");
  if(list.style.right === "-50vw"){
    list.style.right = "0";
  }else{
    list.style.right = "-50vw";
  }
}