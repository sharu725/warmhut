(function() {
   'use strict';
    var bot, input, url, message, email, name, banner, year;
    $(function() {
        $('.view-menu').on('click', function(){
          $(this).siblings('.nav-menu').toggleClass('menu-open');
        });
        $('.bot').on('click hover', function(){
          bot = $(this).children('.icon');
          $('.widget').toggleClass('open');
          bot.toggleClass('icon-chat').toggleClass('icon-cancel');
        });
        $('.fa-close').on('click', function() {
          $('.widget').removeClass('open');
        })
        $('.email-us').on('click', function() {
            $('.contact').addClass('remove-modal').removeClass('add-modal');
        });
        $('.close-modal').on('click', function() {
            $('.contact').toggleClass('remove-modal').toggleClass('add-modal');
        });

        $('form .icon-submit').on('click', function(){
          //check if the data is ok
          if(details){
            message = 'Thank you for contacting Warmhut ' + name + '. We"ll get back to you shortly.'; 
            banner = $('div.confirmation').append(message);
            $('.overlay').append(banner);
          }
          //check email address
          else{
            message = 'Kindly enter a valid email address.';
            banner = $('div.correction').append(message);
            $('.overlay').append('banner');
          }
        });
           year = new Date();
    $('.thisYear').append(year.getFullYear());
    });
})();
