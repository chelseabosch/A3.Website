gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.create({
  trigger: "#gallery1",          // when gallery hits viewport
  start: "top 95%",             // (almost at bottom)
  onEnter: () => gsap.to("#skip", { opacity: 0, duration: 0.3 }),
  onLeaveBack: () => gsap.to("#skip", { opacity: 1, duration: 0.3 })
});

const stack = document.getElementById('polaroid-stack');
let highest = 1;

stack.querySelectorAll('.polaroid').forEach(img => {
  let dragging = false, offX, offY;

  img.addEventListener('mousedown', start);
  img.addEventListener('touchstart', start);

  function start(e) {
    dragging = true;
    img.style.zIndex = ++highest;
    img.style.cursor = 'grabbing';

    const pt = e.touches ? e.touches[0] : e;
    offX = pt.clientX - img.offsetLeft;
    offY = pt.clientY - img.offsetTop;

    document.addEventListener('mousemove', move);
    document.addEventListener('mouseup', end);
    document.addEventListener('touchmove', move);
    document.addEventListener('touchend', end);
  }

  function move(e) {
    if (!dragging) return;
    const pt = e.touches ? e.touches[0] : e;
    img.style.left = (pt.clientX - offX) + 'px';
    img.style.top = (pt.clientY - offY) + 'px';
  }

  function end() {
    dragging = false;
    img.style.cursor = 'grab';
    document.removeEventListener('mousemove', move);
    document.removeEventListener('mouseup', end);
    document.removeEventListener('touchmove', move);
    document.removeEventListener('touchend', end);
  }
});

const openBtn = document.getElementById("openModal");
const closeBtn = document.getElementById("closeModal");
const modal = document.getElementById("modal");

openBtn.addEventListener("click",() => {
  modal.classList.add("open");
});

closeBtn.addEventListener("click", () => {
  modal.classList.remove("open");
})

