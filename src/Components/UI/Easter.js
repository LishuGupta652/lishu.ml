import React from "react";

function Easter() {
  const createHeart = () => {
    console.log("clicked something");
    for (let i = 0; i < 10; i++) {
      const heart = document.createElement("div");
      const test = document.getElementById("createHeart");

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
  return (
    <div className="easter">
      <div onClick={createHeart} className="easter-button">
        💓 ITH EASTER EGGS 💗
      </div>
      <div className="create-heart-container" id="createHeart"></div>
    </div>
  );
}

export default Easter;
