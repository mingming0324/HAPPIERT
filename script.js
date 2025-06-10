console.clear();
const group = document.querySelector(".mq-group");
console.log(group.offsetWidth);

let lastScrollTop = 0;
const header = document.querySelector('.main-header');
const threshold = 100;           // 스크롤이 이 정도 이상 내려가야 반응
const minScrollDelta = 5;       // 변화폭 민감도 ↑

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