const dbTitle = QAData.question
const dbAnswer = QAData.answer

// HTML 폼에 데이터 넣기
const faqTitle = document.getElementById("faqTitle");
const faqContent = document.getElementById("faqContent");

faqTitle.textContent = dbTitle;
faqContent.innerHTML = dbAnswer;

// 맨 위로 보내는 아이콘 JS 코드
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
}

function scrollToBottom() {
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth",
    });
}