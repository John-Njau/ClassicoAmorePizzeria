// Resetting form fields 
$().ready(function() {
    $("#submitBtn").click(
    document.getElementById("contactForm").reset());
    // $("#submitBtn").trigger("reset");
});