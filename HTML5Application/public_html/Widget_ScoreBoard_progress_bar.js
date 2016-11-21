/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

<includeonly>
    <style type="text/css">
    .progress.active .progress-bar {
        -webkit-transition: none !important;
        transition: none !important;
    }
    </style>

    <script type="text/javascript">
    var divid = "<!--{$divid}-->";
    var div_content = [];
    div_content.push('<div class="progress active">');
    div_content.push('<div class="progress-bar progress-bar-striped" role="progressbar" style="width:0%">Loading</div>');
    div_content.push('</div>');
    var final_div_content = div_content.join('');
    document.getElementById(divid).innerHTML = final_div_content;

    $(".progress-bar").animate({
        width: "100%"
    }, 9000);
    </script> 
</includeonly>
