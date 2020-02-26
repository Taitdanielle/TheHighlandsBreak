//Form input validation. Takes the value from each input and ensures 
//they are correct before submitting.
function validateForm (){
  
    var name = document.forms["booking-form-form"]["fromName"].value;
    var email = document.forms["booking-form-form"]["emailAddress"].value;
    var phone = document.forms["booking-form-form"]["telephone"].value;
    var poi = document.forms["booking-form-form"]["poi"].value;
    var msg = document.forms["booking-form-form"]["message"].value;
    
    if (name == "") {
        alert("The name field cannot be empty.");
        return false;
    }
    if (name !== "") {
        if (!(/^[a-zA-Z ]+$/.test(name))) {
            alert("The name field can only container characters.");
            return false;
        }
    }
     if (email == "") {
        alert("The email field must not be empty.")
        return false;