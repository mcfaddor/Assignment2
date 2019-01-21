$(function () {

    let request = new XMLHttpRequest();


    $("#id:t som tex en h4 med värde heter").text(object.revenue) // om vi tar exempel från total-sales-chart
    $("#id:t som tex en h4 med värde heter").text(object.returns) // om vi tar exempel från total-sales-chart










    // Funktion för att hämta information från en sida.
    request.onload = function () {
        if (this.readyState == 4 && this.status == 200) {
            let object = JSON.parse(this.response);


            

            for (let i = 0; i < object.updates.length; i++) {
                console.log(object.updates[i].title);
                console.log(object.updates[i].time);

                let title = object.updates[i].title;

                $("#valueGreen").text(`${title}`);   // hämtar objekt från text i html
                $("#valueGreen").text(`${title}`); 

            }

        }

    };

    request.open("GET", "https://fe18.azurewebsites.net/api/updates", true);     // <-----  HÄMTAR INFORMATION FRÅN SIDAN OCH LÄGGS I EN VARIABEL SOM HETER REQUEST, SOM MAN SEDAN KAN ANROPA.
    request.send();



});





______________________________________________________


$(function() {

    var request = new XMLHttpRequest();
        if(this.readyState == 4 && this.status == 200) {
            var object = JSON.parse(this.response);

            for(var i=0;)
            console.log(objects.updates[i].title);
            console.log(object.updates[i].time);
        }


});