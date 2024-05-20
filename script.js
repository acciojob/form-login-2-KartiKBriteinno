//your JS code here. If required.
function displayFormInfo(event) {
  // Prevent the default form submission
  event.preventDefault();
  
  // Retrieve the form values
  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const phoneNumber = document.getElementById("phoneNumber").value;
  const emailId = document.getElementById("emailId").value;
  
  // Create the alert message
  const message = `First Name: ${firstName} Last Name: ${lastName} Phone Number: ${phoneNumber} Email ID: ${emailId}`;
  
  // Display the alert
  alert(message);
}
