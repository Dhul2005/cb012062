const userData = {
    "users": [{
            "username": "admin",
            "password": "Dhulvin",
            "role": "admin",
            "email": "admin@admin.com"
        },
        {
            "username": "user",
            "password": "NPS",
            "role": "user",
            "email": "user@user.com"
        }
    ]
};


  
  function authenticate(username, password) {
    const user = userData.users.find(user => user.username === username && user.password === password);
  
    if (user) {
      sessionStorage.setItem('isLoggedIn', true);
      sessionStorage.setItem('currentUser', JSON.stringify(user)); 
      window.location.href = 'dashboard.html';
    } else {
      console.log("Invalid username or password.");
    }
  }
  
  const loginForm = document.getElementById('loginForm');
  loginForm.addEventListener('submit', function(event) {
    event.preventDefault(); 
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    authenticate(username, password);
  });
