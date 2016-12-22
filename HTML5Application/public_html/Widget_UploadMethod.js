/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

<includeonly>
    <script type="text/javascript">

function javaUploaderTrack(){
     ga('send', 'event', 'button', 'click', 'JavaUploader', 20, false);
}

function creatJavaButton (name, href) {
    var color = "btn-warning";
    var node = document.createElement("LI"); 
    var a = document.createElement('A');
    var linkText = document.createTextNode(name);
    a.appendChild(linkText);
    a.className = "btn "+ color +" btn-md active";
    a.style.color = "white";
    a.href = href;
    a.onclick = javaUploaderTrack;
    node.appendChild(a);
    return node;
}

function creatExtensionButton (id, name) {
    var color = "btn-success";
    var node = document.createElement("LI"); 
    var a = document.createElement('A');
    var linkText = document.createTextNode(name);
    a.appendChild(linkText);
    a.className = "btn "+ color +" btn-md active";
    a.style.color = "white";
    a.id = id;
    node.appendChild(a);
    return node;
}

    var javaButton = creatJavaButton ("Upload via Java", "http://factpub.org/wiki/index.php/Factify_a_pdf_paper");
    var javaButton_collapse = creatJavaButton ("Upload via Java", "http://factpub.org/wiki/index.php/Factify_a_pdf_paper");
    var extensionButton = creatExtensionButton ("install-button", "   Upload via Chrome   ");
    var extensionButton_collapse = creatExtensionButton ("collapse-install-button", "   Upload via Chrome   ");
        
    var navbar = document.getElementById("navbar");
    var userButton = navbar.getElementsByTagName('ul')[2];
    userButton.insertBefore(javaButton, userButton.childNodes[0]);
    userButton.insertBefore(extensionButton, userButton.childNodes[0]);
    
    var navheader = document.getElementsByClassName("navbar-header")[0];
    var userButton_collaspe = navheader.getElementsByTagName('ul')[1];
    userButton_collaspe.insertBefore(javaButton_collapse, userButton_collaspe.childNodes[0]);
    userButton_collaspe.insertBefore(extensionButton_collapse, userButton_collaspe.childNodes[0]);

    document.head.innerHTML += '<link rel="chrome-webstore-item" href="https://chrome.google.com/webstore/detail/fglknmfclpjhnhncpiklllajkpelgeie">';

    $(document).ready(function(){
        $("#install-button, #collapse-install-button").click(function(){                                            
				
			      // Track the button
                              ga('send', 'event', 'button', 'click', 'ChromeExtension', 30, false);
			      
                              //console.log("the button was clicked");
                              var isChrome = !!window.chrome && !!window.chrome.webstore;
                              if(!isChrome){
                                alert("Please use Chrome Browser to install Chrome Extension.");
                              }else{
                
                                //console.log("Installation start...");
                                var url = "https://chrome.google.com/webstore/detail/fglknmfclpjhnhncpiklllajkpelgeie";
                                chrome.webstore.install(url, function(){console.log("success!")}, function(){console.log("failed to install Chrome Extension.")});
         
                              }
                
        });
    })


    </script>
</includeonly>


