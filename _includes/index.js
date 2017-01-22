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
      template += '<span class="select-trigger">' + $(this).attr("placeholder") + '</span>';
      template += '<div class="custom-options">';
      $(this).find("option").each(function() {
        template += '<span class="custom-option ' + $(this).attr("class") + '" data-value="' + $(this).attr("value") + '">' + $(this).html() + '</span>';
      });
      template += '</div></div>';
      
      // $(this).wrap('<div class="select-wrapper"></div>');
      $(this).hide();
      $(this).after(template);
    });
    $(".custom-option:first-of-type").hover(function() {
      $(this).parents(".custom-options").addClass("option-hover");
    }, function() {
      $(this).parents(".custom-options").removeClass("option-hover");
    });
    $(".select-trigger").on("click", function() {
      $('html').one('click',function() {
        $(".custom-select").removeClass("opened");
      });
      $(this).parents(".custom-select").toggleClass("opened");
      event.stopPropagation();
    });
    $(".custom-option").on("click", function() {
      $(this).parents(".select-wrapper").find("select").val($(this).data("value"));
      $(this).parents(".custom-options").find(".custom-option").removeClass("selection");
      $(this).addClass("selection");
      $(this).parents(".custom-select").removeClass("opened");
      $(this).parents(".custom-select").find(".select-trigger").text($(this).text());
    });

    function Carousel(element) {
      this._autoDuration = 0;
      this._container = element.querySelector('.container');
      this._interval = null;
      this._nav = element.querySelector('.nav');
      this._slide = 0;
      this._touchAnchorX = 0;
      this._touchTime = 0;
      this._touchX1 = 0;
      this._touchX2 = 0;
      element.addEventListener('click', this);
      element.addEventListener('touchstart', this);
      element.addEventListener('touchmove', this);
      element.addEventListener('touchend', this);
      element.addEventListener('transitionend', this);
      window.addEventListener('blur', this);
      window.addEventListener('focus', this);
      this.set(0);
    }

    Carousel.prototype.auto = function (ms) {
      if (this._interval) {
        clearInterval(this._interval);
        this._interval = null;
      }
      if (ms) {
        this._autoDuration = ms;
        var self = this;
        this._interval = setInterval(function () { self.next(); }, ms);
      }
    }

    Carousel.prototype.handleEvent = function (event) {
      if (event.touches && event.touches.length > 0) {
        this._touchTime = +new Date;
        this._touchX1 = this._touchX2;
        this._touchX2 = event.touches[0].screenX;
      }

      var screen = document.documentElement.clientWidth;
      var position = this._slide + (this._touchAnchorX - this._touchX2) / screen;
      var velocity = (new Date - this._touchTime) <= 200 ? (this._touchX1 - this._touchX2) / screen : 0;

      switch (event.type) {
        case 'blur':
          this.auto(0);
          break;
        case 'click':
          if (event.target.parentNode != this._nav) break;
          var i = parseInt(event.target.dataset.slide);
          if (!isNaN(i)) {
            event.preventDefault();
            this.auto(0);
            this.set(i);
          }
          break;
        case 'focus':
          this.auto(this._autoDuration);
          break;
        case 'touchstart':
          event.preventDefault();
          this.auto(0);
          this._container.style.transition = 'none';
          this._touchAnchorX = this._touchX1 = this._touchX2;
          break;
        case 'touchmove':
          this._container.style.transform = 'translate3d(' + (-position * 100) + 'vw, 0, 0)';
          break;
        case 'touchend':
          this._container.style.transition = '';
          var offset = Math.min(Math.max(velocity * 4, -0.5), 0.5);
          this.set(Math.round(position + offset));
          break;
        case 'transitionend':
          var i = this._slide, count = this._countSlides();
          if (i >= 0 && i < count) break;
          // The slides should wrap around. Instantly move to just outside screen on the other end.
          this._container.style.transition = 'none';
          this._container.style.transform = 'translate3d(' + (i < 0 ? -count * 100 : 100) + 'vw, 0, 0)';
          // Force changes to be applied sequentially by reflowing the element.
          this._container.offsetHeight;
          this._container.style.transition = '';
          this._container.offsetHeight;
          // Animate the first/last slide in.
          this.set(i < 0 ? count - 1 : 0);
          break;
      }
    };

    Carousel.prototype.next = function () {
      this.set(this._slide + 1);
    };

    Carousel.prototype.previous = function () {
      this.set(this._slide - 1);
    };

    Carousel.prototype.set = function (i) {
      var count = this._countSlides();
      if (i < 0) { i = -1; } else if (i >= count) { i = count; }
      this._slide = i;
      this._container.style.transform = 'translate3d(' + (-i * 100) + 'vw, 0, 0)';
      this._updateNav();
    };

    Carousel.prototype._countSlides = function () {
      return this._container.querySelectorAll('.slide').length;
    };

    Carousel.prototype._updateNav = function () {
      var html = '', count = this._countSlides();
      for (var i = 0; i < count; i++) {
        if (i > 0) html += '&nbsp;';
        html += '<a' +  (i == this._slide ? ' class="current"' : '') + ' data-slide="' + i + '" href="#">●</a>';
      }
      this._nav.innerHTML = html;
    }

    var carousels = Array.prototype.map.call(document.querySelectorAll('.carousel'), function (element) {
      var carousel = new Carousel(element);
      carousel.auto(5000);
      return carousel;
    });
})();

