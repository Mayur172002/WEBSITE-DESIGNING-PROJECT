 // Function to validate the input
 function validateInput() {
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');

    // Check if username is empty
    if (emailInput.value === '') {
      alert('Please enter a username!');
      emailInput.focus();
      return false;
    }

    // Check if email is empty
    if (passwordInput.value === '') {
      alert('Please enter an password!');
      passwordInput.focus();
      return false;
    }

    
    const email = emailInput.value;
    const password = passwordInput.value;
  
    // Check credentials (replace this with your authentication logic)
    if (email == 'your_email' && password == 'your_password') {
      // Redirect to the next page upon successful login
      window.location.href = '  skybage.html'; // Replace with your desired next page
      return true; // Only return true if redirecting
    } 
  
  }

  

  // Attach validation function to form submission
  document.querySelector('form').onsubmit = function() {
    return validateInput();
  };

  function show(){
    let show = document.getElementById("password")
   if(show.type == "password"){
    show.type = "text"

   }
   else{
    show.type = "password";
   }
  }

