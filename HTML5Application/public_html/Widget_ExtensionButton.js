/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

<includeonly>
    <script type="text/javascript">

    var divid = "<!--{$divid}-->";

    var node = document.createElement("LI"); 
    var node_collapse = document.createElement("LI"); 

    var a = document.createElement('A');
    var linkText = document.createTextNode("   Add Factify to Chrome   ");
    a.appendChild(linkText);
    a.className = "btn btn-success btn-md active";
    a.style.color = "white";
    a.id = "n-Launch-modal";
    node.appendChild(a);
    console.log(node);

    var a_collapse = document.createElement('A');
    var linkText_collapse = document.createTextNode("   Add Factify to Chrome   ");
    a_collapse.appendChild(linkText_collapse);
    a_collapse.className = "btn btn-success btn-md active";
    a_collapse.style.color = "white";
    a_collapse.id = "collapse-Launch-modal";
    node_collapse.appendChild(a_collapse);
    console.log(node_collapse);

    var navbar = document.getElementById(divid);
    var userButton = navbar.getElementsByTagName('ul')[2];
    userButton.insertBefore(node, userButton.childNodes[0]);

    var navheader = document.getElementsByClassName("navbar-header")[0];
    var userButton_collaspe = navheader.getElementsByTagName('ul')[1];
    userButton_collaspe.insertBefore(node_collapse, userButton_collaspe.childNodes[0]);

    $(document).ready(function(){
        $("#n-Launch-modal").attr('data-toggle', 'modal');
        $("#n-Launch-modal").attr('data-target', '#ExtensionModal');
        $("#collapse-Launch-modal").attr('data-toggle', 'modal');
        $("#collapse-Launch-modal").attr('data-target', '#ExtensionModal');
    })

    </script>
</includeonly>


