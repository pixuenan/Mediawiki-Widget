/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

<includeonly>

<style type="text/css">

    .bg-inverse{color:#eceeef; background - color:#373a3c}
    .bg-faded{background - color:#f7f7f9}.bg-primary{color:#fff; background - color:#0275d8}a.bg-primary:focus,a.bg-primary:hover{background - color:#025aa5}
    .bg-success{color:#fff; background - color:#5cb85c}a.bg-success:focus,a.bg-success:hover{background - color:#449d44}
    .bg-info{color:#fff; background - color:#5bc0de}a.bg-info:focus,a.bg-info:hover{background - color:#31b0d5}
    .bg-warning{color:#fff; background - color:#f0ad4e}a.bg-warning:focus,a.bg-warning:hover{background - color:#ec971f}
    .bg-danger{color:#fff; background - color:#d9534f}a.bg-danger:focus,a.bg-danger:hover{background - color:#c9302c}            

    .table{width:100 % ; max - width:100 % }
    .table td,.table th{padding:.75rem; line - height:1.5; vertical - align:top; border - top:1px solid #eceeef; font - size: 16px; }
    .table thead th{vertical - align:bottom; border - bottom:2px solid #eceeef}
    .table tbody+tbody{border - top:2px solid #eceeef}.table .table{background - color:#fff}
    .table-sm td,.table-sm th{padding:.3rem}
    .table-bordered,.table-bordered td,.table-bordered th{border:1px solid #eceeef}
    .table-bordered thead td,.table-bordered thead th{border - bottom - width:2px}
    .table-striped tbody tr:nth-of-type(odd){background - color:#f9f9f9}
    .table-active,.table-active>td,.table-active>th,.table-hover tbody tr:hover{background - color:#f5f5f5}
    .table-hover .table-active:hover,.table-hover .table-active:hover>td,.table-hover .table-active:hover>th{background - color:#e8e8e8}
    .table-success,.table-success>td,.table-success>th{background - color:#dff0d8}
    .table-hover .table-success:hover,.table-hover .table-success:hover>td,.table-hover .table-success:hover>th{background - color:#d0e9c6}
    .table-info,.table-info>td,.table-info>th{background - color:#d9edf7}
    .table-hover .table-info:hover,.table-hover .table-info:hover>td,.table-hover .table-info:hover>th{background - color:#c4e3f3}
    .table-warning,.table-warning>td,.table-warning>th{background - color:#fcf8e3}
    .table-hover .table-warning:hover,.table-hover .table-warning:hover>td,.table-hover .table-warning:hover>th{background - color:#faf2cc}
    .table-danger,.table-danger>td,.table-danger>th{background - color:#f2dede}
    .table-hover .table-danger:hover,.table-hover .table-danger:hover>td,.table-hover .table-danger:hover>th{background - color:#ebcccc}
    .table-responsive{display:block; width:100 % ; overflow - x:auto}
    .collapsing,.dropdown-divider,.embed-responsive,.modal,.modal-open,.navbar-divider{overflow:hidden}.thead-inverse th{color:#fff; background - color:#373a3c}
    .thead-default th{color:#55595c; background - color:#eceeef}.table-inverse{color:#eceeef; background - color:#373a3c}.table-inverse.table-bordered{border:0}
    .table-inverse td,.table-inverse th,.table-inverse thead th
    {border - color:#55595c}  

    .dataTables_length {
        display: none;
    }

    #scoretable {
        width: 100 % ;
    }

    #maintable {
        width: 100 % ;
    }

    #scorelist {
        display: none;
    }
</style>

        <script src="https://code.jquery.com/jquery-1.12.3.js"></script>
        <script src="https://cdn.datatables.net/1.10.12/js/jquery.dataTables.min.js"></script>
        <script src="https://cdn.datatables.net/1.10.12/js/dataTables.bootstrap.min.js"></script>
        <link rel="stylesheet" href="http://factpub.org/public/scoreboard_css/dataTables/1.10.12/css/dataTables.bootstrap.min.css">
                
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha/js/bootstrap.min.js"></script>
        
        <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.min.js"></script>
        <link rel="stylesheet" href="http://factpub.org/public/scoreboard_css/jquery/ui/1.12.1/themes/base/jquery-ui.css">

<script type="text/javascript">

var tableid = "<!--{$divid}-->";
function getContriTitles(){
       var userPageJson = {};
       $("#scoreBoardList li").each(function(){
            var contentForUser = $(this).text();
            var infoList = contentForUser.split('|');
            var username = infoList[0];
            var pageTitle = infoList[1];
            var userList = Object.keys(userPageJson);
            if (userList.indexOf(username)>-1) {
                userPageJson[username].push(pageTitle);
            } else {
            userPageJson[username] = [pageTitle];
            }
       });
       return userPageJson;
   }
   
$('#'+tableid).addClass('table table-inverse example');
$('#'+tableid).append('<thead><tr><th>Username</th><th>Contribution number</th><th>Contributed pages</th></tr></thead><tbody>');   
        
setTimeout(function(){

        
        var userNum = 0;
        var contriJson = getContriTitles();
        console.log(contriJson);
        for (var user in contriJson) {
            var pageList = contriJson[user];
            var contriNum = pageList.length;
            var linkButton = '</td><td><button type="button" class="btn btn-default btn-sm opener" id="opener'+userNum+'">Page link</button></td></tr>';
            $('#'+tableid).append('<tr><td>'+user+'</td><td>'+contriNum+linkButton);
            
//            creat the pagelink table for the user
            var tableId = "example"+userNum;
            var tableHTML = '<table id="'+tableId+'" class="example table table-striped table-bordered" cellspacing="0" width="100%"></table>';
            $("body").append('<div id="dialog'+userNum+'" class="dialog">'+tableHTML+'</div>');
            $("#"+tableId).append('<thead><tr><th>Wikipage Title</th></tr></thead><tbody>');
            for (var i=0;i<contriNum;i++){
                var hrefLink = "http://factpub.org/wiki/index.php/" + pageList[i];
                $("#"+tableId).append('<tr><td><a target="_blank" href="'+hrefLink+'">'+pageList[i]+'</a></td></tr>');
            }
            $("#"+tableId).append('</tbody>');
            userNum ++;
        }
        
        
        $('#'+tableid).DataTable({
            "order":[[1,"desc"]]
        });
        
       $(function(){
            var rowNumberOfMainTable = $('#scoretable tr').length;
        
        $('#'+tableid+' tr:first').prepend("<td>#</td>");
        var colorClass = ["bg-primary","bg-success","bg-warning","bg-danger","bg-info"];
   
        for (i=1;i<rowNumberOfMainTable;i++){
            $('#'+tableid+' tr:eq('+i+')').prepend("<td>"+i+"</td>");
            if (i%2===1) {
                var color = colorClass[0];
                $('#'+tableid+' tr:eq('+i+')').addClass(color);
                colorClass.shift();
                colorClass.push(color);
            }
        }
        });

        $('.example').DataTable();
                        
        $( ".dialog" ).dialog({
            autoOpen: false,
            show: {
                effect: "blind",
                duration: 500
            },
            width: 1000
        });
        
        
        
        $(".opener").each(function(){
            $(this).on( "click", function() {
               var openerId = $(this).attr('id');
               var idNumber = openerId.slice(6,openerId.length);
               $( "#dialog"+idNumber ).dialog( "open" );
            });
        });

        $("#progress_bar").hide();
    },9001);

</script> 
</includeonly>
