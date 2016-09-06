// Sets clicked nav item to active
$(".nav li").on("click", function() {
      $(".nav li").removeClass("active");
      $(this).addClass("active");
});

$(document).on('click', 'a[href*=#]', function(event){
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 400);
});