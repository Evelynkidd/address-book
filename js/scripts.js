$(document).ready(function(){
  $("#book").submit(function(event){
    event.preventDefault();
    var nameInput = $("input#name").val();
    var addressInput = $("input#address").val();
    var phoneInput = $("input#phone").val();
    console.log(nameInput);
    $("#displayall").show();
    $("#display").text(nameInput);
    $("#display1").text(addressInput);
    $("#display2").text(phoneInput);

  });
});
