const openPopupButton = document.querySelector("#openPopupButton");
const backTap = document.querySelector(".backTap");
const openPopup = document.querySelector("#popup");

openPopupButton.addEventListener("click", function (event) {
    openPopup.classList.add("on");
});
backTap.addEventListener("click", function (event) {
    openPopup.classList.remove("on");
});

// 개인정보 관련
const privacyButton = document.getElementById("privacy");
const popupOverlay = document.getElementById("popupOverlay");
const backButton = document.getElementById("close-popup");

privacyButton.addEventListener("click", () => {
    popupOverlay.style.display = "flex";
});

backButton.addEventListener("click", () => {
    popupOverlay.style.display = "none";
});
