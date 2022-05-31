
function loadstandard() {
    var username = $("#hdUsername").val();
    $.ajax({
        //cache: false,
        async: false,
        type: "Get",
        //dataType: "Json",
        contentType: "application/json; charset=utf-8",
        url: "api/getStandard/" + username,
        data: '',
        success: function (data) {
            //console.log(data);


            $("#div_report").html(data);
        },
        error: function (result) {
            console.log(result);
            //$('#loading').hide();
        }
    });
}
