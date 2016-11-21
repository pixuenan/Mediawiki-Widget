/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

<includeonly>
    <style type="text/css">
        #ExtensionModal * {
        font-family: 'Oswald', sans - serif;
        }
    </style>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
    <script type="text/javascript">
    var divid = "<!--{$divid}-->";
    var div_content = [];
    div_content.push('<div class="modal-dialog">');
    div_content.push('<div class="modal-content">');
    div_content.push('<div class="modal-header">');
    div_content.push('<button type="button" class="close" data-dismiss="modal" aria-label="Close">');
    div_content.push('<span>×</span>');
    div_content.push('</button>');
    div_content.push('<h4 class="modal-title"><span class="mw-headline" id="Modal_title"></span>Contribution from Chrome Extension</h4>');
    div_content.push('</div>');
    div_content.push('<div class="modal-body">');
    div_content.push('<h4>Step1: Add Chrome Extension to your browser</h4>');
    div_content.push('<p>You can donate facts by just browsing PDF with your Chrome Browser.</p>');
    div_content.push('<button type="button" class="btn btn-warning" id="install-button">Add to Chrome</button>');
    div_content.push('<br><br><hr>');
    div_content.push('<h4>Step 2: Install Host Program</h4>');
    div_content.push('<a class="btn btn-primary" href="http://factpub.org/public/factify_ChromeExtension/install_scripts_win/setup.bat" id="install-win" download="setup.bat">Windows</a>  Double click setup.bat after download.');
    div_content.push('<br><br>');
    div_content.push('<a class="btn btn-success" href="http://factpub.org/public/factify_ChromeExtension/install_scripts_mac_linux/setup" id="install-win" download="setup.sh">Mac/Linux</a>  Run <code>bash setup.sh</code> from terminal after download.');
    div_content.push('<br><br><hr>');
    div_content.push('<h4>Step 3: Try extracting facts from a sample paper</h4>');
    div_content.push('<a class="btn btn-primary" href="http://factpub.org/public/factify_ChromeExtension/sample_paper.pdf" id="sample-button">Sample PDF</a>');
    div_content.push('</div>');
    div_content.push('<div class="modal-footer"><button type="button" class="btn btn-default" data-dismiss="modal">Close</button>');
    div_content.push('</div>');

    div_content.push('</div>');
    div_content.push('</div>');

    var final_div_content = div_content.join('');
    document.getElementById(divid).innerHTML = final_div_content;

    document.head.innerHTML += '<link rel="chrome-webstore-item" href="https://chrome.google.com/webstore/detail/ohbgdjppihkipbmeickolladmlchknjg">';
    document.head.innerHTML += "<link href='http://fonts.googleapis.com/css?family=Oswald:400,300' rel='stylesheet'>";

    $("#install-button").click(function(){
        console.log('install button was clicked');
        chrome.webstore.install('https://chrome.google.com/webstore/detail/ohbgdjppihkipbmeickolladmlchknjg',
        function(){ alert("Sucess"); },
        function(detail){ alert("Failure:" + detail); }
    );
    });

    </script>
</includeonly>


