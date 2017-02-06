function goToByScroll(id){
	$('html,body').animate({scrollTop: $("#"+id).offset().top},'slow');
}

$("#sunset-box").click(function() {
  goToByScroll('photo-box');
});

$(window).scroll(function(){
    $("#flur-icon-container").css("opacity", 1 - $(window).scrollTop() / 300);
    $("#thankyou-text").css("opacity", 1 - $(window).scrollTop() / 400);
    $("footer").css("opacity", 1 - $(window).scrollTop() / 500);
});
