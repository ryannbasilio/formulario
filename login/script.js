function swapImage() {
    var iconClosed = document.getElementById('eye-closed')
    var iconOPen = document.getElementById('eye-open')

    if (iconClosed.style.opacity === '0') {
        iconClosed.style.opacity = '1';
        iconOPen.style.opacity = '0';
    } else {
        iconClosed.style.opacity = '0';
        iconOPen.style.opacity = '1';
    }
}

function checkPassword() {
    var passwordInput = document.getElementById('password')
    var password = passwordInput.value

    var correctPassword = 'open sesame'

    if (password == correctPassword) {
        swapImage()
        passwordInput.value = ''
    }
}