$(function () {

    if ($("#inputEmail").length) {
        let request = new XMLHttpRequest();


        request.onload = function () {
            if (this.readyState == 4 && this.status == 200) {
                let object = JSON.parse(this.response);

                $("#login").submit(function (event) {
                    event.preventDefault();

                    if ($("#inputEmail").val() === object.email && ($("#inputPassword").val() === object.password)) {
                        window.location.href = "index.html"
                    }
                });
            }

        };
        request.open("GET", "https://fe18.azurewebsites.net/api/user", true);
        request.send();
    };





});