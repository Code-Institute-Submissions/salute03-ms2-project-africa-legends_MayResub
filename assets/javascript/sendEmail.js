 //sendEmail.js//
          

 let sendMail = function(form) {
    emailjs.send("service_2x6jexf", "Africa-legends", {
                  "get_in_touch": form.getintouch.value,
                  "from_name": form.name.value,
                  "from_email": form.emailaddress.value 
  })
    .then(
        function(response) {
            console.log("SUCCES", response);
            alert("Your message has been sent successfully");
            document.getElementById('form').reset();
        },
        function(error) {
            console.log("FAILED", error);
            alert("Message was not sent");
            document.getElementById('form').reset();
        });
    return false;
};


