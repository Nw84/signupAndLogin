const form = document.getElementById("form");
const submitButton = document.getElementById("submitButton")
const realName = document.getElementById("realName");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const checkbox = document.getElementById("agree")
const strengthbar = document.getElementById("strength")

let correctName = false;
let correctUsername = false;
let correctEmail = false;
let correctPassword = false;

submitButton.disabled = true;
submitButton.classList.add("disabledButton");

checkbox.addEventListener("click", e => {
    validateInputs();
})

form.addEventListener("keyup", e => {
    validateInputs();
})

password.addEventListener("keyup", e => {
    checkStrength(password.value)
})

const checkStrength = (password) => {
    let strength = 0;

    if (password.match(/[a-z]+/)) {
        strength += 1;
    }
    if (password.match(/[0-9]+/)) {
        strength += 1;
    }
    if (password.match(/[A-Z]+/)) {
        strength += 1;
    }
    if (password.length > 5) {
        strength += 1;
    }
    switch (strength) {
        case 0:
            strengthbar.value = 0;
            break
        case 1:
            strengthbar.value = 25;
            break
        case 2:
            strengthbar.value = 50;
            break
        case 3:
            strengthbar.value = 75;
            break
        case 4:
            strengthbar.value = 100;
            break
    }
}

submitButton.addEventListener("click", e => {
    let data = validateInputs();
})

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector(".error");

    errorDisplay.innerText = message;
    inputControl.classList.add("error");
    inputControl.classList.remove("success");
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector(".error");

    errorDisplay.innerText = "";
    inputControl.classList.add("success");
    inputControl.classList.remove("error");
}

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const isStrongPassword = password => {
    const passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
    return passw.test(String(password));
}

const validateInputs = () => {
    const realNameValue = realName.value.trim();
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();

    if (realNameValue === "") {
        setError(realName, "Du behöver ange ditt fullständiga namn")
        correctName = false;
    } else if (realNameValue.length < 4) {
        setError(realName, "Du behöver ange både förnamn och efternamn")
        correctName = false;
    } else {
        setSuccess(realName);
        correctName = true;
    }

    if (usernameValue === "") {
        setError(username, "Ange ett önskat användarnamn")
        correctUsername = false;
    } else if (usernameValue.length < 5) {
        setError(username, "Ditt önskade användarnamn måste vara minst 5 tecken långt")
        correctName = false;
    } else {
        setSuccess(username);
        correctUsername = true;
    }

    if (emailValue === "") {
        setError(email, "Du behöver ange din email adress")
        correctEmail = false;
    } else if (!isValidEmail(emailValue)) {
        setError(email, "Du behöver ange en giltig email adress")
        correctEmail = false;
    } else {
        setSuccess(email);
        correctEmail = true;
    }

    if (passwordValue === "") {
        setError(password, "Ange ett önskat lösenord");
        correctPassword = false;
    } else if (!isStrongPassword(passwordValue)) {
        setError(password, "Ditt lösenord måste vara mellan 6 - 20 tecken och innehålla minst en siffra, en stor och en liten bokstav")
        correctPassword = false;
    } else {
        setSuccess(password)
        correctPassword = true;
    }

    if (correctName === true && correctUsername === true && correctEmail === true && correctPassword === true && checkbox.checked) {
        submitButton.disabled = false;
        submitButton.classList.remove("disabledButton");
        console.log("ost")
    } else {
        submitButton.disabled = true;
        submitButton.classList.add("disabledButton");
    }

    return realNameValue + usernameValue + emailValue + passwordValue;
}





