const signupForm = document.getElementById('sign');
const emailInput = document.getElementById('email');
const emailListKey = 'newsletterEmails'; 

function getExistingEmails() {
  const emailsJSON = localStorage.getItem(emailListKey);
  if (emailsJSON) {
    return JSON.parse(emailsJSON);  
  } else {
    return []; 
  }
}

function addEmail(email) {
  const emails = getExistingEmails();
  emails.push(email);
  localStorage.setItem(emailListKey, JSON.stringify(emails));  
}

signupForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const email = emailInput.value;

  if (email) {
    addEmail(email);  
    alert('You are subscribed to our newsletter!')
  } else {
    alert('Please enter a valid email address.');
  }
});