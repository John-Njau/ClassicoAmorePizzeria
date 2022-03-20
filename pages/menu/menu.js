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


$().ready(function () {
    $("#addItemBtn").click(function totalCost() {
        var size = document.getElementById('size').value;
        var crust = document.getElementById('crust').value;
        var toppings = document.getElementById('toppings').value;
        var pizzaName = document.getElementById('pizzaName').value;

        // cost of different sizes of pizza
        var sizeCost;
        if (pizzaName === 'delCruzo') {
            if (size === 'small') {
                sizeCost = 800;
            } else if (size === 'medium') {
                sizeCost = 1000;
            } else if (size === 'Large') {
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
                sizeCost = 11050;
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
        else {
            alert("Select Name of pizza")
        }

        // prizes of different crusts
        var costOfCrust;
        if (crust === "thin") {
            costOfCrust === 200;
        } else if (crust === "thick") {
            costOfCrust === 300;
        }
        else if (crust === "stuffed") {
            costOfCrust === 400;
        }

        // cost of different toppings
        var toppingsCost;
        if (toppings === "pepperoni") {
            toppingsCost === 300;
        }
        else if (toppings === "chicken") {
            toppingsCost === 250;
        }
        else if (toppings === "cheese") {
            toppingsCost === 100;
        }

        // cost of accompaniments
        var wine1 = document.getElementById('wine1').value;

        document.getElementById('wine2').value === 7500;
        document.getElementById('wine3').value === 8300;
        document.getElementById('wine4').value === 8500;
        // var wine2 = document.getElementById('wine2'
        // var wine3 = document.getElementById('wine3');
        // var wine4 = document.getElementById('wine4');
        var wine1Cost = 7000;

    });
});