/* 사이드 메뉴 */

const menuButton = document.getElementById("menuButton");
const closeButton = document.getElementById("closeButton");
const sideMenu = document.getElementById("sideMenu");

function searchData(value) {
    const matchDataList = value
        ? dataList.filter((label) => label.question.includes(value))
        : [];

    if (dataListVisible) {
        showList(matchDataList, value, nowIndex);
    }
}

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
  searchBar.click();
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
  searchData(result);
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


const $search = document.querySelector("#searchBar");
const $autoComplete = document.querySelector(".autocomplete");

let nowIndex = 0;
let dataListVisible = false;

console.log(dataList);

document.addEventListener("click", (event) => {
    if (!$search.contains(event.target)) {
        dataListVisible = false;
        $autoComplete.innerHTML = "";
    }
});

$search.addEventListener("click", () => {
    dataListVisible = true;
    showList(dataList, "", nowIndex);
    //showList(dataList.map(obj => obj, "", nowIndex));

});



$search.addEventListener("keyup", () => {
    searchData($search.value.trim());
});

$autoComplete.addEventListener("click", (event) => {
    // 클릭한 요소가 <div>인지 확인
    if (event.target.tagName === "DIV") {
        // 클릭한 <div>의 내용 가져오기
        const selectedText = event.target.innerText;

        // 클릭한 <div>에 연결된 id 정보 가져오기
        const selectedId = event.target.getAttribute("data-id");

        // 선택한 데이터를 이용하여 페이지 이동
        const searchResultUrl = `/searchAnswer/${selectedId}`;
        window.location.href = searchResultUrl;
    }
});


const showList = (data, value, nowIndex) => {
    const regex = new RegExp(`(${value})`, "g");

    $autoComplete.innerHTML = data
        .map(
            (item, index) => `
            <div class='${nowIndex === index ? "active" : ""}' data-id="${item.id}">
                ${item.question.replace(regex, "<mark>$1</mark>")}
            </div>
        `
        )
        .join("");
};
