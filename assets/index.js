(function() {
   'use strict';
    var bot, input, url, message, email, name, banner, year;
    $(function() {
        $('.view-menu').on('click', function(){
          $(this).siblings('.nav-menu').toggleClass('menu-open');
        });
        $('.bot').on('click hover', function(){
          bot = $(this).children('.fa-2x');
          $('.widget').toggleClass('open');
          bot.toggleClass('fa-comments').toggleClass('fa-times-circle');
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
    });

    year = new Date();
    $('.thisYear').append(year.getFullYear());
})();

var Bubbles = (function () {
    function Bubbles() {
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.particles = [];
      	this.counter = 0;
    } 
    Bubbles.prototype.init = function () {
        this.createElement();
        this.loop();
    };
    Bubbles.prototype.createElement = function () {
        var scale = 1;
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.canvas.style.background = 'transparent';
        this.canvas.style.width = '100%';
        this.ctx.transform(scale, 0, 0, -scale, this.canvas.width / 2, this.canvas.height / 2);
        var container = document.getElementById('bubbles');
        if(container) {
            container.appendChild(this.canvas);
            for(var i = 0; i < 400; i++) {
                this.createParticle();
            }
        }
    };
    Bubbles.prototype.createParticle = function () {
        this.particles.push({
            color: Math.random() > 0.5 ? "rgba(255, 255, 255, 0.9)" : "rgba(0, 255,0, 0.4)",
            radius: Math.random() * 16,
            x: (Math.random() - 0.5) * 25,
            y: - this.canvas.height / 2,
            xVel: (Math.random() - 0.5) * 2,
            yVel: (Math.random() + 0.5)
        });
    };
    Bubbles.prototype.disappearParticle = function (p) {
        if (p.radius < 0.5) {
            this.resetParticle(p);
        }
        p.radius *= 0.994;
    };
    Bubbles.prototype.resetParticle = function (p) {
        p.radius = Math.random() * 16;
        p.x = (Math.random() - 0.5) * 25;
        p.y = - this.canvas.height / 2;
    };
    Bubbles.prototype.moveParticle = function (p) {
        p.x += p.xVel;
        p.y += p.yVel;
    };
    Bubbles.prototype.draw = function (p) {
        this.ctx.beginPath();
        this.ctx.fillStyle = p.color;
        this.ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      	this.ctx.fill();
    };
    Bubbles.prototype.loop = function () {
        var _this = this;
      	if (this.counter < this.particles.length) {
      			this.counter ++;
        }
        this.ctx.clearRect(-this.canvas.width / 2, -this.canvas.height / 2, this.canvas.width, this.canvas.height);
        for (var i = 0; i < this.counter; i++) {
            this.moveParticle(this.particles[i]);
            this.disappearParticle(this.particles[i]);
            this.draw(this.particles[i]);
        }
        requestAnimationFrame(function () { return _this.loop(); });
    };
    return Bubbles;
})();
window.onload = function () {
		var particles = new Bubbles();
		particles.init();
};


