/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

// Highlight the score board link in the navigation bar
function highlightLink (href) {
    var els = document.querySelectorAll("a[href='"+ href +"']")[0];
    els.style.backgroundColor = "#337ab6";
    els.style.color = "white";
}

$(document).ready(function(){
    highlightLink ("http://factpub.org/wiki/index.php/Score_Board");
    })

