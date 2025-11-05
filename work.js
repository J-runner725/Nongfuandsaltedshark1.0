// 侧边栏
document.querySelector(".menu-btn").addEventListener("click", () => {
  document.querySelector(".menu").classList.toggle("show");
  document.querySelector(".menu").style.display =
    document.querySelector(".menu").classList.contains("show") ? "flex" : "none";
});

// 主图浮现动画
window.addEventListener("scroll", () => {
  const main = document.querySelector(".main-image");
  if (window.scrollY > 100) main.classList.add("shrink");
});

// 页面载入时主图浮现
window.addEventListener("load", () => {
  document.querySelector(".main-image").classList.add("active");
});

// 拼贴滑入
window.addEventListener("scroll", () => {
  const collage = document.querySelectorAll(".photo");
  const trigger = window.innerHeight * 0.8;
  collage.forEach((p) => {
    const rect = p.getBoundingClientRect();
    if (rect.top < trigger) p.classList.add("show");
  });
});
