gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.create({
  trigger: "#gallery1",          // when gallery hits viewport
  start: "top 95%",             // (almost at bottom)
  onEnter: () => gsap.to("#skip", { opacity: 0, duration: 0.3 }),
  onLeaveBack: () => gsap.to("#skip", { opacity: 1, duration: 0.3 })
});


const stack = document.getElementById('polaroid-stack');
const desc  = document.getElementById('desc-card');
let highest = 2;                 // top z-index tracker

/* ---------- random scatter on load ---------- */
stack.querySelectorAll('.polaroid').forEach(img => {
  const maxX = stack.clientWidth  - 200;
  const maxY = stack.clientHeight - 250;
  img.style.left = `${Math.random() * maxX}px`;
  img.style.top  = `${Math.random() * maxY}px`;
  img.style.transform = `rotate(${(Math.random()*20-10)}deg)`;
});

/* ---------- drag ---------- */
stack.querySelectorAll('.polaroid').forEach(img => {
  let dragging = false, offsetX, offsetY;

  img.addEventListener('mousedown', start);
  img.addEventListener('touchstart', start);

  function start(e) {
    dragging = true;
    img.style.zIndex = ++highest;   // bring to very top
    const pt = e.touches ? e.touches[0] : e;
    offsetX = pt.clientX - img.offsetLeft;
    offsetY = pt.clientY - img.offsetTop;

    document.addEventListener('mousemove', move);
    document.addEventListener('mouseup', end);
    document.addEventListener('touchmove', move);
    document.addEventListener('touchend', end);
  }

  function move(e) {
    if (!dragging) return;
    const pt = e.touches ? e.touches[0] : e;
    img.style.left = (pt.clientX - offsetX) + 'px';
    img.style.top  = (pt.clientY - offsetY) + 'px';
  }

  function end() {
    dragging = false;
    img.style.zIndex = --highest;   // drop one layer (no fade)
    document.removeEventListener('mousemove', move);
    document.removeEventListener('mouseup', end);
    document.removeEventListener('touchmove', move);
    document.removeEventListener('touchend', end);
  }
});

desc.addEventListener('click', () => desc.classList.add('behind'));