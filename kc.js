
function validate() {
    const email = document.getElementById("email").value
    const emailValue = email

if(emailValue === "null") {
    setErrorFor(email, "Email cannot be blank");
} else if(!isEmail(emailValue)) {
    setErrorFor(email, "Email is not valid");
} else {
    setSuccessFor(email);
};
}


function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector("small")
    small.innerText = message;
    formControl.className = "form-control error"}

function isEmail(email) {
    return /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i .test(email) };
