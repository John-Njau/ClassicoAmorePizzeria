// document.getElementById("totalPayment").addEventListener("click", totalAmount);

// function totalAmount() {
//     var location = document.getElementById('location').value;

//     if (location != ""){
//     alert("ssup nibba " + location)
//     }
//     else
//     {
//         alert("Enter your Location")
//     }
// }

$().ready(function () {
    $("#totalPayment").click(function (event) {
        event.preventDefault();

        var location = $('#location').val();

        if (location != "") {
            alert("Your Delivery will be Dispatched to " + location)
        }
        else {
            alert("Please Enter your Location")
        }
    });
});