form.addEventListener('submit', e => {
    e.preventDefault();

    checkInputs();
});



function checkforblank() {
    if (document.getElementById('fullname').value == "") {
        alert('Please enter your name');
        document.getElementById('fullname').style.borderColor = "red"
        return false;
    }

    if (document.getElementById('username').value == "") {
        alert('Please enter a username');
        document.getElementById('username').style.borderColor = "red"
        return false;
    }

    if (document.getElementById('email').value == "") {
        alert('Please enter your email address');
        document.getElementById('email').style.borderColor = "red"
        return false;
    }

    if (document.getElementById('number').value == "") {
        alert('Please enter your phone number');
        document.getElementById('number').style.borderColor = "red"
        return false;
    }
    if (document.getElementById('password').value == "") {
        alert('Please enter a password');
        document.getElementById('password').style.borderColor = "red"
        return false;
    }
    if (document.getElementById('con_password').value == "") {
        alert('Please confirm your password');
        document.getElementById('con_password').style.borderColor = "red"
        return false;
    }
    if(document.getElementById('password').value != document. getElementById('con_password').value){
        alert('Password does not match');
        document.getElementById('con_password').style.borderColor = "red"
        return false;
    }
    else {
        window.alert("Thank you for registering.\nNow you will be redirected to the submission form.");
    }
}