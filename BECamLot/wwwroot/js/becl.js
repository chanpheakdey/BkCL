
function loadstandard() {
    var username = "chanpheakdey";
    $.ajax({
        //cache: false,
        async: false,
        type: "Get",
        //dataType: "Json",
        contentType: "application/json; charset=utf-8",
        url: "api/getReport/" + username,
        data: '',
        success: function (data) {
            console.log(data);
            var html = "";
            html += "<table class='tbl-report' style='font-size:x-small;'>";
            html += "<tr><td>Master</td>"
            html += "<td>User</td>"
            html += "<td>Bet</td>"
            html += "<td>Win</td>"
            html += "<td>Profit</td>"
            html += "<td>%</td>"
            html += "<td>SD</td>"
            html += "</tr>"

            for (var i = 0; i < data.length; i++) {
                var mastername = data[i].mastername;
                var createdby = data[i].createdBy;
                var betAmount = data[i].betAmount;
                var winAmount = data[i].winAmount;
                var profit = data[i].profit;
                var pp = (data[i].pp*100).toFixed(2);
                var sd = data[i].sd.toFixed(2);

               

                html += "<tr>";
                html += "<td>" + mastername + "</td>";
                html += "<td>" + createdby + "</td>";
                html += "<td class='td-right'>" + ReplaceNumberWithCommas(betAmount) + "</td>";
                html += "<td class='td-right'>" + ReplaceNumberWithCommas(winAmount) + "</td>";
                html += "<td class='td-right'>" + ReplaceNumberWithCommas(profit) + "</td>";
                html += "<td class='td-right'>" + ReplaceNumberWithCommas(pp) + "</td>";
                html += "<td>" + sd + "</td>";
                html += "</tr>";

            }
            html += "</table>";

            $("#div_report").html(html);
        },
        error: function (result) {
            console.log(result);
            //$('#loading').hide();
        }
    });


    $.ajax({
        //cache: false,
        async: false,
        type: "Get",
        //dataType: "Json",
        contentType: "application/json; charset=utf-8",
        url: "api/getReport2/" + username,
        data: '',
        success: function (data) {
            console.log(data);
            var html = "";
            html += "<table class='tbl-report' style='font-size:x-small;'>";
            html += "<tr><td>Master</td>"
            html += "<td>Bet</td>"
            html += "<td>Win</td>"
            html += "<td>Profit</td>"
            html += "<td>%</td>"
            html += "<td>SD</td>"
            html += "</tr>"

            for (var i = 0; i < data.length; i++) {
                var mastername = data[i].mastername;
                var betAmount = data[i].betAmount;
                var winAmount = data[i].winAmount;
                var profit = data[i].profit;
                var pp = (data[i].pp * 100).toFixed(2);
                var sd = data[i].sd.toFixed(2);



                html += "<tr>";
                html += "<td>" + mastername + "</td>";
                html += "<td class='td-right'>" + ReplaceNumberWithCommas(betAmount) + "</td>";
                html += "<td class='td-right'>" + ReplaceNumberWithCommas(winAmount) + "</td>";
                html += "<td class='td-right'>" + ReplaceNumberWithCommas(profit) + "</td>";
                html += "<td class='td-right'>" + ReplaceNumberWithCommas(pp) + "</td>";
                html += "<td>" + sd + "</td>";
                html += "</tr>";

            }
            html += "</table>";

            $("#div_report2").html(html);
        },
        error: function (result) {
            console.log(result);
            //$('#loading').hide();
        }
    });

    $.ajax({
        //cache: false,
        async: false,
        type: "Get",
        //dataType: "Json",
        contentType: "application/json; charset=utf-8",
        url: "api/getReport3/" + username,
        data: '',
        success: function (data) {
            console.log(data);
            var html = "";
            html += "<table class='tbl-report' style='font-size:x-small;'>";
            html += "<tr>"
            html += "<td>Bet</td>"
            html += "<td>Win</td>"
            html += "<td>Profit</td>"
            html += "<td>%</td>"
            html += "<td>SD</td>"
            html += "</tr>"

            for (var i = 0; i < data.length; i++) {
                var mastername = data[i].mastername;
                var betAmount = data[i].betAmount;
                var winAmount = data[i].winAmount;
                var profit = data[i].profit;
                var pp = (data[i].pp * 100).toFixed(2);
                var sd = data[i].sd.toFixed(2);



                html += "<tr>";
                html += "<td class='td-right'>" + ReplaceNumberWithCommas(betAmount) + "</td>";
                html += "<td class='td-right'>" + ReplaceNumberWithCommas(winAmount) + "</td>";
                html += "<td class='td-right'>" + ReplaceNumberWithCommas(profit) + "</td>";
                html += "<td class='td-right'>" + ReplaceNumberWithCommas(pp) + "</td>";
                html += "<td>" + sd + "</td>";
                html += "</tr>";

            }
            html += "</table>";

            $("#div_report3").html(html);
        },
        error: function (result) {
            console.log(result);
            //$('#loading').hide();
        }
    });

    $.ajax({
        //cache: false,
        async: false,
        type: "Get",
        //dataType: "Json",
        contentType: "application/json; charset=utf-8",
        url: "api/getReport4/" + username,
        data: '',
        success: function (data) {
            console.log(data);
            var html = "";
            html += "<table class='tbl-report' style='font-size:x-small;'>";
            html += "<tr>"
            html += "<td>ModA</td>"
            html += "<td>ModTotal</td>"
            html += "<td>GameID</td>"
            html += "<td>TSpent</td>"
            html += "<td>TRemaining</td>"
            html += "<td>BetEnd</td>"
            html += "<td>Result</td>"
            html += "<td>ModTotalAll</td>"
            html += "</tr>"

            for (var i = 0; i < data.length; i++) {
                var modA = data[i].modA;
                var modTotal = data[i].modTotal;
                var gameID = data[i].gameID;
                var timeSpent = data[i].timeSpent;
                var timeRemaining = data[i].timeRemaining;
                var bettingEnd = data[i].bettingEnd;
                var resultReleased = data[i].resultReleased;
                var modTotalAll = data[i].modTotalAll;


                html += "<tr>";
                html += "<td class='td-right'>" + ReplaceNumberWithCommas(modA) + "</td>";
                html += "<td class='td-right'>" + ReplaceNumberWithCommas(modTotal) + "</td>";
                html += "<td>" + gameID + "</td>";
                html += "<td>" + timeSpent + "</td>";
                html += "<td>" + timeRemaining + "</td>";
                if (bettingEnd == true) {
                    html += "<td>Yes</td>";
                } else {
                    html += "<td></td>";
                }

                if (resultReleased == true) {
                    html += "<td>Yes</td>";
                } else {
                    html += "<td></td>";
                }


                html += "<td class='td-right'>" + ReplaceNumberWithCommas(modTotalAll) + "</td>";
                html += "</tr>";

            }
            html += "</table>";

            $("#div_report4").html(html);
        },
        error: function (result) {
            console.log(result);
            //$('#loading').hide();
        }
    });

}

function ReplaceNumberWithCommas(yourNumber) {
    //Seperates the components of the number
    var n = yourNumber.toString().split(".");
    //Comma-fies the first part
    n[0] = n[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    //Combines the two sections
    return n.join(".");
}


