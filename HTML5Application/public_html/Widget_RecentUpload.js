/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


<includeonly>
    <style type="text/css">

        ui,li{
        margin:0;
        padding:0;
        word-wrap: break-word;
        }

        #scrollDiv{
        font: 17px bold;
        font-family:"Times New Roman", Times, serif;
        background-color: #eee;
        top:240px;
        width: 100 % ;
        height: 110px;
        line-height: 25px;
        overflow: hidden;
        -moz-border-radius: 8px;
        -webkit-border-radius: 8px;
        border-radius: 8px;
        -moz-box-shadow: 0px 0px 2px #000000;
        -webkit-box-shadow: 0px 0px 2px #000000;
        box-shadow: 0px 0px 2px #000000;
        margin: 5px;
        padding: 5px;
        }

        #scrollDiv li{

//height: 25px; 
        padding-left: 10px;
        font-family: inherit;
        font-weight: 300;
        color: inherit; } 
    </style>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
    <script type="text/javascript">

    var divid = "<!--{$divid}-->";

    function parseDateAndTimevalue(timestamp){
        var t_posi = timestamp.indexOf('T');
        var date = timestamp.slice(0, t_posi);
        var time = timestamp.slice(t_posi + 1, timestamp.length - 1);
        var timevalue = 1 * parseInt(time.slice(0, 2)) + 1 / 60 * parseInt(time.slice(3, 5)) + 1 / 3600 * parseInt(time.slice(6, 8));
        return [date, timevalue];
    }
    
    function pushLiString(list_string, value, user, date){
        var wikipage_link = "http://factpub.org/wiki/index.php/" + value.title.split(" ").join("_");
        list_string.push ("<li>" + user + " uploads the paper: " + "<a href=" + wikipage_link + ">" + value.title + "</a>" + " at " + date + "</li>");
    }
    
    function checkFactsSysopUpload(timevalue1, date1, value2){
        //Check if there is a "new" upload from sysop with time difference less than 10s (1/360 h)
        var upload = false;
        var date2 = parseDateAndTimevalue(value2.timestamp)[0];
        var timevalue2 = parseDateAndTimevalue(value2.timestamp)[1];
        if (Math.abs(timevalue2 - timevalue1) <= 1 / 360
            && value2.user === "FactsSysop" 
            && date2 === date1
            && value2.type === "new"){
            upload = true;
        }
        return upload;
    }

    $.getJSON("http://factpub.org/wiki/api.php?action=query&list=recentchanges&rcprop=title|user|timestamp&rctype=new|edit&rclimit=100&format=json", function (json){

        var list_string = ["<ul>"];
        var recent_change_number = 0;
        var recent_change_object = json.query.recentchanges;
        var index = 0;
        var keys_array = Object.keys(recent_change_object);
        while (index < keys_array.length && recent_change_number < 5){
            var key = keys_array[index];
            var value = recent_change_object[key];
                       
            if (value.ns === 0) {
                var user = value.user;
                var date = parseDateAndTimevalue(value.timestamp)[0];
                var timevalue = parseDateAndTimevalue(value.timestamp)[1];
                
                //detect upload from register user
                if (value.type === "edit" && value.user !== "FactsSysop"){
                
                    //check the previous change to see if it is a modifiction to the correspond ACL page
                    var find_register_upload = false;  
                    var key_s = keys_array[index+1];
                    var element = recent_change_object[key_s];
                    if (checkFactsSysopUpload(timevalue, date, element)                       
                        && element.title === 'ACL:Page/' + value.title){                            
                        find_register_upload = true;                     
                    }
                    
                    if (find_register_upload){

                        var next_key = keys_array[index+2];
                        var next_value = recent_change_object[next_key];
                    
                        // if this is the first time upload from the registered user, detect the upload from FactSysop for this upload
                        // to avoid adding the sysop upload as a recent upload from FactsSysop
                        if (checkFactsSysopUpload(timevalue, date, next_value)
                            && next_value.title === value.title) {
                            index = index + 2;
                        } else {
                            index = index + 1;
                        }
                        
                        pushLiString(list_string, value, user, date);                       
                        recent_change_number ++;
                    }
                }

                //upload from sysop   
                else if (value.type === "new" && user === "FactsSysop") {

                    user = "Anonymous";
                    pushLiString(list_string, value, user, date);                    
                    recent_change_number ++;
                }
            }
            index++;
        }

        list_string.push("</ul>"); 

        document.getElementById(divid).innerHTML = list_string.join("");
    })

    document.head.innerHTML += "<link href='http://fonts.googleapis.com/css?family=Oswald:400,300' rel='stylesheet'>";

    function AutoScroll(obj) {

        $(obj).find("ul:first").animate({
        marginTop:"-25px"},1000,function(){
        $(this).css({marginTop:"0px"}).find("li:first").appendTo(this);
        }); 
    }

    function HiddenButtons(){
        var count = $("div.btn-group.btn-block").length;
        //comment out this line to edit the main page
        $("div.btn-group.btn-block:nth-child(1)").hide();
        if (count === 3) {
            $("div.btn-group.btn-block:nth-child(2)").hide();
            $("div.btn-group.btn-block:nth-child(3)").hide();
        }
    }

    $(document).ready(function(){ 
        setInterval('AutoScroll("#scrollDiv")', 5000);
        HiddenButtons();
    })
    </script> 
</includeonly>

