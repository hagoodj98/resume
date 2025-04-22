



$(".subheadingcontent").hide();

$(".h2Animate").on("click", function(){
   
    var numberOfHeadings = $(this).attr("id");
    
    animateContent(numberOfHeadings);
    

    
    //$("h1").css("color", "purple");
    //$("h1").hide()//this makes it hide forever. We dont want that. you want a toggle instead
    //$("h1").toggle()// the element hides immediately. We want to use fadeout to smooth it out
    //$("h1").fadeOut();//Of course theres an opposite. fadein
    //$("h1").fadeIn();//All of these options come with a toggle option
    //$("h1").fadeToggle();//additions
    //$("h1").slideUp();
    //$("h1").slideDown();
    //$("h1").slideToggle();// Something with more control we can use animate
   // $("h1").animate({/* add CSS rule with only a numeric value*/ opacity: 0.5});//a more gradual
    //more than one animation no problem

    

   
   // $(".animatecontent").slideUp().slideDown().animate({opacity:0.5});
    //use resources. Will not be able to remember all this
});


function animateContent(currentHeading) {

    $("#animate" + currentHeading).slideToggle();
   
    $("#" + currentHeading + "buttonup").toggleClass("arrowactivated");
      
}

