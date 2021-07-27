var name = document.getElementById("name")
function getName() {
    return document.getElementById("name").value;
}

function display() {
    text = getName();
    if (getName() === null|| getName() === "") {
        window.alert("Please enter your name");
        display.preventDefault();
        return false;
    }
    if (getName() !== null|| getName() !== "") {
    window.alert("Thank you for your application, " + text + "!");
    document.getElementById("form").submit()}};


