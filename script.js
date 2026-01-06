function randomValue() {
  return Math.floor(Math.random() * 100);
}

function refresh() {
  document.getElementById("cpuValue").innerText = randomValue();
  document.getElementById("memoryValue").innerText = randomValue();
  document.getElementById("diskValue").innerText = randomValue();
}

refresh();
