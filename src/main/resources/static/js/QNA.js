window.onload = function () {
    const emailInput = document.getElementById("emailInput");
    const nameInput = document.getElementById("nameInput");
    const contactInput = document.getElementById("contactInput");
    const submitButton = document.getElementById("submitButton");
    const errorDisplay = document.getElementById("errorDisplay");
    const agreeCheckbox = document.getElementById("agreeCheckbox");

    function validateEmail(email) {
        const emailPattern =
            /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return emailPattern.test(email);
    }

    function validateContact(contact) {
        const contactPattern = /^010\d{4}\d{4}$/;
        return contactPattern.test(contact);
    }

    function updateSubmitButton() {
        const email = emailInput.value.trim();
        const contact = contactInput.value.trim();
        const name = nameInput.value.trim();

        const isValidEmail = validateEmail(email);
        const isValidContact = validateContact(contact);
        const isCheckedAgree = agreeCheckbox.checked;

        if (isValidEmail && isValidContact && name !== "" &&isCheckedAgree) {
            submitButton.disabled = false;
            errorDisplay.textContent = "";
        } else {
            submitButton.disabled = true;
            errorDisplay.textContent =
                "필수 정보를 확인해주세요.";
        }
    }

    emailInput.addEventListener("input", updateSubmitButton);
    contactInput.addEventListener("input", updateSubmitButton);
    nameInput.addEventListener("input", updateSubmitButton);
    agreeCheckbox.addEventListener("change", updateSubmitButton);
};