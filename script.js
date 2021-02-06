"use-strict";

const isKeyPressed = {};
const playSound = function (e) {
  const isKeyDown = e.type === "keydown";
  const key = isKeyDown
    ? e.key.toLowerCase()
    : e.currentTarget.getAttribute("data-key");

  if (isKeyPressed[key]) return false;

  const sound = document.querySelector(`audio[data-key="${key}"]`);
  const divKey = document.querySelector(`div[data-key="${key}"]`);

  if (sound) {
    sound.currentTime = 0;
    sound.play();
    divKey.classList.add("playing");
    isKeyPressed[key] = isKeyDown;
    setTimeout(() => divKey.classList.remove("playing"), 100);
  }

  return false;
};

document.addEventListener("keydown", (e) => playSound(e));
document.addEventListener("keyup", (e) => (isKeyPressed[e.key] = false));

const keys = document.querySelectorAll(".key");
keys.forEach((key) => key.addEventListener("click", (e) => playSound(e)));
