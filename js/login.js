function toggleForm() {
    var signinForm = document.getElementById("signin-form");
    var signupForm = document.getElementById("signup-form");
    if (signinForm.style.display === "none") {
        signinForm.style.display = "block";
        signupForm.style.display = "none";
    } else {
        signinForm.style.display = "none";
        signupForm.style.display = "block";
    }
}

const vendButton = document.getElementById("vend");
const custButton = document.getElementById("cust");

vendButton.addEventListener("click", () => {
    vendButton.classList.add("active-button");
    custButton.classList.remove("active-button");
});

custButton.addEventListener("click", () => {
    custButton.classList.add("active-button");
    vendButton.classList.remove("active-button");
});

// Function to handle form submission and redirect to the home page
function handleFormSubmit(formId) {
    const form = document.getElementById(formId);

    // Add an event listener for form submission
    form.addEventListener("submit", function (e) {
        e.preventDefault(); // Prevent the default form submission behavior

        // Serialize form data into a URL-encoded string
        const formData = new FormData(form);
        const formDataString = new URLSearchParams(formData).toString();

        // Send a POST request to Google Forms
        fetch(form.action, {
            method: "POST",
            body: formDataString,
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
        });

        // Redirect to the home page immediately after form submission
        window.location.href = "index.html";
    });
}

// Call the function to handle both login and register form submissions
handleFormSubmit("login-form");
handleFormSubmit("signup-form"); // Use the correct form ID for the register form
