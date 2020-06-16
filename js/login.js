// Login
const passBtn = document.querySelector('.pass-btn');

passBtn.addEventListener('click', (e) => {
    e.preventDefault();

    let passField = e.currentTarget.closest('.login__content--form').querySelector('.input-password');

    if (passField.getAttribute('type') == 'password') {
        passField.setAttribute('type', 'text');
    } else {
        passField.setAttribute('type', 'password');
    }

   
})

const passBtn2 = document.querySelector('.pass-btn2');

passBtn2.addEventListener('click', (e) => {
    e.preventDefault();

    let passField2 = e.currentTarget.closest('.login__content--form').querySelector('.input-password-repeat');

    if (passField2.getAttribute('type') == 'password') {
        passField2.setAttribute('type', 'text');
    } else {
        passField2.setAttribute('type', 'password');
    }
   
})



