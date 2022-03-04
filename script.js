const form = document.getElementById("form");
const submitButton = document.getElementById("submitButton")
const realName = document.getElementById("realName");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");

let correctName = false;
let correctUsername = false;
let correctEmail = false;
let correctPassword = false;

submitButton.disabled = true;

form.addEventListener("keydown", e => {
    if (correctName === true && correctUsername === true && correctEmail === true && correctPassword === true) {
        submitButton.disabled = false;
        submitButton.classList.remove("activeButton");
        console.log("ost")
    } else {
        submitButton.disabled = true;
        submitButton.classList.remove("activeButton");
    }

    validateInputs();
})

submitButton.addEventListener("click", e => {
    e.preventDefault();

    let data = validateInputs();
    console.log(data)
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

    if (usernameValue === "") {
        setError(username, "Username is required")
    } else {
        setSuccess(username);
        correctUsername = true;
    }

    if (realNameValue === "") {
        setError(realName, "Full name is required")
    } else {
        setSuccess(realName);
        correctName = true;
    }

    if (emailValue === "") {
        setError(email, "Email is required")
    } else if (!isValidEmail(emailValue)) {
        setError(email, "Provide a valid email address")
    } else {
        setSuccess(email);
        correctEmail = true;
    }

    if (passwordValue === "") {
        setError(password, "password is required");
    } else if (!isStrongPassword(passwordValue)) {
        setError(password, "Password must be between 6 to 20 characters which contain at least one numeric digit, one uppercase and one lowercase letter")
    } else {
        setSuccess(password)
        correctPassword = true;
    }

    return realNameValue + " " + usernameValue + " " + emailValue + " " + passwordValue;
}




