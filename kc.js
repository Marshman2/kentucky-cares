var name = document.getElementById("name")
function getName() {
    return document.getElementById("name").value;
}

function display() {
    text = getName();
    window.alert("Thank you for your application, " + text + "!");
    document.getElementById("form").submit();
} 





