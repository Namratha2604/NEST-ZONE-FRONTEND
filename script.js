const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');

if(bar){
    bar.addEventListener('click',()=>{
        nav.classList.add('active')
    })
}

const close = document.getElementById('close');

if(close){
    close.addEventListener('click',()=>{
        nav.classList.remove('active')
    })
}


// Function to display alert with button after 1 minute
function displayAlert() {
    // Create a div element to hold the alert content
    var alertDiv = document.createElement("div");

    // Set the alert content
    alertDiv.innerHTML = "<p>Welcome to our website! Please sign up or log in to continue.</p>";

    // Create a button for sign-up
    var signUpButton = document.createElement("button");
    signUpButton.textContent = "Sign Up";
    signUpButton.onclick = function() {
        window.location.href = "/signup.html"; // Redirect to sign-up page
    };
    alertDiv.appendChild(signUpButton);

    // Create a button for login
    var loginButton = document.createElement("button");
    loginButton.textContent = "Log In";
    loginButton.onclick = function() {
        window.location.href = "/login.html"; // Redirect to login page
    };
    alertDiv.appendChild(loginButton);

    // Append the alert div to the body
    document.body.appendChild(alertDiv);
}

// Set timeout to display alert after 1 minute
setTimeout(displayAlert, 60000); // 60000 milliseconds = 1 minute
