// Sets clicked nav item to active
$(".nav li").on("click", function() {
      $(".nav li").removeClass("active");
      $(this).addClass("active");
});

$("a[href^='#']").on('click', function(event){     
    event.preventDefault();
    $('html,body').animate({scrollTop:$(this.hash).offset().top}, 400);
});