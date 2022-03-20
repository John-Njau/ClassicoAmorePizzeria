// $().ready(function () {
//     $("#delivery").click(function () {
//         $("#delivery-location").show();
//         $("#totalPayment").show();
//         $("#pick-up").hide();
//     });
//     $("#totalPayment").click(function (event) {
//         event.preventDefault();

//         var location = $('#location').val();
//         var phoneNumber = $('#phone-no').val();

//         if (location != "" && phoneNumber != "") {
//             alert("Your Payment of *** has been received.Your Delivery will be Dispatched to " + location + ". Enjoy!")
//         } else {
//             alert("Please Enter Your Delivery Details")
//         }
//     });

// });

// $().ready(function () {
//     $("#pick-up").click(function () {
//         $("#delivery").hide();
//         $("#totalPayment").hide();
//         $("#totalAmount").show();

//     });
//         $("#totalAmount").click(function () {
//             // var amount = $('#location').val();

//             alert("Your Payment of *** has been received. Your order will be available for pick up in 20mins")

//         });
// });    


// Adding items to checkout
// const addingItem = document.querySelectorAll("#addItemBtn");

// addingItem.forEach((btn) => {
//     btn.addEventListener("click", sumCost)
// });

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
            }
            else {
                alert("Select Size of Pizza.")
            }
        }
        else if (pizzaName === 'soySeechi') {
            if (size === 'small') {
                sizeCost = 850;
            } else if (size === 'medium') {
                sizeCost = 1050;
            } else if (size === 'large') {
                sizeCost = 1550;
            }
            else {
                alert("Select Size of Pizza.")
            }
        }
        else if (pizzaName === "sigaraGo") {
            if (size === 'small') {
                sizeCost = 1000;
            } else if (size === 'medium') {
                sizeCost = 1100;
            } else if (size === 'large') {
                sizeCost = 1600;
            }
            else {
                alert("Select Size of Pizza.")
            }
        }
        else if (pizzaName === "tolCruzo") {
            if (size === 'small') {
                sizeCost = 1050;
            } else if (size === 'medium') {
                sizeCost = 1150;
            } else if (size === 'large') {
                sizeCost = 1650;
            }
            else {
                alert("Select Size of Pizza.")
            }
        }
        else if (pizzaName === "tocoLeno") {
            if (size === 'small') {
                sizeCost = 1200;
            } else if (size === 'medium') {
                sizeCost = 1400;
            } else if (size === 'large') {
                sizeCost = 1900;
            }
            else {
                alert("Select Size of Pizza.")
            }
        }
        else if (pizzaName === "pizzaName") {
            alert("Select Flavor of pizza")
        }

        else {
            // var price = (sizeCost + costOfCrust + toppingsCost);
            // var total = price * number;
            alert("sizeCost");
        }

        // prizes of different crusts
        var costOfCrust;
        if (crust === "thin") {
            costOfCrust = 200;
        } else if (crust === "thick") {
            costOfCrust = 300;
        }
        else if (crust === "stuffed") {
            costOfCrust = 400;
        }
        else {
            alert("Select crust size");
        }

        // cost of different toppings
        var toppingsCost;
        if (toppings === "pepperoni") {
            toppingsCost = 300;
        }
        else if (toppings === "chicken") {
            toppingsCost = 250;
        }
        else if (toppings === "cheese") {
            toppingsCost = 100;
        }
        else {
            alert("Select toppings");
        }


        var total = (sizeCost + costOfCrust + toppingsCost) * number;

        // array for total price for each order;







        $("#yourCart").show();

        $(".pizzaFlavor").append('<tr><td id="pizzaFlavor">' + pizzaName);
        $(".pizzaSize").append('<tr><td id="pizzaSize">' + size);
        $(".crustSize").append('<tr><td id="crustSize">' + crust);
        $(".toppings").append('<tr><td id="toppings">' + toppings);
        $(".number").append('<tr><td id="number">' + number);
        $(".totalAmountPayable").append('<tr><td id="totalAmountPayable">' + total);
        arrayTotalPrice.push(total); //create an array for all total prices
        // $(".addedItems").append("<p>" + `Your total bill is ${total}`)
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

        $(".totalPick").text(checkoutTotal);
        var checkoutTotalDel = checkoutTotal + 200; //add Ksh.200 to checkout total when delivery is chosen
        $(".totalDel").text(checkoutTotalDel + "/=");
        // var checkoutTotalDel = che
    

    // $(".addedItems").append("<p>" + `Your total bill is ${total}`)

    $("#totalPayment").click(function (event) {
        event.preventDefault();

        $(".itemsDelivered").hide();
        $("#totalPayment").hide();
        $("#delivery-location").hide();
        $(".totalDel").hide();

        var location = $('#location').val();
        var phoneNumber = $('#phone-no').val();

        if (location != "" && phoneNumber != "") {

            $(".finally").append( '<i class="fas fa-check-circle m-5" style="font-size:80px;color:green;"></i>' + '<br>' +
           '<p>' + `Your Payment of ${checkoutTotalDel}/= has been received.Your Delivery will be Dispatched to ${location}.Keep it Classico Amore. Enjoy!` + '<p/>'); 
        } else {
            alert("Please Enter Your Delivery Details")
        }
    });

    // Pick up total Payment
    $("#pickUp").click(function () {
        $("#delivery").hide();
        $("#totalPayment").hide();
        $("#totalAmountPickUp").show();

    });
    $("#totalAmountPickUp").click(function () {
        // var amount = $('#location').val();

        alert(`Your Payment of ${checkoutTotalDel} has been received.Your Order will be ready for Pick up in 20mins..Keep it Classico Amore. Enjoy!`)

    });

});
});

// $().ready(function () {

// });

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

