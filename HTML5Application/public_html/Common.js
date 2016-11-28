/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

// Highlight the score board link in the navigation bar
function creatLinkButton (name, href) {
    var color = "btn-info";
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

var linkButton = creatLinkButton ("Score Board", "http://factpub.org/wiki/index.php/Score_Board");
var linkButton_collapse = creatLinkButton ("Score Board", "http://factpub.org/wiki/index.php/Score_Board");

var navbar = document.getElementById("navbar");
var userButton = navbar.getElementsByTagName('ul')[2];
userButton.insertBefore(linkButton, userButton.childNodes[0]);

var navheader = document.getElementsByClassName("navbar-header")[0];
var userButton_collaspe = navheader.getElementsByTagName('ul')[1];
userButton_collaspe.insertBefore(linkButton_collapse, userButton_collaspe.childNodes[0]);

