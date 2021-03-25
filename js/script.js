"use stict";

const heart = document.querySelector(".like img");
const bookmark = document.querySelector(".bookmark img");

function onClickChangeImg(item, img, img2) {
  item.addEventListener("click", e => {
    if (item.src === `http://127.0.0.1:5500${img2}`) {
      item.src = img;
    } else {
      item.src = img2;
    }
  });
}

onClickChangeImg(heart, "/img/Heart-active.svg", "/img/Heart.svg");

onClickChangeImg(bookmark, "/img/Bookmark-active.svg", "/img/Bookmark.svg");
