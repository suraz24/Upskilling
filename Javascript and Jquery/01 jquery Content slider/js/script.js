$(document).ready(function(){
    //set options
    var speed = 500;                    //fade speed 
    var autoSwitch = true;              //auto slider options
    var autoSwitch_speed= 4000;         //auto slider speed


    //Add initial active class
    $('.slide').first().addClass('active');

    //Hide all other slides
    $('.slide').hide();

    //Show active class
    $('.active').show();

    
     //next arrow functionality
    $('#next').on('click', nextSlide);

    //previous arrow functionality
    $('#prev').on('click', prevSlide);
        
    //autoswitch functionality
    if(autoSwitch == true){
        setInterval(nextSlide, autoSwitch_speed);
    }

    //Switch to next Slide
    function nextSlide(){
            $('.active').removeClass('active').addClass('oldActive');
            if($('.oldActive').is(':last-child')){
                $('.slide').first().addClass('active');
            } else{
                $('.oldActive').next().addClass('active');
            }
            $('.oldActive').removeClass('oldActive');
            $('.slide').fadeOut(speed);
            $('.active').fadeIn(speed)
        }

    //Switch to previous Slide
    function prevSlide(){
        $('.active').removeClass('active').addClass('oldActive');
        if($('.oldActive').is(':first-child')){
            $('.slide').last().addClass('active');
        } else{
            $('.oldActive').prev().addClass('active');
        }
        $('.oldActive').removeClass('oldActive');
        $('.slide').fadeOut(speed);
        $('.active').fadeIn(speed);
    }

});
