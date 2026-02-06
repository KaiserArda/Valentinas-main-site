const options = document.querySelectorAll(".option");
const body = document.body;

options.forEach(option => {
  option.addEventListener("mouseenter", () => {
    body.style.background = option.dataset.color;
  });

  option.addEventListener("mouseleave", () => {
    body.style.background = "#111";
  });

  option.addEventListener("click", () => {
    window.location.href = option.dataset.link;
  });
});
