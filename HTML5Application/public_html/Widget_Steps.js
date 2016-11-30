/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

<includeonly>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
<script type="text/javascript">
var divid = "<!--{$divid}-->";
var div_content = [''];
div_content.push('<div class="row row-eq-height">');
div_content.push('<div class="col-md-4">');
div_content.push('<div class="well">');
div_content.push('<h2>Step 1: Download the uploader.</h2>');
div_content.push('<p><br><br></p>');
div_content.push('<p>Click the download button to start contributing papers.</p>');
div_content.push('<p><a href="https://java.com/en/download/">Java version 8 is required.</a></p>');
div_content.push('<div class="container">');
div_content.push('<div class="row">');
div_content.push('<div class="col-md-2 text-center">');
div_content.push('<a class="btn btn-success btn-lg" onclick="ga( \'send\', \'event\', \'button\', \'download\', \'Java\', 30, false);" href="http://factpub.org/public/factpub_uploader.jar">Download</a>');
div_content.push('</div>');
div_content.push('</div>');
div_content.push('</div>');
div_content.push('<br>');
div_content.push('<p>Click on the app after downloading.</p>');
div_content.push('<p>Mac users please press ');
div_content.push('<span style="background-color: #FFFFE0">&lt;Control&gt;-&lt;Click&gt;</span> to start the application.</p>');
div_content.push('<p><br><br></p>');
div_content.push('</div>');
div_content.push('</div>');

div_content.push('<div class="col-md-4">');
div_content.push('<div class="well">');
div_content.push('<h2>Step 2: Drag &amp; drop your scientific paper.</h2>');
div_content.push('<p><br></p>');
div_content.push('<img src="http://factpub.org/gif/step2.gif" class="img-responsive">');
div_content.push('</div>');
div_content.push('</div>');

div_content.push('<div class="col-md-4">');
div_content.push('<div class="well">');
div_content.push('<h2>Step 3: Check out your uploaded facts.</h2>');
div_content.push('<p>Click on the status of your uploaded facts to go to the page.</p>');
div_content.push('<img src="http://factpub.org/gif/step3.gif" class="img-responsive" href="https://github.com/sunsagong/factpub_uploader">');
div_content.push('</div>');
div_content.push('</div>');
div_content.push('</div>');

var final_div_content = div_content.join('');
document.getElementById(divid).innerHTML = final_div_content;

</script>
</includeonly>

