/* 사이드 메뉴 */

const menuButton = document.getElementById("menuButton");
const closeButton = document.getElementById("closeButton");
const sideMenu = document.getElementById("sideMenu");

menuButton.addEventListener("click", () => {
  sideMenu.style.width = "50%";
});

closeButton.addEventListener("click", () => {
  sideMenu.style.width = "0";
});
/* 사이드 메뉴 아코디언*/

const accordionContents = document.querySelectorAll(".accordion-content");

document.querySelectorAll("li").forEach((li, index) => {
  li.addEventListener("click", () => {
    if (accordionContents[index].style.display === "block") {
      accordionContents[index].style.display = "none";
    } else {
      accordionContents.forEach((content) => {
        content.style.display = "none";
      });
      accordionContents[index].style.display = "block";
    }
  });
});

/* 검색 기능 및 음성인식 */

// 음성 인식 기능
const searchBar = document.getElementById("searchBar");
const micIcon = document.getElementById("micIcon");
const voiceNotification = document.getElementById("voiceNotification");
const recognition = new webkitSpeechRecognition();

recognition.continuous = false;
recognition.interimResults = true;

recognition.onstart = () => {
  console.log("음성 인식 시작");
  showVoiceNotification("음성 인식 중...");
};

recognition.onerror = (event) => {
  console.error("음성 인식 오류:", event.error);
  showVoiceNotification("음성 인식 오류 발생");
};

recognition.onresult = (event) => {
  const result = event.results[0][0].transcript;
  console.log("인식된 문장:", result);

  searchBar.value = result; // 음성 인식 결과를 검색바에 표시
  performSearch(); // 검색 기능 실행
};

micIcon.addEventListener("click", () => {
  recognition.start();
});

// 검색 기능을 수행하는 함수
const performSearch = () => {
  const query = searchBar.value.trim();
  if (query !== "") {
    // 여기에 검색 기능을 수행하는 코드를 추가하세요.
    // 예를 들어, 검색 결과 페이지로 이동하거나 검색 결과를 화면에 표시하는 등의 동작을 수행합니다.
    console.log("검색어:", query);

    // 검색 후에 페이지를 새로고침하지 않도록 return false; 추가
    return false;
  }
};

// Enter 키 이벤트 처리
searchBar.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    performSearch();
  }
});

// 검색 아이콘 클릭 이벤트 처리
document.getElementById("searchIcon").addEventListener("click", performSearch);

// 음성 인식 중 알림 표시 함수
const showVoiceNotification = (message) => {
  voiceNotification.textContent = message;
  voiceNotification.style.display = "block";

  setTimeout(() => {
    voiceNotification.style.display = "none";
  }, 3000); // 3초 후에 알림 숨김
};


function navigateTo(page) {
  // 페이지 전환 로직 구현
  if (page === "메인") {
    // 홈 페이지로 이동
    window.location.href = "/";
  } else if (page === "체험하기") {
    window.location.href = "https://m.worknsales.com";
  } 

}


const swiper = new Swiper(".swiper", {
  loop: false, // 반복

  effect: "fade",

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  autoplay: {
    // delay: 3000, // 3초마다 페이지 이동
    disableOnInteraction: false,
  },
});
// AOS 애니메이션
// AOS.init();

window.addEventListener("DOMContentLoaded", () => {
  const bannerBottom = document.querySelector(".bannerBottom");
  const banner = document.querySelector(".banner");

  if (bannerBottom && banner) {
    banner.appendChild(bannerBottom); // .bannerBottom 요소를 .banner 안으로 이동
  }
});
/*
const dataList = [
    "사과",
    "사과 나무",
    "사과 농장",
    "사과 바구니",
    "바나나",
    "바나나 나무",
    "바나나 농장",
    "바나나 포도",
    "포도",
    "포도 농장",
    "포도주",
];*/

dataList[0]
dataList[0].question

const $search = document.querySelector("#searchBar");
const $autoComplete = document.querySelector(".autocomplete");

let nowIndex = 0;

$search.onkeyup = (event) => {
// 검색어
const value = $search.value.trim();

// 자동완성 필터링
const matchDataList = value
    ? dataList.filter((label) => label.includes(value))
    : [];

switch (event.keyCode) {
    // UP KEY
    case 38:
    nowIndex = Math.max(nowIndex - 1, 0);
    break;

    // DOWN KEY
    case 40:
    nowIndex = Math.min(nowIndex + 1, matchDataList.length - 1);
    break;

    // ENTER KEY
    case 13:
    document.querySelector("#searchBar").value = matchDataList[nowIndex] || "";

    // 초기화
    nowIndex = 0;
    matchDataList.length = 0;
    break;

    // 그외 다시 초기화
    default:
    nowIndex = 0;
    break;
}

// 리스트 보여주기
showList(matchDataList, value, nowIndex);
};

const showList = (data, value, nowIndex) => {
// 정규식으로 변환
const regex = new RegExp(`(${value})`, "g");

$autoComplete.innerHTML = data
    .map(
    (label, index) => `
    <div class='${nowIndex === index ? "active" : ""}'>
        ${label.replace(regex, "<mark>$1</mark>")}
    </div>
    `
    )
    .join("");
};