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
    $("#delivery").click(function () {
        $("#delivery-location").show();
        $("#totalPayment").show();
        $("#pick-up").hide();
    });
    $("#totalPayment").click(function (event) {
        event.preventDefault();

        var location = $('#location').val();
        var phoneNumber = $('#phone-no').val();

        if (location != "" && phoneNumber != "") {
            alert("Your Payment of *** has been received.Your Delivery will be Dispatched to " + location + ". Enjoy!")
        } else {
            alert("Please Enter Your Delivery Details")
        }
    });
    
});

$().ready(function () {
    $("#pick-up").click(function () {
        $("#delivery").hide();
        $("#totalPayment").hide();
        $("#totalAmount").show();

    });
        $("#totalAmount").click(function () {
            // var amount = $('#location').val();

            alert("Your Payment of *** has been received. Your order will be available for pick up in 20mins")

        });
});