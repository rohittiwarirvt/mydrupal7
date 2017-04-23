(function($) { 
console.log("hii");
   Drupal.behaviors.prohaktivTheme = {
    attach:function(context,settings) {
         /* Services */
    if($(".servicesSection").length) {
    	console.log("inn");
      $(".serviceRow").mouseover(function() {
      	console.log("111");
      $(this).find(".serviceRowInnerWrap img").addClass('SrAnimation');
      }).mouseout(function() {
      $(this).find(".serviceRowInnerWrap img").removeClass('SrAnimation');
      });
    }
/* Home Slider JS*/
         var gallery = function(){
           $("#one").css({top:0, left:0});
           $("#two").css({top:300, left:0});
           $("#three").css({top:0, left:400});
           $("#four").css({top:300, left:400});
           $("#five").css({top:0, left:800});
           $("#six").css({top:0, left:1600});
           $("#seven").css({top:300, left:1600});
           $("#eight").css({top:0, left:2000});
           $("#nine").css({top:300, left:2000});
         
           $(".thumbOverlay").stop(true, true).fadeOut(1000);
           $(".clientLogo").stop(true, true).fadeOut(500);
           $(".caption").stop(true, true).fadeOut(1000);
           
           $(".thumb").each(function () {
             if(Math.round($(this).position().top) == 0 && Math.round($(this).position().left) == 800) {         
               $(this).stop(true, true).animate({ top: '0px', left: '800px', width: '800px', height: '600px' }, 0); // added on 25-09-2014         
               $(this).find(".clientName").stop(true, true).hide();
               $(this).find(".thumbOverlay").stop(true, true).show();
               $(this).find(".clientLogo").stop(true, true).show();
               $(".caption").stop(true, true).fadeIn(1000);
             }
           });
         }         
         function AnimateIt(){
           
           $(".thumbOverlay").stop(true, true).fadeOut(1000);
           $(".clientLogo").stop(true, true).fadeOut(500);
           $(".caption").stop(true, true).fadeOut(1000);
           $(".clientName").stop(true, true).fadeOut(1000);
         
           $(".thumb").each(function () {
             var thumb = $(this);
             if (Math.round(thumb.position().top) == 300 && Math.round(thumb.position().left) == 0) {
               thumb.animate({ top: '0px', left: '0px' }, 1000, 'easeInOutExpo', function(){
                 //thumb.find(".clientName").stop(true, true).fadeIn(300);
         
               });
             }else if (Math.round(thumb.position().top) == 0 && Math.round(thumb.position().left) == 400) {
               thumb.animate({ top: '300px', left: '0px' }, 1000, 'easeInOutExpo', function(){
                 //thumb.find(".clientName").stop(true, true).fadeIn(300);
               });
             }else if (Math.round(thumb.position().top) == 300 && Math.round(thumb.position().left) == 400) {
               thumb.animate({ top: '0px', left: '400px' }, 1000, 'easeInOutExpo', function(){
                 //thumb.find(".clientName").stop(true, true).fadeIn(300);
               });
             }else if (Math.round(thumb.position().top) == 300 && Math.round(thumb.position().left) == 1600) {
               thumb.animate({ top: '0px', left: '1600px' }, 1000, 'easeInOutExpo', function(){
                 //thumb.find(".clientName").stop(true, true).fadeIn(300);
               });
             }else if (Math.round(thumb.position().top) == 0 && Math.round(thumb.position().left) == 2000) {
               thumb.animate({ top: '300px', left: '1600px' }, 1000, 'easeInOutExpo', function(){
                 //thumb.find(".clientName").stop(true, true).fadeIn(300);
               });
             }else if (Math.round(thumb.position().top) == 0 && Math.round(thumb.position().left) == 0) {
               thumb.animate({ top: '300px', left: '2000px', zIndex: '0' }, 1000, 'easeInOutExpo', function(){
                 //thumb.find(".clientName").stop(true, true).fadeIn(300);
               });
             }else if (Math.round(thumb.position().top) == 300 && Math.round(thumb.position().left) == 2000) {
               thumb.animate({ top: '0px', left: '2000px' }, 1000, 'easeInOutExpo', function(){
                 //thumb.find(".clientName").stop(true, true).fadeIn(300);
               });
             }else if (Math.round(thumb.position().top) == 0 && Math.round(thumb.position().left) == 1600) {
               thumb.find(".clientName").stop(true, true).fadeOut(0);
               thumb.animate({ top: '0px', left: '800px', width: '800px', height: '600px' }, 1000, 'easeInOutExpo', function(){
                 thumb.find(".thumbOverlay").stop(true, true).fadeIn(300);
                 thumb.find(".clientLogo").stop(true, true).fadeIn(600);
                 thumb.find(".caption").stop(true, true).fadeIn(1000);
                 
               });
               thumb.addClass('big');
             }else if (Math.round(thumb.position().top) == 0 && Math.round(thumb.position().left) == 800) {
               thumb.removeClass('big');
               thumb.animate({ top: '300px', left: '400px', width: '400px', height: '300px' }, 1000, 'easeInOutExpo', function(){
                 //thumb.find(".clientName").stop(true, true).fadeIn(300);
               });
             }
           });
         }
/* functional & text slider settings */
         var mobileSlider = $('.slider1').bxSlider({
               slideWidth: 767,
               minSlides: 1,
               maxSlides: 1,
               slideMargin: 0,
               auto:true,
               onSlideAfter:slideComplete
             });
         function slideComplete($slideElement, oldIndex, newIndex){
             $(".slideOverlay").fadeOut();
             $('.slideLogo').fadeOut(300);
             $('.slideCaption').fadeOut();
             $slideElement.find(".slideOverlay").fadeIn(300, function(){
               $slideElement.find('.slideLogo').fadeIn(300);
               $slideElement.find('.slideCaption').fadeIn(300);
             });
           }
         
         
         var interval;
         
         function playinterval(){
           AnimateIt(); 
           interval = setInterval(function(){AnimateIt();},6000); 
           return false;
         }
         
         function stopinterval(){
           clearInterval(interval); 
           return false;
         }
         
         // function for set banner text size
         
         var winWidth = $(window).width();
         function setFontSize(){
           if(winWidth <=640){
             $('.copyContainer').css({display:"none"});
             $(".slider li p").css({display:"none"});
             $(".slider li h2").css({top:60});
             $('.topic').addClass("setFontSize");
             $('.topic').find("span").css({display:"block"});
           }
           else{
             $('.copyContainer').css({display:"block"});
             $(".slider li h2").css({top:40});
             $('.topic').removeClass("setFontSize");
             $('.topic').find("span").css({display:"inline-block"});
           }
         }          
         $(function(){
           setFontSize();
           mobileSlider;
           gallery();
           playinterval();
         });
         
         $(window).on("resize", function(){
           winWidth = $(window).width();
           gallery();
           mobileSlider.reloadSlider();
         });
         
         $(document).on("resize", function(){
         
           winWidth = $(window).width();
           gallery();
           stopinterval();
           playinterval();
         
         });
}
};
})(jQuery);