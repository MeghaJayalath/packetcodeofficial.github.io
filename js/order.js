function cd(x) {
    if (x == 0) {
        document.getElementById('addrD').style.display="block"
        document.getElementById('addrB').style.display="block"
        document.getElementById('addressB').value = document.getElementById('addressD').value
        checkforblank1();
    } else {
        document.getElementById('addrD').style.display="none"
        document.getElementById('addrB').style.display="none"
    }
    return;
}

function cash(x) {
    if (x == 2) {
        document.getElementById('cN').style.display="block"
        document.getElementById('sec').style.display="block"
        document.getElementById('eD').style.display="block"
        document.getElementById('c_selection').style.display="block"
        checkforblank2()

    } else {
        document.getElementById('cN').style.display="none"
        document.getElementById('sec').style.display="none"
        document.getElementById('eD').style.display="none"
        document.getElementById('c_selection').style.display="none"
        document.getElementById('dil').style.display="none"
    }
    return;
}

function checkforblank() {
    if (document.getElementById('number').value == "") {
        alert('Please enter a mobile Number');
        document.getElementById('number').style.borderColor = "red"
        return false;
    }

    if (document.getElementById('email').value == "") {
        alert('Please enter an email');
        document.getElementById('email').style.borderColor = "red"
        return false;
    }

}



