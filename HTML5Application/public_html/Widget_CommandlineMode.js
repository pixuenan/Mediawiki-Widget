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
div_content.push('<div class="row">');
div_content.push('<div class="col-md-12">');
div_content.push('<div class="well">');
div_content.push('<h2>Commandline mode</h2>');
div_content.push('<p>You can also use the program from your console by specifying pdf files for arguments.</p><br>');
div_content.push('<p><bold>*If there is no argument given, it launches in GUI mode.&nbsp;</bold></p>');
div_content.push('<pre>');
div_content.push('		usage: java -jar factpub_uploader.jar -f <file> [-p <password>][-u<username>]<br>');
div_content.push('		      -f,--file <file> academic papers (pdfs): -f paper1.pdf -f paper2.pdf ... <br>');
div_content.push('		      -u,--user <username> factpub id (requires <password>)<br>');
div_content.push('		      -p,--password <password> password (requires <username>)');
div_content.push('</pre>');
div_content.push('</div>');
div_content.push('</div>');
div_content.push('</div>');

var final_div_content = div_content.join('');
document.getElementById(divid).innerHTML = final_div_content;

</script>
</includeonly>

