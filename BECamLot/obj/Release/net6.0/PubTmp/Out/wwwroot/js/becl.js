$(document).ready(function () {
    checktokendetail();
    loadmaster();
    var selectamount = $("#selectAmount");
    
    addJakepotAmout(selectamount);
});


function getUrlVars() {
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for (var i = 0; i < hashes.length; i++) {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}


function checktokendetail() {
    var token = getUrlVars()["token"];
    console.log("token:" + token);
    if (token != "" && token != undefined) {
        $.ajax({
            //cache: false,
            async: false,
            type: "POST",
            //dataType: "Json",
            contentType: "application/json; charset=utf-8",
            url: "api/CheckTokenDetail",
            data: '{"TokenID":"' + token + '"}',
            success: function (data) {
                console.log(data);
                if (data.expired == true) {
                    $("#div_be").hide();
                    //window.location = "login?token=";
                } else {
                    $("#div_be").show();
                }
            },
            error: function (result) {
                console.log(result);
                //$('#loading').hide();
            }
        });
    } else {
        $("#div_be").hide();
    }


}


function setjakepot() {
    var member = $("#selectMember").val();
    var amount = $("#selectAmount").val();
    $.ajax({
        //cache: false,
        async: false,
        type: "POST",
        //dataType: "Json",
        contentType: "application/json; charset=utf-8",
        url: "api/Setjakepot",
        data: '{"Username":"' + member + '","Amount":' + amount + '}',
        success: function (data) {

            if (data == "success") {
                $("#lblinfo").html("Updated");
            } else {
                $("#lblinfo").html("Error");
            }
            
        },
        error: function (result) {
            console.log(result);
            //$('#loading').hide();
        }
    });

}

function removejakepot() {
 
    $.ajax({
        //cache: false,
        async: false,
        type: "POST",
        //dataType: "Json",
        contentType: "application/json; charset=utf-8",
        url: "api/removejakepot",
        data: '{"Username":"","Amount":0}',
        success: function (data) {

            if (data == "success") {
                $("#lblinfo").html("Updated");
            } else {
                $("#lblinfo").html("Error");
            }

        },
        error: function (result) {
            console.log(result);
            //$('#loading').hide();
        }
    });

}


function setblockwin() {
    var member = $("#selectMember").val();
    var mastername = $("#selectMaster").val();
    $.ajax({
        //cache: false,
        async: false,
        type: "POST",
        //dataType: "Json",
        contentType: "application/json; charset=utf-8",
        url: "api/setblockwin",
        data: '{"ExMastername":"' + mastername + '","ExMember":"' + member + '"}',
        success: function (data) {

            if (data == "success") {
                $("#lblinfo").html("Updated");
            } else {
                $("#lblinfo").html("Error");
            }

        },
        error: function (result) {
            console.log(result);
            //$('#loading').hide();
        }
    });

}
function addJakepotAmout(selectbox) {

    selectbox.empty();
    var length = selectbox.length;
    var newindex = length;

    selectbox.append($('<option>', {
        value: 0,
        text: 'Select Amount *'
    }));
    //selectbox.options[newindex].style.color = "red";

    for (var i = 1; i < 5; i++) {
        selectbox.append($('<option>', {
            value: i*90*1000,
            text: i * 90 * 1000
        }));
    }
}

function addOptions(selectbox, data) {
    console.log(data.length);
    selectbox.empty();
    var length = selectbox.length;
    var newindex = length;

    selectbox.empty().append($('<option>', {
        value: "",
        text: 'Select Member *'
    }));
    //selectbox.options[newindex].style.color = "red";

    for (var i = 0; i < data.length; i++) {
        var member = data[i];
        newindex = selectbox.length;
        //selectbox.options[newindex] = new Option("Program: " + member, member);
        selectbox.append($('<option>', {
            value: member,
            text: member
        }));
    }
}
function selectmaster(e) {
    var master = $(e).val();
    $.ajax({
        //cache: false,
        async: false,
        type: "Get",
        //dataType: "Json",
        contentType: "application/json; charset=utf-8",
        url: "api/getmember/" + master,
        data: '',
        success: function (data) {
            var selectmember = $("#selectMember")
            addOptions(selectmember, data);
        },
        error: function (result) {
            console.log(result);
            //$('#loading').hide();
        }
    });
}

function loadmaster() {
    console.log("load master");
    $.ajax({
        //cache: false,
        async: false,
        type: "Get",
        //dataType: "Json",
        contentType: "application/json; charset=utf-8",
        url: "api/getmaster",
        data: '',
        success: function (data) {
            var selectmaster = $("#selectMaster");
            addOptions(selectmaster, data);
        },
        error: function (result) {
            console.log(result);
            //$('#loading').hide();
        }
    });
}


function showjakepot() {
    $.ajax({
        //cache: false,
        async: false,
        type: "Get",
        //dataType: "Json",
        contentType: "application/json; charset=utf-8",
        url: "api/getJakepot",
        data: '',
        success: function (data) {
            console.log(data);
            var html = "";
            html += "<table class='tbl-report' style='font-size:x-small;'>";
            html += "<td>Username</td>"
            html += "<td>Amount</td>"
            html += "<td>ExMaster</td>"
            html += "<td>ExMember</td>"
            html += "</tr>"

                var Username = data.username;
            var Amount = data.amount;
            var ExMaster = data.exMastername;
            var ExMember = data.exMember;

                html += "<tr>";
            html += "<td>" + Username + "</td>";
            html += "<td>" + Amount + "</td>";
            html += "<td>" + ExMaster + "</td>";
            html += "<td>" + ExMember + "</td>";
                html += "</tr>";


            html += "</table>";

            $("#div_jackpot").html(html);
        },
        error: function (result) {
            console.log(result);
            //$('#loading').hide();
        }
    });
}

function testjakepot() {
    $.ajax({
        //cache: false,
        async: false,
        type: "Get",
        //dataType: "Json",
        contentType: "application/json; charset=utf-8",
        url: "api/TestJakepot",
        data: '',
        success: function (data) {
            console.log(data);
            var html = "";
            html += "<table class='tbl-report' style='font-size:x-small;'>";
            html += "<td>Username</td>"
            html += "<td>Win Amount</td>"
            html += "</tr>"

            var totalWinAmount = 0;
            for (var i = 0; i < data.length; i++) {
                var WinAmount = data[i].winAmount;
                var createdby = data[i].createdBy;

                totalWinAmount += WinAmount;

                html += "<tr>";
                html += "<td>" + createdby + "</td>";
                html += "<td>" + WinAmount + "</td>";
                html += "</tr>";
            }

            html += "</table>";
            html += "<div>Total Win: " + totalWinAmount + "</div>";

            $("#div_jackpot").html(html);
        },
        error: function (result) {
            console.log(result);
            //$('#loading').hide();
        }
    });
}

function loadstandard(usertype) {
    var username = "chanpheakdey";
    $("#div_report").html("");
    console.log(usertype);
    if (usertype == "user") {

    
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
    }
    $("#div_report2").html("");
    if (usertype == "master") {
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
    }

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


