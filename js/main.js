const panels = document.querySelectorAll('.panel');
const options = document.querySelectorAll('.option');

options.forEach(option => {
  option.addEventListener('mouseenter', () => {
    const color = option.dataset.color;

    panels.forEach(panel => {
      if (panel.classList.contains(color)) {
        panel.style.filter = 'saturate(100%) brightness(100%)';
      } else {
        panel.style.filter = 'saturate(30%) brightness(80%)';
      }
    });
  });

  option.addEventListener('mouseleave', () => {
    panels.forEach(panel => {
      panel.style.filter = 'saturate(40%) brightness(85%)';
    });
  });
});
