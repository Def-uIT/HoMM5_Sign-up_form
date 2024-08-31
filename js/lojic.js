let nickname = document.getElementById('nickname');
let email = document.getElementById('email');
let password = document.getElementById('password');
let rulesCheckbox = document.getElementById('rulesCheckbox');
let option = document.getElementById('select')
const button = document.querySelector('button');
const inputs = document.querySelectorAll('input');

const checkValues = function() {
    allTrue = true;
    inputs.forEach(input => {
        if (input.value === '') {
            allTrue = false;
            button.classList.remove('active');
            button.classList.add('inactive');

        }
    })

    if (rulesCheckbox.checked == false) {
        allTrue = false;
        button.classList.remove('active');
        button.classList.add('inactive');
    }

    if (allTrue) {
        button.classList.remove('inactive');
        button.classList.add('active');
    }
}

nickname.addEventListener('input', checkValues);
email.addEventListener('input', checkValues);
password.addEventListener('input', checkValues);
rulesCheckbox.addEventListener('input', checkValues);

option.addEventListener('change', () => {
    const selectedOption = option.value;
    if (selectedOption === 'elf') {
        alert('гей');
    }
})
