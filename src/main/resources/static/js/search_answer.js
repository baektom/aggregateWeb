const dbTitle = QAData.question
const dbAnswer = QAData.answer

// HTML 폼에 데이터 넣기
const faqTitle = document.getElementById("faqTitle");
const faqContent = document.getElementById("faqContent");

faqTitle.textContent = dbTitle;
faqContent.innerHTML = dbAnswer;