import React from "react";
import "../css/test.scss";

function Test() {
  const createHeart = () => {
    for (let i = 0; i < 10; i++) {
      const heart = document.createElement("div");
      const test = document.getElementById("test");

      const randomNumSec = Math.random() * 1 + 3;
      heart.classList.add("heart");
      heart.style.left = Math.random() * 100 + "vw";
      heart.style.animationDuration = randomNumSec + "s";
      const heartList = [
        "♥",
        "💘",
        "💖",
        "💗",
        "💓",
        "💙",
        "💚",
        "💛",
        "💜",
        "🧡",
        "💝",
        "🖤",
      ];
      heart.innerText = heartList[Math.floor(Math.random() * heartList.length)];
      test.appendChild(heart);

      setTimeout(() => {
        heart.remove();
      }, randomNumSec * 1000);
    }
  };
  //   const interval = setInterval(createHeart, 300);
  return (
    <div className="test" id="test">
      <button onClick={createHeart}>Click Me</button>
    </div>
  );
}

export default Test;
