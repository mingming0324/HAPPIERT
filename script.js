console.clear();
let prevScrollPos = window.pageYOffset;
const header = document.querySelector("header");

window.addEventListener("scroll", function () {
  const currentScrollPos = window.pageYOffset;

  if (prevScrollPos > currentScrollPos) {
    // 스크롤 올릴 때 → 헤더 보이기
    header.style.top = "0";
  } else {
    // 스크롤 내릴 때 → 헤더 숨기기
    header.style.top = "-150px"; // 헤더 전체 높이에 맞게 조절 (배너 + main-box)
  }

  prevScrollPos = currentScrollPos;
});


$(window).on('scroll', function () {
  const box = $('.right-quick');     // 따라다니는 박스
  const footer = $('footer');      // 푸터

  const boxHeight = box.outerHeight();     // 박스 높이
  const footerTop = footer.offset().top;   // 푸터가 문서에서 얼마나 아래에 있는지
  const scrollY = $(window).scrollTop();   // 지금 스크롤 얼마나 내렸는지
  const winHeight = $(window).height();    // 브라우저 창 높이

  // 박스가 지금 어디쯤인지 계산해보기
  const boxBottom = scrollY + winHeight - boxHeight - 100;

  // 박스가 푸터랑 겹치려 하면 딱 멈추게!
  if (boxBottom > footerTop) {
    box.css({
      position: 'absolute', // 고정된 거 아니고, 페이지 안에서 위치 고정
      top: footerTop - boxHeight - 20 + 'px', // 푸터보다 살짝 위에
      right: '4%',
    });
  } else {
    // 아직 푸터 안 닿았으면 계속 따라다니기
    box.css({
      position: 'fixed',  // 화면에 고정
      top: '70%',         // 아래쪽에 띄워놓기
      right: '4%',
    });
  }
});