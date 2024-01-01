 // Function to validate the input
 function validateInput() {
  const firstInput = document.getElementById('first')
  const lastInput = document.getElementById('last')
  const dobInput = document.getElementById('dob')
  const phoneInput = document.getElementById('number')
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');

    if (firstInput.value === '') {
      alert('Please enter a firstname!');
      firstInput.focus();
      return false;
    }
    if (lastInput.value === '') {
      alert('Please enter a lastname!');
      lastInput.focus();
      return false;
    }
    if (dobInput.value === '') {
      alert('Please enter a date of birth!');
      dobInput.focus();
      return false;
    }
    if (phoneInput.value === '') {
      alert('Please enter a number!');
      phoneInput.focus();
      return false;
    }
    // Check if username is empty
    if (emailInput.value === '') {
      alert('Please enter a email!');
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

