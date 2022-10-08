function increaseColorLevel(mergeHistory, resetColorLevel) {
  if (mergeHistory[0].color !== mergeHistory[1].color) {
    mergeHistory[1].color.dataset.level = mergeHistory[1].level + 1;
    resetColorLevel(mergeHistory[0].color);
    // done sound
    if (mergeHistory[1].level + 1 === MAX_LEVEL) {
      playSound('./audios/maxed.wav');
    } else {
      playSound('./audios/upgraded.wav');
    }
  }
}

function resetColorLevel(color) {
  color.dataset.level = 1;
}

function resetHistory() {
  mergeHistory = [];
}

function addSelectedAnimation(color) {
  color.classList.add('selected');
}
function resetAnimation(colors) {
  colors.forEach((color) => {
    color.classList.remove('selected');
  });
}

function checkWin(colors) {
  let levels = [...colors].map((color) => +color.dataset.level);
  let win = new Set(levels);
  if (win.size == colors.length) {
    alert('win');
  }
}

function playSound(path) {
  let sound = new Audio(path);
  sound.play();
}
