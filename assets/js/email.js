//Form input validation. Takes the value from each input and ensures 
//they are correct before submitting.
function validateForm (){
  
    var name = document.forms["booking-form-form"]["fromName"].value;
    var email = document.forms["booking-form-form"]["emailAddress"].value;
    var phone = document.forms["booking-form-form"]["telephone"].value;
    var poi = document.forms["booking-form-form"]["poi"].value;
    var msg = document.forms["booking-form-form"]["message"].value;