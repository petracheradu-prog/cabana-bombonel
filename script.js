// Mobile menu
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Close mobile menu on click
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});

// Swiper slider
const swiper = new Swiper(".exteriorSwiper", {
  loop: true,
  speed: 900,
  spaceBetween: 20,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// Dormitoare slider
const roomSwiper = new Swiper(".roomSwiper", {
  loop: true,
  speed: 800,
  spaceBetween: 24,
  slidesPerView: 1,
  navigation: {
    nextEl: ".room-next",
    prevEl: ".room-prev",
  },
  pagination: {
    el: ".room-pagination",
    clickable: true,
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1100: {
      slidesPerView: 3,
    }
  }
});

// Baie slider
const bathSwiper = new Swiper(".bathSwiper", {
  loop: true,
  speed: 800,
  spaceBetween: 24,
  slidesPerView: 1,
  navigation: {
    nextEl: ".bath-next",
    prevEl: ".bath-prev",
  },
  pagination: {
    el: ".bath-pagination",
    clickable: true,
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1100: {
      slidesPerView: 3,
    }
  }
});

// Loc de joacă slider
const playSwiper = new Swiper(".playSwiper", {
  loop: true,
  speed: 800,
  spaceBetween: 24,
  slidesPerView: 1,
  navigation: {
    nextEl: ".play-next",
    prevEl: ".play-prev",
  },
  pagination: {
    el: ".play-pagination",
    clickable: true,
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1100: {
      slidesPerView: 3,
    }
  }
});

// Lightbox
const galleryItems = document.querySelectorAll(".gallery-item");
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const lightboxClose = document.getElementById("lightboxClose");

galleryItems.forEach(item => {
  item.addEventListener("click", () => {
    const imageSrc = item.getAttribute("data-image");
    lightboxImage.src = imageSrc;
    lightbox.classList.add("active");
    document.body.style.overflow = "hidden";
  });
});

lightboxClose.addEventListener("click", closeLightbox);
lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) closeLightbox();
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeLightbox();
});

function closeLightbox() {
  lightbox.classList.remove("active");
  document.body.style.overflow = "";
}

// GSAP animations
gsap.registerPlugin(ScrollTrigger);

// Hero intro animation
gsap.from(".hero-kicker", {
  y: 30,
  opacity: 0,
  duration: 1,
  delay: 0.2,
  ease: "power3.out"
});

gsap.from(".hero-title", {
  y: 50,
  opacity: 0,
  duration: 1.2,
  delay: 0.4,
  ease: "power3.out"
});

gsap.from(".hero-text", {
  y: 30,
  opacity: 0,
  duration: 1,
  delay: 0.7,
  ease: "power3.out"
});

gsap.from(".hero .btn", {
  y: 20,
  opacity: 0,
  duration: 1,
  delay: 1,
  ease: "power3.out"
});

// Reveal animations on scroll
gsap.utils.toArray(".reveal").forEach((el) => {
  gsap.to(el, {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: el,
      start: "top 85%",
      once: true,
    }
  });
});

gsap.utils.toArray(".reveal-left").forEach((el) => {
  gsap.fromTo(el,
    { opacity: 0, x: -60 },
    {
      opacity: 1,
      x: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: el,
        start: "top 85%",
        once: true,
      }
    }
  );
});

gsap.utils.toArray(".reveal-right").forEach((el) => {
  gsap.fromTo(el,
    { opacity: 0, x: 60 },
    {
      opacity: 1,
      x: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: el,
        start: "top 85%",
        once: true,
      }
    }
  );
});
new Swiper(".facilitatiSwiper", {
loop:true,
spaceBetween:25,
slidesPerView:1,
navigation:{
nextEl:".fac-next",
prevEl:".fac-prev"
},
breakpoints:{
768:{slidesPerView:2},
1100:{slidesPerView:3}
}
});

new Swiper(".naturaSwiper", {
loop:true,
spaceBetween:25,
slidesPerView:1,
navigation:{
nextEl:".nat-next",
prevEl:".nat-prev"
},
breakpoints:{
768:{slidesPerView:2},
1100:{slidesPerView:3}
}
});

// Parallax hero background
gsap.to(".parallax-bg", {
  yPercent: 12,
  ease: "none",
  scrollTrigger: {
    trigger: ".hero",
    start: "top top",
    end: "bottom top",
    scrub: true
  }
});