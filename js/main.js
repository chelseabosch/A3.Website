
gsap.registerPlugin(ScrollTrigger);
//---------------PARALLAX SCROLL HERO---------// AI used to understand how to make it more dynamic and understand gsap code
gsap.utils.toArray(".personality").forEach(section => {
  const bg = section.querySelector(".bg-img");
  gsap.to(bg, {
    yPercent: 0,                     // move up while we scroll down
    ease: "none",
    scrollTrigger: {
    trigger: section,
    start: "top bottom",             // when top of section hits bottom of vp
    end: "bottom top",
    scrub: true                      // link to scroll position
    }
  });
});
/* 2.  FADE + SLIDE  – shoe and container pop in once */
gsap.utils.toArray(".personality").forEach(section => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: section,
      start: "top 80%",  
      end: "bottom 20%",
      toggleActions: "play none none reverse",
      invalidateOnRefresh: true,   
      anticipatePin: 1     
    }
  });
  tl.from(section.querySelector(".shoe"), {
    opacity: 0,
    x: 80,                            // slide up from below
    duration: .7,
    ease: "power2.out"
  })
  .from(section.querySelector(".container"), {
    opacity: 0,
    y: 50,
    duration: .7,
    ease: "power2.out"
  });                          // overlap slightly
});

//-----------------SKIP HERO BUTTON--------------//  AI used to troubleshoot this feature
ScrollTrigger.create({
  trigger: "#gallery1",          // when gallery hits viewport
  start: "top 95%",             // (almost at bottom)
  onEnter: () =>{ gsap.to("#skip", { opacity: 0, duration: 0.3 }),
  gsap.to(".scrollbar", { opacity: 0, duration: 0.3, pointerEvents: "none" });
},
  onLeaveBack: () =>{ gsap.to("#skip", { opacity: 1, duration: 0.3, pointerEvents: "auto" })
   gsap.to(".scrollbar", { opacity: 1, duration: 0.3 });
}
});

//------------  POLAROID CLICK AND DRAG --------------// AI used to understand and troubleshoot this code, struggle to find  tutorials specific to this idea
const stack = document.getElementById('polaroid-stack');
const cardZ = 100;                 // #desc-card z-index
let highest = cardZ; 

stack.querySelectorAll('.polaroid').forEach(img => {
  let dragging = false, offX, offY;

  img.addEventListener('mousedown', start);
  img.addEventListener('touchstart', start);

  function start(e) {
    dragging = true;
    highest++;
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

//--IMAGE REVEAL--//
gsap.from('.polaroid', {
  scrollTrigger: {
      trigger: ".polaroid",
      pin: true, 
      start: "top bottom"
    },
    y: 200, 
    opacity: 0, 
    stagger: 0.2,
    duration: 2,
    ease: "power4.out"
  });


//-----ANIMATED TIMELINE SCROLL------------//
document.addEventListener('DOMContentLoaded', () => {
const observerImg = new IntersectionObserver((entries) => {
  
  entries.forEach((entry) =>{
  console.log(entry)
  if (entry.isIntersecting) {
  entry.target.classList.add('showimg');
  } else {
  entry.target.classList.remove('showimg');
  }
  });
});
    const hiddenImg = document.querySelectorAll('.imghidden');
    hiddenImg.forEach((el) => observerImg.observe(el));

const observerTag = new IntersectionObserver((entries) => {
  
  entries.forEach((entry) =>{
    console.log(entry)
    if (entry.isIntersecting) {
      entry.target.classList.add('showtag');
    } else {
      entry.target.classList.remove('showtag');
    }
  });
});

const hiddenTag = document.querySelectorAll('.taghidden');
hiddenTag.forEach((el) => observerTag.observe(el));

});
//-------------INFO POPUP CONVERSE-------------// AI used to help understand how to activate this shoelace component
const star1 = document.getElementById('star1');
const popup1 = document.getElementById('popup1');

popup1.anchor = star1;

star1.addEventListener('click', () => {
  popup1.active = !popup1.active;
});

document.addEventListener('click', e => {
  if (!e.composedPath().included(star1) && !e.composedPath().included(popup1))
    popup1.active = false;
})
//-----2------//
const star2 = document.getElementById('star2');
const popup2 = document.getElementById('popup2');

popup2.anchor = star2;

star2.addEventListener('click', () => {
  popup2.active = !popup2.active;
});

document.addEventListener('click', e => {
  if (!e.composedPath().included(star2) && !e.composedPath().included(popup2))
    popup2.active = false;
})
//-----3------//
const star3 = document.getElementById('star3');
const popup3 = document.getElementById('popup3');

popup3.anchor = star3;

star3.addEventListener('click', () => {
  popup3.active = !popup3.active;
});

document.addEventListener('click', e => {
  if (!e.composedPath().included(star3) && !e.composedPath().included(popup3))
    popup3.active = false;
})
//-----4------//
const star4 = document.getElementById('star4');
const popup4 = document.getElementById('popup4');

popup4.anchor = star4;

star4.addEventListener('click', () => {
  popup4.active = !popup4.active;
});

document.addEventListener('click', e => {
  if (!e.composedPath().included(star4) && !e.composedPath().included(popup4))
    popup4.active = false;
})
//-----5------//
const star5 = document.getElementById('star5');
const popup5 = document.getElementById('popup5');

popup5.anchor = star5;

star5.addEventListener('click', () => {
  popup5.active = !popup5.active;
});

document.addEventListener('click', e => {
  if (!e.composedPath().included(star5) && !e.composedPath().included(popup5))
    popup5.active = false;
})

//-------SVG STAR ANIMATION--------//
const stars = document.querySelectorAll(".shine");

stars.forEach((star) => {
  gsap.to(star, {
    scale: () => gsap.utils.random(8, 12),
    rotation: () => gsap.utils.random (-180,180),
    duration: () => gsap.utils.random(0.5, 0.7),
    transformOrigin: "center",
    ease: "power2.inOut",
    delay: Math.random() * 2,
    repeat: -1,
    yoyo: true,

  });
});

//----SOUND---//

var sound   = new Audio('sound.mp3');
var playing = false;          // flag

function playSound() {        // ← the function you already call
  if (playing) {
    sound.pause();
  } else {
    sound.play();
  }
  playing = !playing;         // toggle flag
}

//----------------  STYLE----FULL-SCREEN MENU POPUP----------//

function openNavStyle() {
  document.getElementById("navStyle").style.height = "100vh";
}
function closeNavStyle() {
  document.getElementById("navStyle").style.height = "0";
}
//----------------  MAIN----HALF-SCREEN MENU POPUP----------//
function openNavMain() {
  const height = window.innerWidth < 750 ? '100vh' : '30vh';
  document.getElementById("navMenu").style.height = height;
   document.body.classList.add('menu-open')
}
function closeNavMain() {
  document.getElementById("navMenu").style.height = "0";
   document.body.classList.remove('menu-open')
}
//---RESPONSIVE-HALF----//
//-------------SCROLL BAR-------------//
const dots = document.querySelectorAll(".scrollbar a");

const removeActiveClass = () => {
  dots.forEach((dot) => {
    dot.classList.remove("active");
  });
};

const addActiveClass = (entries, scrollIndicator) => {
  entries.forEach(entry =>{
    if(entry.isIntersecting){
      let currentDot = document.querySelector(
        `.scrollbar a[href='#${entry.target.id}']`
      );
      removeActiveClass();
      currentDot.classList.add("active");
    }
  })
};
const options = {
  threshold: 0.8,
};

const scrollIndicator = new IntersectionObserver( addActiveClass, options)
const sections = document.querySelectorAll(".personality");

sections.forEach((section) => {
  scrollIndicator.observe(section);
});

const scrollMin = document.querySelector(".scrollbar");
const scrollMinArrow = document.querySelector(".scrollbar .arrow");

scrollMinArrow.addEventListener("click", () => {
  scrollMin.classList.toggle("active");
});

const io = new IntersectionObserver(
    (entries) => {
      const anyOn = entries.some(e => e.isIntersecting);
      bar.classList.toggle("hidden", !anyOn);
    },
    { threshold: 0.1 }
  );
  document.querySelectorAll(".personality").forEach(s => io.observe(s));

//--------------------UPLOAD IMG------------------//

const dropArea = document.getElementById("drop-area");
const btn = document.querySelector("#refresh");
const inputFile = document.getElementById("input-file");
const imageView = document.getElementById("img-view");

inputFile.addEventListener("change", uploadImage);

function uploadImage(){
    let imgLink = URL.createObjectURL(inputFile.files[0]);
    imageView.style.backgroundImage = `url(${imgLink})`;
    imageView.textContent = "";
    imageView.style.border = 0
  btn.addEventListener('click', function (){
    imageView.style.backgroundImage = "";
    imageView.style.border = "";
  })
}

//-----------------SHOELACE UPLOAD DIALOG---------------------//
const dialog = document.querySelector('.img-upload-msg');
const openBtn = document.getElementById('open-dialog');
const closeBtn = dialog.querySelector('sl-button[slot="footer"]');

openBtn.addEventListener('click', () =>  dialog.show());
closeBtn.addEventListener('click', dialog.hide());

//--------------CONVERSE STAR REVEAL----------------//
gsap.from('.star', {
  scrollTrigger: {
      trigger: ".star",
      start: "top 80%"
    },
    toggleActions: 'play none none reverse',
    y: 200, 
    opacity: 0, 
    stagger: 0.2,
    duration: 2,
    ease: "power4.out"
  });

 //-----------------------MOBILE-MENU-----------------------//
function mobileMenu(){
  const navMobile = document.querySelector('.navbar-mobile')
  navMobile.style.display = 'flex'
}
function hideMobileMenu(){
    const navMobile = document.querySelector('.navbar-mobile')
  navMobile.style.display = 'none'
}