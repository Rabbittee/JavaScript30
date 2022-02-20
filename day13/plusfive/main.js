/*
 * @Author:Claire Li
 * @Date:2022-02-16 23:56:43
 * @LastEditors:Claire Li
 * @LastEditTime:2022-02-20 20:13:19
 * @Description:
 */
const selectAll = (query) => document.querySelectorAll(query);

const slideImage = (img) => {
  img.classList.add('active');
};

const callback = (entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;

    slideImage(entry.target);
  });
};

// 建立 observer
const observer = new IntersectionObserver(callback, {
  // root: container, // 原本設置成 <div class="site-wrap"> 但會導致所有的圖片在一開始就一起被載入
  rootMargin: '0px',
  threshold: 0.5,
});

// 觀察每一張圖片
selectAll('.slide-in').forEach((el) => observer.observe(el));
