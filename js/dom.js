const colors = document.querySelectorAll('.color');
const reset = document.getElementById('reset');

colors.forEach((color) => {
  color.addEventListener('click', () => {
    addSelectedAnimation(color);
    if (mergeHistory.length == 0) {
      mergeHistory.push({ level: +color.dataset.level, color });
    } else {
      resetAnimation(colors);
      mergeHistory.push({ level: +color.dataset.level, color });
      if (mergeHistory[0].level == mergeHistory[1].level) {
        if (mergeHistory[1].level !== MAX_LEVEL) {
          increaseColorLevel(mergeHistory, resetColorLevel);
        }
        resetHistory();
        resetAnimation(colors);
        checkWin(colors);
      } else {
        resetHistory();
        resetAnimation(colors);
      }
    }
  });
  
});

reset.addEventListener('click', () => {
  colors.forEach((color) => resetColorLevel(color));
  resetAnimation(colors);
  resetAnimation(colors);
  resetHistory();
});
