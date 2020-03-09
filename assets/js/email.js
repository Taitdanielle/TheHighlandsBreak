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
}
    if (email !== "") {
        if (!(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email))) {
            alert("Incorrect format. Email should be eg. 'example@domain.com'")
            return false;
        }
    }
    if (phone == "") {
        alert("The telephone field must not be empty");
        return false;
    }
    if (phone !== "") {
        if (!(/^[0-9]*$/.test(phone))) {
            alert("The telephone field can only contain numbers with no spaces");
            return false;
        }
    }
    //Once validation is complete emailjs is set to send the details
    //to an email address.
     emailjs.sendForm('gmail', 'TheHighlandsBreak', this); {
      "from_name"; name,
      "from_email"; email,
      "telephone"; phone.value,
      "poi"; poi,
      "message"; msg
    }
    then(function(response) {
      console.log('SUCCESS!', response.status, response.text);
     
      document.getElementById("booking-form-form").reset();
      
      //If the email has been send with no errors then create and
      //display modal with message.
      var modal = document.getElementById('myModal');
      var closeCross = document.getElementsByClassName("close-cross")[0];
      var closeBtn  = document.getElementById('close');
      
      modal.style.display = "block";
    
      //Hide the modal when the x is clicked
      closeCross.onclick = function() {
        modal.style.display = "none";
      };
      //Hide the modal when the close button is clicked
      closeBtn.onclick = function() {
        modal.style.display = "none";
      };
      //Close when the user clicks anywhere outside the modal
      window.onclick = function(event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
      };
    
    }, 
    function (error) {
        console.log('FAILED...', error);
      }
    );
    return false;
}
