/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

<includeonly>
    <script type="text/javascript">
    
function creatModalButton (id, name) {
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

function creatLinkButton (name, href) {
    var color = "btn-warning";
    var node = document.createElement("LI"); 
    var a = document.createElement('A');
    var linkText = document.createTextNode(name);
    a.appendChild(linkText);
    a.className = "btn "+ color +" btn-md active";
    a.style.color = "white";
    a.href = href;
    node.appendChild(a);
    return node;
}


    var modalButton = creatModalButton ("n-Launch-modal", "   Upload via Chrome   ");
    var modalButton_collapse = creatModalButton ("collapse-n-Launch-modal", "   Upload via Chrome   ");
    var linkButton = creatLinkButton ("Upload via Java", "http://factpub.org/wiki/index.php/Factify_a_pdf_paper");
    var linkButton_collapse = creatLinkButton ("Upload via Java", "http://factpub.org/wiki/index.php/Factify_a_pdf_paper");

    var navbar = document.getElementById("navbar");
    var userButton = navbar.getElementsByTagName('ul')[2];
    userButton.insertBefore(modalButton, userButton.childNodes[0]);
    userButton.insertBefore(linkButton, userButton.childNodes[0]);

    var navheader = document.getElementsByClassName("navbar-header")[0];
    var userButton_collaspe = navheader.getElementsByTagName('ul')[1];
    userButton_collaspe.insertBefore(modalButton_collapse, userButton_collaspe.childNodes[0]);
    userButton_collaspe.insertBefore(linkButton_collapse, userButton_collaspe.childNodes[0]);

    $(document).ready(function(){
        $("#n-Launch-modal").attr('data-toggle', 'modal');
        $("#n-Launch-modal").attr('data-target', '#ExtensionModal');
        $("#collapse-n-Launch-modal").attr('data-toggle', 'modal');
        $("#collapse-n-Launch-modal").attr('data-target', '#ExtensionModal');
    })

    </script>
</includeonly>


