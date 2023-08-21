var mapContainer = document.getElementById('map'), // 지도를 표시할 div
    mapOption = {
        center: new kakao.maps.LatLng(37.485546, 126.892388), /* 지도의 중심좌표 */
        level: 4, // 지도의 확대 레벨
    };

var map = new kakao.maps.Map(mapContainer, mapOption);

// 마커가 표시될 위치입니다
var markerPosition  = new kakao.maps.LatLng(37.485546, 126.892388);

// 마커를 생성합니다
var marker = new kakao.maps.Marker({
    position: markerPosition
});

marker.setMap(map);

var iwContent = '<div><a href="https://www.kiwontech.com" style="text-decoration:none;">기원테크</a></div>', // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
    iwPosition = new kakao.maps.LatLng(37.485546, 126.892388); //인포윈도우 표시 위치입니다

// 인포윈도우를 생성합니다
var infowindow = new kakao.maps.InfoWindow({
    position : iwPosition,
    content : iwContent
});

// 마커 위에 인포윈도우를 표시합니다. 두번째 파라미터인 marker를 넣어주지 않으면 지도 위에 표시됩니다
infowindow.open(map, marker);