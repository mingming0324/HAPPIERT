console.clear();

// 사이드메뉴 위아래
$('.side-btn').click(function () {
  $('.side-box').addClass('active');
  $('.top-banner').addClass('m_active');
});
$('.close-btn').click(function () {
  $('.side-box').removeClass('active');
  setTimeout(function () {
    $('.top-banner').removeClass('m_active');
  }, 500);
});

// 헤더 사라지고 생기기
const group = document.querySelector('.mq-group');
console.log(group.offsetWidth);

let lastScrollTop = 0;
const header = document.querySelector('.main-header');
const threshold = 50; // 스크롤이 이 정도 이상 내려가야 반응
const minScrollDelta = 5; // 변화폭 민감도 ↑

window.addEventListener('scroll', function () {
  const currentScroll = window.scrollY;
  const delta = Math.abs(currentScroll - lastScrollTop);

  if (delta < minScrollDelta) return;

  if (currentScroll > lastScrollTop && currentScroll > threshold) {
    header.classList.add('hide-header');
  } else if (currentScroll < lastScrollTop) {
    header.classList.remove('hide-header');
  }

  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});

// 마르퀴
$(function () {
  // 페이지 로드 후 실행되는 jQuery 초기화 함수

  const $group = $(".mq-group"); // marquee에 사용할 원본 텍스트 그룹을 선택
  const speedNormal = 1;         // 기본 이동 속도 (픽셀/frame 단위)
  const speedSlow = 0.2;         // hover 시 느려지는 속도
  let speed = speedNormal;       // 현재 적용할 속도 변수 (초기값은 기본 속도)

  // === 요소 복제 및 초기 위치 설정 ===

  const $clone = $group.clone();       // 원본 그룹을 복제해서 복사본 생성
  $(".marquee").append($clone);        // marquee 영역에 복사본 추가

  $clone.css("left", $group.width());  // 복사본은 원본 너비만큼 오른쪽에 위치시킴

  let pos1 = 0;                        // 원본 그룹의 현재 left 위치
  let pos2 = $group.width();          // 복사본의 현재 left 위치 (원본 다음에 붙음)

  // === 애니메이션 루프 함수 ===
  function animateMarquee() {
    pos1 -= speed;  // 원본 그룹 왼쪽으로 이동
    pos2 -= speed;  // 복사본도 동일하게 이동

    // 원본 그룹이 화면 왼쪽 밖으로 완전히 나가면 위치 재설정 (복사본 뒤로 이동)
    if (pos1 <= -$group.width()) {
      pos1 = $group.width();
    }

    // 복사본도 동일하게 처리
    if (pos2 <= -$clone.width()) {
      pos2 = $clone.width();
    }

    // 계산된 위치를 실제 DOM에 적용
    $group.css("left", pos1 + "px");
    $clone.css("left", pos2 + "px");

    // 다음 프레임에 다시 실행 (무한 루프)
    requestAnimationFrame(animateMarquee);
  }

  // 애니메이션 시작
  animateMarquee();

  // === 마우스 이벤트로 속도 조절 ===

  // 마우스를 올리면 속도를 느리게
  $(".marquee").on("mouseenter", function () {
    speed = speedSlow;
  });

  // 마우스를 내리면 원래 속도로 복구
  $(".marquee").on("mouseleave", function () {
    speed = speedNormal;
  });
});


// 오른쪽 퀵버튼
$(window).on('scroll', function () {
  const box = $('.right-quick'); // 따라다니는 박스
  const footer = $('footer'); // 푸터

  const boxHeight = box.outerHeight(); // 박스 높이
  const footerTop = footer.offset().top; // 푸터가 문서에서 얼마나 아래에 있는지
  const scrollY = $(window).scrollTop(); // 지금 스크롤 얼마나 내렸는지
  const winHeight = $(window).height(); // 브라우저 창 높이

  // 박스가 지금 어디쯤인지 계산해보기
  const boxBottom = scrollY + winHeight - boxHeight - -110;

  // 박스가 푸터랑 겹치려 하면 멈추게
  if (window.innerWidth > 768) {
    // pc버전
    if (boxBottom > footerTop) {
      box.css({
        position: 'absolute', // 고정된 거 아니고, 페이지 안에서 위치 고정
        top: footerTop - boxHeight - 50 + 'px', // 푸터보다 살짝 위에
        right: '30px',
      });
    } else {
      // 아직 푸터 안 닿았으면 계속 따라다니기
      box.css({
        position: 'fixed', // 화면에 고정
        top: '790px', // 아래쪽에 띄워놓기
        right: '30px',
      });
    }
  }
  // 모바일 버전
  else {
    if (boxBottom > footerTop) {
      box.css({
        position: 'absolute', // 고정된 거 아니고, 페이지 안에서 위치 고정
        top: footerTop - boxHeight - 30 + 'px', // 푸터보다 살짝 위에
        right: '20px',
      });
    } else {
      // 아직 푸터 안 닿았으면 계속 따라다니기
      box.css({
        position: 'fixed', // 화면에 고정
        top: '88%', // 아래쪽에 띄워놓기
        right: '20px',
      });
    }
  }
});

// 모바일- 섹션 2 스와이퍼
var swiper = new Swiper('.mySwiper', {
  slidesPerView: 1,
  centeredSlides: false,
  spaceBetween: 20,
  loop: false,
  slidesOffsetBefore: 20, // 왼쪽 여백
  slidesOffsetAfter: 20, // 오른쪽 여백
  breakpoints: {
    0: {
      slidesPerView: 1.2, // 모바일
    },
    768: {
      slidesPerView: 3, // 데스크탑
    },
  },
});


// 팝업 스와이퍼
var popupSwiper = new Swiper('.popupSwiper', {
  spaceBetween: 30,
  centeredSlides: false,
  simulateTouch: true,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  on: {
    slideChange: function () {
      const current = this.realIndex + 1;
      // 숫자만 있는 <span class="counter">만 업데이트!
      document.querySelector('#popup_counter .counter').textContent = current;
    },
  },
});

// 팝업 닫기
$('.p_btn-box > span').click(function () {
  $('.pop-up-box').addClass('active');
});
$('.close-btn').click(function () {
  $('.pop-up-box').removeClass('active');
});
