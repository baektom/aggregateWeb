// document.addEventListener("DOMContentLoaded", function () {
//     const openPopupButton = document.getElementById("openPopupButton");
//     const closePopupButton = document.getElementById("closePopupButton");
//     const popup = document.getElementById("popup");

//     openPopupButton.addEventListener("click", () => {
//         popup.style.display = "block";
//     });

//     closePopupButton.addEventListener("click", () => {
//         popup.style.display = "none";
//     });

//     popup.style.display = "none";
// });

document.addEventListener("DOMContentLoaded", function () {
    const openPopupButton = document.getElementById("openPopupButton");
    const closePopupButton = document.getElementById("closePopupButton");
    const popup = document.getElementById("popup");

    openPopupButton.addEventListener("click", (event) => {
        event.stopPropagation();
        popup.style.display = "block";

        document.addEventListener("click", outsideClickHandler);
    });

    closePopupButton.addEventListener("click", () => {
        popup.style.display = "none";
        document.removeEventListener("click", outsideClickHandler);
    });

    popup.style.display = "none";

    function outsideClickHandler(event) {
        if (!popup.contains(event.target) && event.target !== openPopupButton) {
            popup.style.display = "none";
            document.removeEventListener("click", outsideClickHandler);
        }
    }
});
