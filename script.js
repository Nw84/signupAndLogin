const form = document.getElementById("form");
const submitButton = document.getElementById("submitButton")
const realName = document.getElementById("realName");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const checkbox = document.getElementById("agree")

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

    if (usernameValue === "") {
        setError(username, "Username is required")
        correctUsername = false;
    } else {
        setSuccess(username);
        correctUsername = true;
    }

    if (realNameValue === "") {
        setError(realName, "Full name is required")
        correctName = false;
    } else {
        setSuccess(realName);
        correctName = true;
    }

    if (emailValue === "") {
        setError(email, "Email is required")
        correctEmail = false;
    } else if (!isValidEmail(emailValue)) {
        setError(email, "Provide a valid email address")
        correctEmail = false;
    } else {
        setSuccess(email);
        correctEmail = true;
    }

    if (passwordValue === "") {
        setError(password, "password is required");
        correctPassword = false;
    } else if (!isStrongPassword(passwordValue)) {
        setError(password, "Password must be between 6 to 20 characters which contain at least one numeric digit, one uppercase and one lowercase letter")
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





