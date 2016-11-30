/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

<includeonly>
<style type="text/css">
#slider{
  position: relative;
  width: 100%;
  height: 470px;
  border-bottom: 1px solid #ddd;
}

.slide_container {
  width: 960px;
}

.slide {
  background: transparent url('http://factpub.org/wiki/images/feature-gradient-transparent.png') center center no-repeat;
  background-size: cover;
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.active-slide {
    display: block;
}

/* Slide feature */

.slide-feature-autism {
  text-align: center;
  background-image: url("http://factpub.org/wiki/images/autism.jpg");
  height: 470px;
}

.slide-feature-ecstasy {
  text-align: center;
  background-image: url("http://factpub.org/wiki/images/ecstacy.jpg");
  height: 470px;
}

.slide-feature-depression {
  text-align: center;
  background-image: url("http://factpub.org/wiki/images/depression.jpg");
  height: 470px;
}

.slide-feature-heroin {
  text-align: center;
  background-image: url("http://factpub.org/wiki/images/heroin.jpg");
  height: 470px;
}

.slide-feature a {
  margin-top: 200px;
  display: block;
  color: #FFFFFF;
  
  font-family: Oswald;
  font-weight: 400;
  
  font-size: 60px;
}

</style>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
<script type="text/javascript">
var divid = "<!--{$divid}-->";
var div_content = ['<div class="slide active-slide slide-feature slide-feature-autism">'];
div_content.push('<div class="slide_container">');
div_content.push('<div class="row col-md-10 col-md-offset-4">');
div_content.push('<div class="col-xs-12">');
div_content.push('<a href="http://factpub.org/wiki/index.php?search=autism" onclick="ga( \'send\', \'event\', \'link\', \'click\', \'slider\', 5, false);">Facts about Autism</a>');
div_content.push('</div>');
div_content.push('</div>');
div_content.push('</div>');
div_content.push('</div>');      


div_content.push('<div class="slide slide-feature slide-feature-ecstasy">');
div_content.push('<div class="slide_container">');
div_content.push('<div class="row col-md-10 col-md-offset-4">');
div_content.push('<div class="col-xs-12">');
div_content.push('<a href="http://factpub.org/wiki/index.php?search=ecstasy" onclick="ga( \'send\', \'event\', \'link\', \'click\', \'slider\', 5, false);">Facts about Ecstacy</a>');
div_content.push('</div>');
div_content.push('</div>');
div_content.push('</div>');   
div_content.push('</div>'); 

div_content.push('<div class="slide slide-feature slide-feature-depression">');
div_content.push('<div class="slide_container">');
div_content.push('<div class="row col-md-10 col-md-offset-4">');
div_content.push('<div class="col-xs-12">');
div_content.push('<a href="http://factpub.org/wiki/index.php?search=depression" onclick="ga( \'send\', \'event\', \'link\', \'click\', \'slider\', 5, false);">Facts about Depression</a>');
div_content.push('</div>');
div_content.push('</div>');
div_content.push('</div>');      
div_content.push('</div>');

div_content.push('<div class="slide slide-feature slide-feature-heroin">');
div_content.push('<div class="slide_container">');
div_content.push('<div class="row col-md-10 col-md-offset-4">');
div_content.push('<div class="col-xs-12">');
div_content.push('<a href="http://factpub.org/wiki/index.php?search=heroin" onclick="ga( \'send\', \'event\', \'link\', \'click\', \'slider\', 5, false);">Facts about Heroin</a>');
div_content.push('</div>');
div_content.push('</div>');
div_content.push('</div>');   
div_content.push('</div>'); 

var final_div_content = div_content.join('');
document.getElementById(divid).innerHTML = final_div_content;
document.head.innerHTML += "<link href='http://fonts.googleapis.com/css?family=Oswald:400,300' rel='stylesheet'>";

</script>
</includeonly>

