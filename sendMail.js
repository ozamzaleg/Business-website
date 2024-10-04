// sendMail.js
(function(){
     emailjs.init("XRr-lvz79JOphOR28"); // Replace with your EmailJS user ID
 })();

// Handle form submission
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent the form from submitting the traditional way
		
		var fromName = ocument.getElementById('name').value;
		var fromEmail = ocument.getElementById('email').value;
	  var subject = ocument.getElementById('subject').value;
		var message = ocument.getElementById('message').value;

    // Use EmailJS to send the form data
    emailjs.send("service_9umctsz","template_8vt0qka", {
        from_name: "fgdfgfd",        // Dynamic name from form
        from_email: "fdgfdg",      // Dynamic email from form
				subject : "fdgfdg", 
        message: "dfgfdgfd"            // Dynamic message from form
    })
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
       alert('Message sent successfully!');
    }, function(error) {
       console.log('FAILED...', error);
       alert('Failed to send message.');
    });
});