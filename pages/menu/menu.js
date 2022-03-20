// selected order constructor
function Order(name, size, crust, toppings) {
    this.pizzaName = name;
    this.pizzaSize = size;
    this.pizzaCrust = crust;
    this.pizzaToppings = toppings;
}

$().ready(function () {
    $("form#orderForm").submit(function (event) {
        event.preventDefault();

        var pizzaName = $('#pizzaName').val();
        var size = $('#size').val();
        var crust = $('#crust').val();
        var toppings = $('#toppings').val();
        var number = $('#numberOfPizzas').val();


        var newOrder = new Order(pizzaName, size, crust, toppings);



        // cost of different sizes of pizza
        var sizeCost;
        if (pizzaName === 'delCruzo') {
            if (size === 'small') {
                sizeCost = 800;
            } else if (size === 'medium') {
                sizeCost = 1000;
            } else if (size === 'large') {
                sizeCost = 1500;
            } else {
                alert("Select Size of Pizza.")
            }
        } else if (pizzaName === 'soySeechi') {
            if (size === 'small') {
                sizeCost = 850;
            } else if (size === 'medium') {
                sizeCost = 1050;
            } else if (size === 'large') {
                sizeCost = 1550;
            } else {
                alert("Select Size of Pizza.")
            }
        } else if (pizzaName === "sigaraGo") {
            if (size === 'small') {
                sizeCost = 1000;
            } else if (size === 'medium') {
                sizeCost = 1100;
            } else if (size === 'large') {
                sizeCost = 1600;
            } else {
                alert("Select Size of Pizza.")
            }
        } else if (pizzaName === "tolCruzo") {
            if (size === 'small') {
                sizeCost = 1050;
            } else if (size === 'medium') {
                sizeCost = 1150;
            } else if (size === 'large') {
                sizeCost = 1650;
            } else {
                alert("Select Size of Pizza.")
            }
        } else if (pizzaName === "tocoLeno") {
            if (size === 'small') {
                sizeCost = 1200;
            } else if (size === 'medium') {
                sizeCost = 1400;
            } else if (size === 'large') {
                sizeCost = 1900;
            } else {
                alert("Select Size of Pizza.")
            }
        } else if (pizzaName === "pizzaName") {
            alert("Select Flavor of pizza")
            pizzaName.focus()
            return false;
        }

        // prizes of different crusts
        var costOfCrust;
        if (crust === "thin") {
            costOfCrust = 200;
        } else if (crust === "thick") {
            costOfCrust = 300;
        } else if (crust === "stuffed") {
            costOfCrust = 400;
        } else if (crust === "select-crustSize") {
            alert("Select crust size");
            costOfCrust.focus()
            return false;
        }

        // cost of different toppings
        var toppingsCost;
        if (toppings === "pepperoni") {
            toppingsCost = 300;
        } else if (toppings === "chicken") {
            toppingsCost = 250;
        } else if (toppings === "cheese") {
            toppingsCost = 100;
        } else if (toppings === "select-toppings") {
            alert("Select toppings");
            toppingsCost.focus()
            return false;
        }

        if (number === "") {
            alert("Minimum number of pizza allowed is 1.")
            number.focus()
            return false;
        }

        var total = (sizeCost + costOfCrust + toppingsCost) * number;

        $("#yourCart").show();

        $(".pizzaFlavor").append('<tr><td id="pizzaFlavor">' + pizzaName);
        $(".pizzaSize").append('<tr><td id="pizzaSize">' + size);
        $(".crustSize").append('<tr><td id="crustSize">' + crust);
        $(".toppings").append('<tr><td id="toppings">' + toppings);
        $(".number").append('<tr><td id="number">' + number);
        $(".totalAmountPayable").append('<tr><td id="totalAmountPayable">' + total);
        arrayTotalPrice.push(total); //create an array for all total prices
        // $(".grandTotal").append('<tr><td id="totalAmountPayable">' + checkoutTotal);

    });
});

var arrayTotalPrice = [];


// var checkoutTotal = 0;
// arrayTotalPrice.forEach(function (element) {
//     checkoutTotal += element;
// })


console.log(arrayTotalPrice);

$().ready(function () {
    // Delivery total payment
    $("#delivery").click(function () {
        $("#delivery-location").show();
        $("#totalPayment").show();
        $("#pickUp").hide();
        $("#totalAmountPickUp").hide();
        $(".totalDel").show();
        $(".totalPick").hide();
        $(".itemsDelivered").show();
        // hiding the delivery button
        $("#delivery").hide();
        $(".checkoutModeClicked").hide();

        var checkoutTotal = 0;
        arrayTotalPrice.forEach(function (index) {
            checkoutTotal = checkoutTotal + index;
        });
        console.log(checkoutTotal);

        //add Ksh.200 to checkout total when delivery is chosen
        var checkoutTotalDel = checkoutTotal + 200;
        $(".totalDel").text(checkoutTotalDel + "/=");

        $("#totalPayment").click(function (event) {
            event.preventDefault();

            $(".itemsDelivered").hide();
            $("#totalPayment").hide();
            $("#delivery-location").hide();
            $(".totalDel").hide();

            var location = $('#location').val();
            var phoneNumber = $('#phone-no').val();

            if (location != "" && phoneNumber != "") {
                $(".finally").append('<i class="fas fa-check-circle m-5" style="font-size:80px;color:green;"></i>' + '<br>' +
                    '<p>' + `Your Payment of ${checkoutTotalDel}/= has been received.Your Delivery will be Dispatched to ${location}.Keep it Classico Amore. Enjoy!` + '<p/>');
            } else if ((location === "" )|| (phoneNumber === "")) {
                alert("Please Enter Your Delivery Details")
                location.focus();
                // phoneNumber.focus();
                return false;
            }

            // if (location === "") {
            //     alert("Please Enter Your Delivery Details")
            //     location.focus();
            //     return false
            // } else if (phoneNumber === "") {
            //     alert("Please Enter Your Delivery Details")
            //     phoneNumber.focus();
            //     return false
            // } else {
            //     $(".finally").append('<i class="fas fa-check-circle m-5" style="font-size:80px;color:green;"></i>' + '<br>' +
            //         '<p>' + `Your Payment of ${checkoutTotalDel}/= has been received.Your Delivery will be Dispatched to ${location}.Keep it Classico Amore. Enjoy!` + '<p/>');
            // }

            // if (location != "" && phoneNumber != "") {

            // } else {
            //     
            // }
        });
    });
    // Pick up total Payment
    $("#pickUp").click(function () {
        $("#delivery").hide();
        $("#totalPayment").hide();
        $(".checkoutModeClicked").hide();
        $("#totalAmountPickUp").show();
        $("#pickUp").hide();
        $(".itemsPicked").show();

        var checkoutTotal = 0;
        arrayTotalPrice.forEach(function (index) {
            checkoutTotal = checkoutTotal + index;
        });
        console.log(checkoutTotal);

        $(".totalPick").text(checkoutTotal + "/=");

        $("#totalAmountPickUp").click(function () {
            $(".totalPick").hide();
            $(".itemsPicked").hide();
            $("#totalAmountPickUp").hide();
            // var amount = $('#location').val();

            $(".finallyPicked").append('<i class="fas fa-check-circle m-5" style="font-size:80px;color:green;"></i>' + '<br>' +
                '<p>' + `Your Payment of ${checkoutTotal}/= has been received.Your Order will be ready for Pick up in 20mins.Keep it Classico Amore. Enjoy!` + '<p/>');
            // alert(`Your Payment of ${checkoutTotal} has been received.Your Order will be ready for Pick up in 20mins..Keep it Classico Amore. Enjoy!`)
        });

    });

});

// menu.js continuation
$().ready(function () {
    $("#toCheckout").click(function () {
        $("#ourMenu").hide();
        $("#items").hide();
        $("#selectYourOrder").hide();
        $("#yourCart").hide();
        $(".allOrders").show();
        $("#totalAmountPickUp").hide();
    });
});