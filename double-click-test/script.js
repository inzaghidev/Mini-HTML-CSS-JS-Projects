window.onload = function () {
  let prevTime = {};
  let clickCounter = {};
  let doubleClickCounter = {};

  function logMe(e) {
    var currentTime = performance.now();
    if (currentTime - prevTime[e.button] <= 80) {
      if (!doubleClickCounter[e.button]) {
        doubleClickCounter[e.button] = 0;
      }
      doubleClickCounter[e.button] += 1;
      document.getElementById(`button_${e.button}_double`).innerText =
        doubleClickCounter[e.button];
      document.getElementById(`button_${e.button}_status`).innerText = "Failed";
      document.getElementById(`button_${e.button}`).style.backgroundColor =
        "#dc602e";
      document.getElementById(`button_${e.button}`).style.color = "white";
      document.getElementById(
        `button_${e.button}_title`
      ).style.backgroundColor = "#bc412b";
    }
    prevTime[e.button] = currentTime;

    if (!clickCounter[e.button]) {
      clickCounter[e.button] = 0;
    }
    clickCounter[e.button] += 1;
    document.getElementById(`button_${e.button}_normal`).innerText =
      clickCounter[e.button];
  }

  function resetButtons() {
    location.reload();
  }

  // Listen to clicks on the clickbar
  const clickMe = document.getElementById("clickMe");
  if (clickMe) {
    clickMe.addEventListener("contextmenu", (e) => {
      e.preventDefault();
      return false;
    });
    clickMe.addEventListener("mousedown", logMe);
  }

  // Listen to clicks on reset button
  const resetBtn = document.getElementById("reset");
  if (resetBtn) {
    document
      .getElementById("reset")
      .addEventListener("mousedown", resetButtons);
  }

  // Write out copyrigth year
  document.getElementById("copyright-year").innerText =
    new Date().getFullYear() + " ";
};
