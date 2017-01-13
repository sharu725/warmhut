(function() {
   'use strict';
    var bot, input, message, email, guest, mailForm, year, widget;
    $(function() {
        year = new Date();
        $('.thisYear').append(year.getFullYear());
        $('.view-menu').on('click', function(){
          $(this).siblings('.nav-menu').toggleClass('menu-open');
        });
        $('.close-modal').on('click', function() {
            $('.contact').toggleClass('remove-modal').toggleClass('add-modal');
        });
    });
    
    mailForm = $('#enquire');
    widget = $('.widget .piece');
    mailForm.submit(function(e) {
      guest = document.getElementById('name').value.toUpperCase();
      e.preventDefault();
      $.ajax({
        url: '//formspree.io/support@warmhutgroup.com',
        method: 'POST',
        data: $(this).serialize(),
        dataType: 'json',
        beforeSend: function() {
          widget.html(`<div class = "sending">
            <h2>Sending</h2>
            <span></span>
            <span></span>
            <span></span>
          </div>`);
        },
        success: function(data) {
          widget.find('.sending').hide();
          widget.html(`<div class = "confirm success">
            <h2>Hey ${guest}!</h2>
            <div class = 'big-icon'><i class = 'icon icon-agree'></i></div>
            <p>Thank you reaching out to us. We will get back to you asap.</p>
          </div>`);
        },
        error: function(err) {
          widget.find('.sending').hide();
          widget.html('<div class = "confirm error"><p>Yikes! There was problem submitting your details. Please refrsh and try again later.</p></div>');
      }
      });
    });

    $('.continue').on('click', function() {
      window.history.back();
      console.log('I want to go back');
    });
})();
