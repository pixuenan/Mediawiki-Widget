/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

<includeonly>
    <style type="text/css">

    #factify{
        padding-top:10px;
    }
    </style>

    <script type="text/javascript">
    var div_content = [];

    div_content.push('<br>');
    div_content.push('<a class="btn btn-success btn-lg" href="http://factpub.org/wiki/index.php/Factify_a_pdf_paper" id="factify" >Make your contribution!</a>');

    var final_div_content = div_content.join('');
    var jumbtron = document.getElementsByClassName("jumbotron")[0];
    jumbtron.innerHTML += final_div_content;

    </script>
</includeonly>


