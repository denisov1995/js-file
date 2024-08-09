// JS
import "jquery";
import "./elements/global";
import Swiper from "swiper";
import { Navigation, Pagination, Scrollbar } from "swiper/modules";
Swiper.use([Navigation, Pagination, Scrollbar]);
// Styles
import "../styles/main.scss";
import { event } from "jquery";

const menu = document.querySelector(".menu");
const telBtn = document.querySelector(".tel-btn");
const contacts = document.querySelector(".contacts");
const education = document.querySelector(".education");
const educationMain = document.querySelector(".education_main");
const advantages = document.querySelector(".advantages");
const university = document.querySelector(".university");
const services = document.querySelector(".services");
const testimonials = document.querySelector(".testimonials");
const reviewsRating = document.querySelector(".reviews-rating");

if (advantages) {
  const swiper = new Swiper(".swiper-advantages", {
    slidesPerView: 3,
    spaceBetween: 65,
    // slidesPerView: 1,
    // Navigation arrows

    navigation: {
      nextEl: ".swiper-advantages-button-next",
      prevEl: ".swiper-advantages-button-prev",
    },

    pagination: {
      el: ".swiper-pagination",
    },
  });

  const swiperAdvantages = document.querySelector(".advantages .container");
  const bullets = swiperAdvantages.querySelectorAll(
    ".swiper-pagination-bullet"
  );

  bullets.forEach((el) => {
    const bulletWidth = 100 / bullets.length + "%";

    el.style.width = bulletWidth;
  });
}

menu.addEventListener("click", (event) => {
  const menuButton = event.target.closest(".menu-button");
  const parent = event.target.closest(".menu-item");
  const submenu = parent.querySelector(".submenu");

  if (menuButton) {
    submenu.classList.toggle("active");
    menuButton.classList.toggle("active");
  }
});

telBtn.addEventListener("click", (event) => {
  const telBtn = event.target.closest(".tel-btn");

  if (telBtn) {
    contacts.classList.toggle("active");
  }
});

if (education) {
  document.addEventListener("DOMContentLoaded", function () {
    const maxItems = 4;
    const textDisplayMore = "Показать";
    const textRollUp = "Свернуть";
    const catLists = document.querySelectorAll(".pr_catalog_list");

    catLists.forEach(function (list) {
      const items = list.querySelectorAll(".education_card");
      const showMore = document.createElement("span");
      showMore.textContent = textDisplayMore;
      showMore.classList.add("show-more");

      if (items.length > maxItems) {
        for (let i = 0; i < maxItems; i++) {
          items[i].classList.add("visible");
        }
        list.appendChild(showMore);
      }

      showMore.addEventListener("click", function () {
        if (showMore.textContent === textDisplayMore) {
          items.forEach(function (item) {
            item.classList.add("visible");
          });
          showMore.textContent = textRollUp;
        } else {
          for (let i = maxItems; i < items.length; i++) {
            items[i].classList.remove("visible");
          }
          showMore.textContent = textDisplayMore;
        }
      });
    });
  });
}

if (university) {
  document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".university .categories button");
    const cards = document.querySelectorAll(
      ".university_cards .university_card"
    );
    let count = 0;
    cards.forEach((card) => {
      if (card.getAttribute("data-category") === "Wien" && count < 6) {
        card.style.display = "flex";
        count += 1;
      }
    });

    buttons.forEach((button) => {
      button.addEventListener("click", function () {
        count = 0;
        const category = this.getAttribute("data-category");
        buttons.forEach((el) => {
          if (el.classList.contains("active")) {
            el.classList.remove("active");
          }
        });

        button.classList.add("active");

        cards.forEach((card) => {
          if (card.getAttribute("data-category") === category && count < 6) {
            card.style.display = "flex";
            count += 1;
          } else {
            card.style.display = "none";
          }
        });
      });
    });
  });
}

if (educationMain) {
  var jsTriggers = document.querySelectorAll(".education_js-tab-trigger"),
    jsContents = document.querySelectorAll(".education_js-tab-content");

  jsTriggers.forEach(function (trigger) {
    trigger.addEventListener("click", function () {
      var id = this.getAttribute("data-tab"),
        content = document.querySelector(
          '.education_js-tab-content[data-tab="' + id + '"]'
        ),
        activeTrigger = document.querySelector(
          ".education_js-tab-trigger.active"
        ),
        activeContent = document.querySelector(
          ".education_js-tab-content.active"
        );

      activeTrigger.classList.remove("active");
      trigger.classList.add("active");

      activeContent.classList.remove("active");
      content.classList.add("active");
    });
  });

  const faqs = document.querySelectorAll(".faq");

  faqs.forEach((faq) => {
    faq.addEventListener("click", () => {
      faq.classList.toggle("active");
    });
  });
}

if (services) {
  const swiper_services = new Swiper(".swiper_services ", {
    spaceBetween: 10,
    slidesPerView: 4,

    loop: false,

    navigation: {
      nextEl: ".swiper-services-button-next",
      prevEl: ".swiper-services-button-prev",
    },
    scrollbar: {
      el: ".swiper-scrollbar",
      draggable: true,
    },
  });
}

if (testimonials) {
  const swiper_testimonials = new Swiper(".swiper_pop_up ", {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 1,

    navigation: {
      nextEl: ".swiper-button-next-pop-up",
    },

    scrollbar: {
      el: ".swiper-scrollbar",
      draggable: true,
    },
  });

  testimonials.addEventListener("click", (event) => {
    const card = event.target.closest(".wrapper-card");
    const closeIcon = event.target.closest(".close-icon");
    const popUp = card.querySelector(".pop-up-card");
    const overlay = testimonials.querySelector(".overlay");

    if (card) {
      popUp.classList.add("active");
      overlay.classList.add("active");
    }

    if (closeIcon) {
      popUp.classList.remove("active");
      overlay.classList.remove("active");
    }
  });
}

if (reviewsRating) {
  const swiper_reviews = new Swiper(".swiper_reviews", {
    // loop: true,
    spaceBetween: 10,
    slidesPerView: 1,

    navigation: {
      prevEl: ".swiper-button-prev-reviews",
      nextEl: ".swiper-button-next-reviews",
    },

    // scrollbar: {
    //   el: ".swiper-scrollbar",
    //   draggable: true,
    // },
  });
}