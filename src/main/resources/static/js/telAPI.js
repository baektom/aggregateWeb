window.onload = function () {
    const emailInput = document.getElementById("emailInput");
    const nameInput = document.getElementById("nameInput");
    const contactInput = document.getElementById("contactInput");
    const submitButton = document.getElementById("submitButton");
    const errorDisplay = document.getElementById("errorDisplay");
    const agreeCheckbox = document.getElementById("agreeCheckbox");
    const companyInput = document.getElementById("companyInput");
    const contactTextarea = document.getElementById("contact");

    function validateEmail(email) {
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
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

        if (isValidEmail && isValidContact && name !== "" && isCheckedAgree) {
            submitButton.disabled = false;
            errorDisplay.textContent = "";
        } else {
            submitButton.disabled = true;
            errorDisplay.textContent = "필수 정보를 확인해주세요.";
        }
    }

    emailInput.addEventListener("input", updateSubmitButton);
    contactInput.addEventListener("input", updateSubmitButton);
    nameInput.addEventListener("input", updateSubmitButton);
    agreeCheckbox.addEventListener("change", updateSubmitButton);

    // 텔레그램 봇의 토큰과 chat ID
    const botToken = "820268258:AAFjNB2HoLBGwa5a2un93EguRYcGz3-M-Po";
    const chatId = "-813513834";

    // 전송 버튼 클릭 이벤트 처리
    submitButton.addEventListener("click", () => {
        const company = companyInput.value;
        const email = emailInput.value;
        const name = nameInput.value;
        const contact = contactInput.value;
        const inquiry = contactTextarea.value;

        // 전송할 메시지 내용 구성
        const message = `
        [골재 홈페이지] 문의 사항이 도착했습니다:
        기업명: ${company}
        이메일: ${email}
        이름/직책: ${name}
        연락처: ${contact}
        문의내용: ${inquiry}
    `;

        // 텔레그램으로 메시지 전송
        const telegramApiUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;
        const formData = new FormData();
        formData.append("chat_id", chatId);
        formData.append("text", message);

        fetch(telegramApiUrl, {
            method: "POST",
            body: formData,
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.ok) {
                    console.log("메시지 전송 성공");
                    alert("메시지가 전송되었습니다. 감사합니다!");

                    const popup = document.querySelector(".popup");
                    popup.style.display = "none";
                    openPopup.classList.remove("on");
                    companyInput.value = "";
                    emailInput.value = "";
                    nameInput.value = "";
                    contactInput.value = "";
                    contactTextarea.value = "";
                    agreeCheckbox.checked = false;
                } else {
                    console.error("메시지 전송 실패:", data);
                    alert("메시지 전송에 실패하였습니다. 다시 시도해주세요.");
                }
            })
            .catch((error) => {
                console.error("메시지 전송 중 오류 발생:", error);
                alert(
                    "메시지 전송 중 오류가 발생하였습니다. 다시 시도해주세요."
                );
            });
    });
};
