$(document).ready(function() {  
  $("#sendMessageButton").click(function(event) {
    //event.preventDefault();
    //alert("Hello");  
    //$("#contactForm input,#contactForm select").done(function(){
      // get values from FORM
      var name = $("input#name").val();
      var email = $("input#email").val();
      var phone = $("input#phone").val();
      var circle = $("select#circle").val();
      $this = $("#sendMessageButton");
      $this.prop("disabled", true);
      //alert(circle);
      var data={
          name: name,
          phone: phone,
          email: email,
          circle: circle
        };
      alert("Ваша заявка буде відправлена. "+JSON.stringify(data));  
      $this.prop("disabled", false);
      
  });


/*When clicking on Full hide fail/success boxes */
$('#name','#phone','#email').focus(function() {
  alert("Hello1"); 
  $('#success').html('');
});

$('button.close').click(function() {
  alert("Hello"); 
  $('#success').html('');
});
});