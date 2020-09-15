$(document).ready(() => {
    $('#mycarousel').carousel( { interval: 500 } );
    $('#carouselButton').click(() => {
        if($('#carouselButton').children('span').hasClass('fa-pause')){
             $('#mycarousel').carousel('pause');
             $('#carouselButton').children('span').removeClass('fa-pause').addClass('fa-play');
        }
        else{
             $('#mycarousel').carousel('cycle');
             $('#carouselButton').children('span').removeClass('fa-play').addClass('fa-pause');
        }
    });
    $('#reserveButton').click(function(){
         $('#reserveModal').modal('show');
     });
    $('#loginButton').click(function(){
         $('#loginModal').modal('show');
     });
})