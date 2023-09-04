
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
    voiceNotification.style.display = "block"; // 표시를 활성화
};

recognition.onerror = (event) => {
    console.error("음성 인식 오류:", event.error);
    voiceNotification.style.display = "none"; // 표시를 비활성화
};

recognition.onend = () => {
    console.log("음성 인식 종료");
    voiceNotification.style.display = "none"; // 음성 인식 종료 시 표시를 비활성화
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
    } else if (page === "홍보페이지") {
        window.location.href = "https://m.worknsales.com";
    } else if (page === "구축사례") {
        window.location.href = "/help/29386";
    }
}

// Swiper 초기화
const swiper = new Swiper(".swiper", {
  loop: false,
  effect: "fade",
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false, // 이 부분을 false로 설정합니다.
    stopOnLastSlide: true,
  },
});

const dbNewHtml = mainPage.answer;
const dbMainPage = document.getElementById("mainContent");

// dbNewHtml이 비어있지 않을 경우에만 HTML을 삽입하도록
if (dbNewHtml) {
  dbMainPage.innerHTML = dbNewHtml;
  // mainPage를 초기에 숨깁니다.
  dbMainPage.style.display = "none";
}

// 슬라이드 변경 시 처리
swiper.on("slideChange", () => {
  // 현재 활성화된 슬라이드의 인덱스를 가져옵니다.
  const currentIndex = swiper.activeIndex;

  // 슬라이드 이미지 개수를 가져옵니다.
  const totalSlides = swiper.slides.length;

  // 모든 슬라이드 이미지를 숨깁니다.
  for (let i = 0; i < totalSlides; i++) {
    swiper.slides[i].querySelector('img').style.display = "none";
  }

  // 현재 슬라이드 이미지만 표시합니다.
  swiper.slides[currentIndex].querySelector('img').style.display = "block";

  // 슬라이드 변경 후 mainPage가 뜨면 슬라이드 이미지를 숨기고 mainPage를 보여줍니다.
  if (currentIndex === totalSlides - 1) {
    // 슬라이드 이미지가 모두 보여진 후 mainPage를 보여줍니다.
    setTimeout(() => {
      dbMainPage.style.display = "block";
    }, 0);
    // mainPage를 1000px로 보여줍니다.
    dbMainPage.style.display = "block";
    dbMainPage.style.width = "55%";
    dbMainPage.style.margin = "auto";
  } else {
    // 슬라이드 이미지가 보일 때는 mainPage를 숨깁니다.
    dbMainPage.style.display = "none";
  }
});

// 슬라이드가 로드될 때 초기 상태 설정
swiper.on("init", () => {
  swiper.slides[0].querySelector('img').style.display = "block";
});

// 슬라이드 초기화
swiper.init();

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
        const searchResultUrl = `/help/${selectedId}`;
        window.location.href = searchResultUrl;
    }
});

function searchData(value) {
    const matchDataList = value
        ? dataList.filter((label) => label.question.includes(value))
        : [];

    if (dataListVisible) {
        showList(matchDataList, value, nowIndex);
    }
}

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
