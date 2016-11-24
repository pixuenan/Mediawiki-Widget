/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

<includeonly>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
<script src="http://factpub.org/wiki/resources/src/mediawiki.api/mediawiki.api.js"></script>
<script type="text/javascript">
$.ajax({
    type: "GET",
    url: "http://factpub.org/cgi_bin/test.txt",
    dataType: "text",
    success: function (data) {
        var json_obj = jQuery.parseJSON(data);
        var username = json_obj.checkAccount.username;
        var password = json_obj.checkAccount.password;
    }
});

function checkACLEditRight (username,data){
       
        var pageId = Object.keys(data.query.pages);
        var userCanEdit = false;
        if (data.query.pages[pageId].revisions) {
            var accessPermission = data.query.pages[pageId].revisions[0]["*"];
            console.log(accessPermission);
            var editString = "#access: assigned to = User:" + username + " | actions = edit";
            userCanEdit = (accessPermission.indexOf(editString) > -1);
        }        
        return userCanEdit;   
}

var api = new mw.Api();
api.login("ForACLCheck","passwordmeannothing");
api.get({
    action: 'query',
    prop: 'revisions',
    rvprop: 'content',
    format: 'json',
    titles: 'ACL:Page/SHANK1 Deletions in Males with Autism Spectrum Disorder. Sato,D',
}).done( function ( data ) {
    checkACLEditRight ('username',data)
});
</script>
</includeonly>