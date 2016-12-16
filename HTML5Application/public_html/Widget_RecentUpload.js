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
    <script src="https://d3js.org/d3.v4.js"></script>
    <script type="text/javascript">

    var divid = "<!--{$divid}-->";
    var today = new Date();
    var utcYearMonth = today.toJSON().slice(0,7);
    var preMonth = new Date(today.setMonth(today.getMonth() - 1));
    var utcYearPreMonth = preMonth.toJSON().slice(0,7);

	var logFile = "http://factpub.org/public/record/" + utcYearMonth + "-upload.log";
	var logFilePreMonth = "http://factpub.org/public/record/" + utcYearPreMonth + "-upload.log";

	function readLogFile (logFile) {
		d3.text(logFile,function(dataset){

			if (!dataset) {
				console.log('not existed: ' + logFile);
				readLogFile (logFilePreMonth);
			}
			else {
				var data = dataset.split("\n");
				data.reverse();
	
				var joinedJSONData = "{\"list\":[" + data.slice(1,data.length).join(",") + "]}";
				console.log(joinedJSONData);
				var parsedData = $.parseJSON(joinedJSONData);
				RecentUploadList(parsedData);	
//		console.log(parsedData);
			}
		});
	}
//	
	readLogFile (logFile);
	document.head.innerHTML += "<link href='http://fonts.googleapis.com/css?family=Oswald:400,300' rel='stylesheet'>";

    function parseDateAndTimevalue(timestamp){
        var t_posi = timestamp.indexOf('UTC');
        var date = timestamp.slice(0, t_posi);
        return date;
    }
    
    function pushLiString(list_string, upload){
        var username = upload.username;
        var pagetitle = upload.pagetitle;
        var date = parseDateAndTimevalue(upload.timestamp);
        var wikipage_link = "http://factpub.org/wiki/index.php/" + pagetitle.split(" ").join("_");
        var liststring = username + ' uploads the paper: ' + '<a href=' + wikipage_link + ' onclick="ga(\'send\', \'event\', \'link\', \'click\', \'RecentUpload\', 2, false);">' + pagetitle + '</a>' + ' at ' + date;
        list_string.push ("<li>" + liststring + "</li>");
    }
    
    function RecentUploadList (json){

        var list_string = ["<ul>"];
        var recent_upload_list = json.list;
        var index = 0;
        while (index < recent_upload_list.length && index < 5){
            var upload = recent_upload_list[index];
            pushLiString(list_string, upload);                       
            index++;
        }

        list_string.push("</ul>"); 

        document.getElementById(divid).innerHTML = list_string.join("");
    }


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

