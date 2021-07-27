
//name field that validates applicants name and then displays it back to them via alert on button click

var name = document.getElementById("name")
function getName() {
    return document.getElementById("name").value;
}
 //on click function error message that pops up when name field is left blank
function display() {
    text = getName();
    if (getName() === null|| getName() === "") {
        window.alert("Please enter your name");
        display.preventDefault();
        return false;
    } //on click function that displays to the applicant the name entered into the name field on adoption form
    if (getName() !== null|| getName() !== "") {
    window.alert("Thank you for your application, " + text + "!");
    document.getElementById("form").submit()}};


