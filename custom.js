$(document).ready(function() {
  $("nav li").click(function() {
    console.log(this);
    $("nav li").removeClass("active");
    $(this).addClass("active");
  });

  

});
