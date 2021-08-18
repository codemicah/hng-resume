const showResume = document.getElementById("showResume");
const showIntro = document.getElementById("showIntro");
const introSection = document.querySelector(".intro");
const resumeSection = document.querySelector(".resume");

showResume.addEventListener("click", function () {
  introSection.style.marginTop = "-100vh";
});
showIntro.addEventListener("click", function () {
  introSection.style.marginTop = "0";
});

document.onkeydown = function (e) {
  if (e.key === "ArrowDown") {
    introSection.style.marginTop = "-100vh";
  } else if (e.key === "ArrowUp") {
    introSection.style.marginTop = "0";
  }
};
