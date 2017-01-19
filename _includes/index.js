(function() {
   'use strict';
    var bot, input, message, email, guest, mailForm, year, widget;
    $(function() {
        year = new Date();
        $('.thisYear').append(year.getFullYear());
        $('.view-menu').on('click', function(){
          $(this).siblings('.nav-menu').toggleClass('menu-open');
          $(this).toggleClass('toggled');
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
      if(guest){
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
      }
    });

    $('.continue').on('click', function() {
      window.history.back();
      console.log('I want to go back');
    });

   $(".custom-select").each(function() {
      var classes = $(this).attr("class"),
      id      = $(this).attr("id"),
      name    = $(this).attr("name");
      var template =  '<div class="' + classes + '">';
      template += '<span class="custom-select-trigger">' + $(this).attr("placeholder") + '</span>';
      template += '<div class="custom-options">';
      $(this).find("option").each(function() {
        template += '<span class="custom-option ' + $(this).attr("class") + '" data-value="' + $(this).attr("value") + '">' + $(this).html() + '</span>';
      });
      template += '</div></div>';
      
      $(this).wrap('<div class="custom-select-wrapper"></div>');
      $(this).hide();
      $(this).after(template);
    });
    $(".custom-option:first-of-type").hover(function() {
      $(this).parents(".custom-options").addClass("option-hover");
    }, function() {
      $(this).parents(".custom-options").removeClass("option-hover");
    });
    $(".custom-select-trigger").on("click", function() {
      $('html').one('click',function() {
        $(".custom-select").removeClass("opened");
      });
      $(this).parents(".custom-select").toggleClass("opened");
      event.stopPropagation();
    });
    $(".custom-option").on("click", function() {
      $(this).parents(".custom-select-wrapper").find("select").val($(this).data("value"));
      $(this).parents(".custom-options").find(".custom-option").removeClass("selection");
      $(this).addClass("selection");
      $(this).parents(".custom-select").removeClass("opened");
      $(this).parents(".custom-select").find(".custom-select-trigger").text($(this).text());
    });
})();

