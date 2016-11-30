/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

// Let Google Analytics follow every page
 (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', '', 'auto');
  ga('send', 'pageview');

// Add the scoreboard button to every page

function scoreboardTrack(){
     ga('send', 'event', 'scoreboard', 'click', 'ranking', 10, false);
}

function creatLinkButton (name, href) {
    var color = "btn-info";
    var node = document.createElement("LI"); 
    var a = document.createElement('A');
    var linkText = document.createTextNode(name);
    a.appendChild(linkText);
    a.className = "btn "+ color +" btn-md active";
    a.style.color = "white";
    a.href = href;
    a.onclick = scoreboardTrack;
    node.appendChild(a);
    return node;
}

var linkButton = creatLinkButton ("Scoreboard", "http://factpub.org/wiki/index.php/Scoreboard");
var linkButton_collapse = creatLinkButton ("Scoreboard", "http://factpub.org/wiki/index.php/Scoreboard");

var navbar = document.getElementById("navbar");
var userButton = navbar.getElementsByTagName('ul')[2];
userButton.insertBefore(linkButton, userButton.childNodes[0]);
