/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

<includeonly>

<script type="text/javascript">

var divid = "<!--{$divid}-->";
document.getElementById(divid).innerHTML = "<ul id='scoreBoardList'></ul>";

function scoreBoard (item,nextStart) {        
// get list of users that has more than one contribution
       
    $.getJSON( "http://factpub.org/wiki/api.php?action=query&list=allusers&auprop=editcount&format=json&aulimit=500" + nextStart, function( data ) {
       
        var userList = data.query.allusers;
        for (i=0;i<userList.length;i++){
            if (userList[i].editcount){
                
                var username = userList[i].name;
                if (username !== "FactsSysop") {
                    while (username.indexOf(" ")>-1) {
                        username = username.replace(" ","_");
                    }
                    getPageTitles(username,'');
                }
            }
        }

        if (data['query-continue']) {
            nextStart = "&aufrom=" + data['query-continue']['allusers']['aufrom'];
            scoreBoard (item,nextStart);
        }
    });
}

function myGetJSON(pageTitle) {
    return $.getJSON( "http://factpub.org/wiki/api.php?action=query&prop=revisions&rvprop=content&format=json&titles=ACL:Page/" + pageTitle, {});
}
    
function getPageTitles(username,nextTimeStamp){
//for user that has contribution, get list of pagetitles
    $.getJSON( "http://factpub.org/wiki/api.php?action=query&list=usercontribs&uclimit=500&format=json&ucuser=" + username + nextTimeStamp, function( data ) {
        var pageTitleList = [];
        var contributionList = data.query.usercontribs;

        if (contributionList.length) {         
            for (var i=0;i<contributionList.length;i++){
                (function(i){
                    var pageTitle = contributionList[i].title;
                    var pageNameSpace = contributionList[i].ns;
                    var listContainTitle = (pageTitleList.indexOf(pageTitle) > -1);
                    if (!listContainTitle && pageNameSpace ===0) {
                        
                        pageTitleList.push(pageTitle);
                        myGetJSON(pageTitle).done(function(data){
                            var flag = checkACLEditRight (username,pageTitle,data);
                            if (flag){
                                document.getElementById('scoreBoardList').innerHTML += "<li>" + username + "|" + pageTitle + "</li>";                                
                            }
                        });          
                    }
                })(i);
            }
            if (data['query-continue']) {
                nextTimeStamp = "&ucstart=" + data['query-continue']['usercontribs']['uccontinue'];
                getPageTitles(username,nextTimeStamp);
            } 
        }
    });
}

function checkACLEditRight (username,data){
       
        var pageId = Object.keys(data.query.pages);
        var userCanEdit = false;
        if (data.query.pages[pageId].revisions) {
            var accessPermission = data.query.pages[pageId].revisions[0]["*"];
            var editString = "#access: assigned to = User:" + username + " | actions = edit";
            userCanEdit = (accessPermission.indexOf(editString) > -1);
        }        
        return userCanEdit;   
}

scoreBoard ([],""); 

</script> 
</includeonly>

