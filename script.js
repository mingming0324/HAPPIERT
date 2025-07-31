console.clear();

// 사이드메뉴 위아래
$(".side-btn").click(function() {
  $(".side-box").addClass("active");
  $(".top-banner").addClass("m_active");
});
$(".close-btn").click(function() {
  $(".side-box").removeClass("active");
  setTimeout(function(){
    $(".top-banner").removeClass("m_active");
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

$(window).on('scroll', function () {
  const box = $('.right-quick'); // 따라다니는 박스
  const footer = $('footer'); // 푸터

  const boxHeight = box.outerHeight(); // 박스 높이
  const footerTop = footer.offset().top; // 푸터가 문서에서 얼마나 아래에 있는지
  const scrollY = $(window).scrollTop(); // 지금 스크롤 얼마나 내렸는지
  const winHeight = $(window).height(); // 브라우저 창 높이

  // 박스가 지금 어디쯤인지 계산해보기
  const boxBottom = scrollY + winHeight - boxHeight - 100;

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
      top: '82%', // 아래쪽에 띄워놓기
      right: '30px',
    });
  }
}
// 모바일 버전
else  {
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


// 모바일 스와이퍼
var swiper = new Swiper('.mySwiper', {
  slidesPerView: 1,
  centeredSlides: false,
  spaceBetween: 20,
  loop: false,
  slidesOffsetBefore: 20, // 왼쪽 여백
  slidesOffsetAfter: 20,  // 오른쪽 여백
  breakpoints: {
    0: {
      slidesPerView: 1.2,   // 모바일
    },
    768: {
      slidesPerView: 3,   // 데스크탑
    }
  }
});

// var appendNumber = 4;
// var prependNumber = 1;
// document.querySelector('.prepend-2-slides').addEventListener('click', function (e) {
//   e.preventDefault();
//   swiper.prependSlide([
//     '<div class="swiper-slide">Slide ' + --prependNumber + '</div>',
//     '<div class="swiper-slide">Slide ' + --prependNumber + '</div>',
//   ]);
// });
// document.querySelector('.prepend-slide').addEventListener('click', function (e) {
//   e.preventDefault();
//   swiper.prependSlide('<div class="swiper-slide">Slide ' + --prependNumber + '</div>');
// });
// document.querySelector('.append-slide').addEventListener('click', function (e) {
//   e.preventDefault();
//   swiper.appendSlide('<div class="swiper-slide">Slide ' + ++appendNumber + '</div>');
// });
// document.querySelector('.append-2-slides').addEventListener('click', function (e) {
//   e.preventDefault();
//   swiper.appendSlide([
//     '<div class="swiper-slide">Slide ' + ++appendNumber + '</div>',
//     '<div class="swiper-slide">Slide ' + ++appendNumber + '</div>',
//   ]);
// });

// 팝업 스와이퍼
var popupSwiper = new Swiper(".popupSwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  on: {
    slideChange: function () {
      const current = this.realIndex + 1;
      // 숫자만 있는 <span class="counter">만 업데이트!
      document.querySelector("#popup_counter .counter").textContent = current;
    }
  }
});

// 팝업 닫기
$(".p_btn-box > span").click(function() {
  $(".pop-up-box").addClass("active");
});
$(".close-btn").click(function() {
  $(".pop-up-box").removeClass("active");

});
