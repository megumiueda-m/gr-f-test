// ハンバーガーメニュー
const button = document.querySelector('.hamburger');
const nav = document.querySelector('.hamburger_nav');
const anchors = document.querySelectorAll('.hamburger_nav a');

if (button && nav) {
  button.addEventListener('click', () => {
    button.classList.toggle('open');
    nav.classList.toggle('open');
  });

  anchors.forEach(anchor => {
    anchor.addEventListener('click', () => {
      button.classList.remove('open');
      nav.classList.remove('open');
    });
  });
}

  //フェードイン
document.addEventListener("DOMContentLoaded", () => {
  const fadeElements = document.querySelectorAll(".fade-in");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        // 一度だけフェードインさせたい場合
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1 // 10%見えたら発火
  });

  fadeElements.forEach((el) => observer.observe(el));
});


/* タブ切り替え */

const tabBtns = document.querySelectorAll(".tab-btn");
const tabContents = document.querySelectorAll(".tab-content");

tabBtns.forEach(btn => {

  btn.addEventListener("click", () => {

    tabBtns.forEach(b => b.classList.remove("active"));
    tabContents.forEach(c => c.classList.remove("active"));

    btn.classList.add("active");

    const target = document.getElementById(btn.dataset.tab);
    target.classList.add("active");

  });

});


/* アコーディオン */

const jobs = document.querySelectorAll(".job-header");

jobs.forEach(job => {

  job.addEventListener("click", () => {

    const parent = job.parentElement;
    parent.classList.toggle("open");

  });

});