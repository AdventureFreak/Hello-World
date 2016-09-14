var levelLocked = true;
var attempts = 3;

//declare the function
function PasswordPrompt () {
    //prompt for a password
    var myPassword = prompt("Enter password");
    //check if right password
    if (myPassword == "ou812") {
        levelLocked = false;
    } else {
        if (attempts > 0) {
                attempts--;
            PasswordPrompt();
            }
        }
    }


PasswordPrompt();

if (levelLocked) {
    alert("This level is locked.");
} else {
    alert("This level is unlocked.");
}
//not enough comments... :(