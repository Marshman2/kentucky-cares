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

function completeAndRedirect()
{
    var r = confirm("Is all of your contact information correct? If so, click ok to continue.");
    if (r == true) {
        document.getElementById("form").action = "confirmation.html";
        document.getElementById("form").submit();
    }

    }

 