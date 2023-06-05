document.addEventListener("DOMContentLoaded", function (event) {
  let fullBarInPx = 880;
  let fullBarInProcents = 220;
  let barInProcents = 73;

  let bar = document.querySelector('.bar');
  // bar.style.strokeDasharray = `${barInProcents * fullBarInPx / 100} 2000`;
  bar.style.strokeDasharray = `${barInProcents * fullBarInProcents / 100}% 2000`;

  let procent = document.querySelector('.procent');
  procent.innerHTML = `${barInProcents}%`;
});