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

var api = new mw.Api();
api.login("ForACLCheck","passwordmeannothing");
api.get( {
    action: 'query',
    meta: 'userinfo'
}).done( function ( data ) {
    console.log( data );
});
</script>
</includeonly>