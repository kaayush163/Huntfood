

    function checkField1() {
        var field = document.getElementById("firstName").value;
        var regex = /^[A-Za-z]+$/;

        if (regex.test(field))
            document.getElementById("message1").innerHTML = "Input accepted";
        else
            document.getElementById("message1").innerHTML = "Please input a name";
    }

    function checkField2() {
        var field = document.getElementById("lastName").value;
        var regex = /^[A-Za-z]+$/;

        if (regex.test(field))
            document.getElementById("message2").innerHTML = "Input accepted";
        else
            document.getElementById("message2").innerHTML = "Please input a last name";
    }

    function checkField3() {
        var field = document.getElementById("E-mail").value;
        var regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

        if (regex.test(field))
            document.getElementById("message3").innerHTML = "Input accepted";
        else
            document.getElementById("message3").innerHTML = "Please input a valid e-mail";
    }

    function checkField4() {
        var field = document.getElementById("phoneNumber").value;
        var regex = /^[0-9]+$/;

        if (regex.test(field))
            document.getElementById("message4").innerHTML = "Input accepted";
        else
            document.getElementById("message4").innerHTML = "Please input a valid phone number";
    }



