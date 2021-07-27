const email = document.getElementById("email")
const form = document.getElementById("form")
const errorElement = document.getElementById("error")

form.addEventListener("submit" , (e) => {
    let messages = []
    if (email.value === "" || email.value === null) {
        messages.push("email is required")
    }

    if (messages.length > 0) {
        e.preventDefault()
        errorElement.innerText = messages.join(", ")
    }
})

var alert = document.querySelector("email");

alert.onclick = function () {
    let message =("Did you enter the correct email?");
    alert('You suggested ' + question + '! Check back for menu updates soon!');
    if (question === null|| question === '') {
        alert('Let us know if you think of something!');
    }
}

function display()
{
alert("email");
}

 