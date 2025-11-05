// 侧边栏开关
document.querySelector(".menu-btn").addEventListener("click", () => {
  const menu = document.querySelector(".menu");
  menu.classList.toggle("show");
  menu.style.display = menu.classList.contains("show") ? "flex" : "none";
});

// 主图出现逻辑
window.addEventListener("load", () => {
  document.querySelector("#main1").classList.add("active");
});

// 滚动逻辑
window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  const winH = window.innerHeight;

  const main1 = document.querySelector("#main1");
  const main2 = document.querySelector("#main2");
  const collage = document.querySelectorAll(".photo");

  // 第一张主图缩小触发点
  if (scrollY > winH * 0.4) main1.classList.add("shrink");

  // 第二张主图出现
  if (scrollY > winH * 0.9) main2.classList.add("active");
  if (scrollY > winH * 1.4) main2.classList.add("shrink");

  // 拼贴滑入
  const trigger = winH * 1.8;
  collage.forEach((p) => {
    const rect = p.getBoundingClientRect();
    if (rect.top < winH * 0.9) p.classList.add("show");
  });
});
