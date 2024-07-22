document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    fetch('/user', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            localStorage.setItem('userRole', data.role);
            if (data.role === 'admin') {
                window.location.href = '/books-admin'; 
            } else {
                window.location.href = '/books'; 
            }
        } else {
            document.getElementById('errorMessage').textContent = data.message;
        }
    })
    .catch(error => {
        console.error('Error during login:', error);
        document.getElementById('errorMessage').textContent = 'An error occurred. Please try again later.';
    });
});