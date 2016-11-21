/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

<includeonly>
<style type="text/css">
#slider-nav {
  text-align: center;
  margin-top: 10px;
}

.arrow-prev {
  margin-right: 45px;
  display: inline-block;
  vertical-align: top;
  margin-top: 12px;
}

.arrow-next {
  margin-left: 45px;
  display: inline-block;
  vertical-align: top;
  margin-top: 12px;
}

.slider-dots {
  list-style: none;
  display: inline-block;
  padding-left: 0;
  margin-bottom: 0;
}

.slider-dots li {
  color: #bbbcbc;
  display: inline;
  font-size: 30px;
  margin-right: 5px;
}

.slider-dots li.active-dot {
  color: #363636;
}

</style>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
<script type="text/javascript">
var divid = "<!--{$divid}-->";
var div_content = ['<a class="arrow-prev"><img src="http://factpub.org/wiki/images/arrow-prev.png"></a>'];
div_content.push('<ul class="slider-dots">'); 
div_content.push('<li class="dot active-dot">&bull;</li>'); 
div_content.push('<li class="dot">&bull;</li>'); 
div_content.push('<li class="dot">&bull;</li>'); 
div_content.push('<li class="dot">&bull;</li>'); 
div_content.push('</ul>'); 
div_content.push('<a class="arrow-next"><img src="http://factpub.org/wiki/images/arrow-next.png"></a>'); 

var final_div_content = div_content.join('');
document.getElementById(divid).innerHTML = final_div_content;

var slider_func = function() {
    $('.dropdown-toggle').click(function() {
    $('.dropdown-menu').toggle();
    });

  
    $('.arrow-next').click(function() {
        var currentSlide = $('.active-slide');
        var nextSlide = currentSlide.next();

        var currentDot = $('.active-dot');
        var nextDot = currentDot.next();

        if(nextSlide.length === 0) {
            nextSlide = $('.slide').first();
            nextDot = $('.dot').first();
        }
    
    currentSlide.fadeOut(600).removeClass('active-slide');
    nextSlide.fadeIn(600).addClass('active-slide');

    currentDot.removeClass('active-dot');
    nextDot.addClass('active-dot');
    });


$('.arrow-prev').click(function() {
    var currentSlide = $('.active-slide');
    var prevSlide = currentSlide.prev();

    var currentDot = $('.active-dot');
    var prevDot = currentDot.prev();

    if(prevSlide.length === 0) {
        prevSlide = $('.slide').last();
        prevDot = $('.dot').last();
    }
    
    currentSlide.fadeOut(600).removeClass('active-slide');
    prevSlide.fadeIn(600).addClass('active-slide');

    currentDot.removeClass('active-dot');
    prevDot.addClass('active-dot');
    });

}

$(document).ready(slider_func);

</script>
</includeonly>


