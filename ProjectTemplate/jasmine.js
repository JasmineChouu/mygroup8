// JavaScript source code

	//< !--DO NOT FORGET THIS SCRIPT TAG SO YOU CAN USE JQUERY!!!!!-- >

    function TestButtonHandler() {
        var webMethod = "ProjectServices.asmx/TestConnection";
        var parameters = "{}";

        //jQuery ajax method
        $.ajax({
            type: "POST",
            url: webMethod,
            data: parameters,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (msg) {
                var responseFromServer = msg.d;
                alert(responseFromServer);
            },
            error: function (e) {
                alert("this code will only execute if test button javascript is unable to access the webservice");
            }
        });
    }

function logon() {
    var id = document.getElementById("logonId").value;
    var pass = document.getElementById("logonPass").value;
    var webMethod = "ProjectServices.asmx/LogOn";
    //var parameters =  "{\"uid\":\"" + encodeURI(id) + "\",\"pass\":\"" + encodeURI(pass) + "\"} ";
    var param = {
        uid: encodeURI(id),
        pass: encodeURI(pass)
    }
    var parameters = JSON.stringify(param);

    //jQuery ajax method
    $.ajax({
        type: "POST",
        url: webMethod,
        data: parameters,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (msg) {
            var responseFromServer = msg.d;
            alert(responseFromServer)
            if (responseFromServer == true) {
                alert("logged in!")
            }
            else {
                alert("bad credential!")
            }
        },
        error: function (e) {
            alert("this code will only execute if logon javascript is unable to access the webservice");

        }
    
    });
}

	//<!-- END OF YOUR OWN JAVASCRIPT -->
