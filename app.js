
function validateForm() {
    let username = document.getElementById('username.value');
    let email = document.getElementById('email.value');
    let password = document.getElementById('password.value');
    let cnic = document.getElementById('cnic.value');
    let age = document.getElementById('age.value');

    
    let usernameRegex = /^[a-zA-Z0-9_-]{4,15}$/;
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;
    let cnicRegex = /^[0-9]{5}-[0-9]{7}-[0-9]$/;
    let ageRegex = /^(1[8-9]|[2-5][0-9]|60)$/;

    
    if (usernameRegex.test(username)) {
        alert('Please enter a valid username (4-15 characters, alphanumeric)');
        return false;
    }

    
    if (emailRegex.test(email)) {
        alert('Please enter a valid email address');
        return false;
    }

    
    if (passwordRegex.test(password)) {
        alert('Please enter a valid password (at least 8 characters, one uppercase letter, one special character)');
        return false;
    }

    
    if (cnicRegex.test(cnic)) {
        alert('Please enter a valid Pakistani CNIC (format: 12345-1234567-1)');
        return false;
    }


    if (ageRegex.test(age)) {
        alert('Age must be between 18 and 60');
        return false;
    }

    return true; 
}
