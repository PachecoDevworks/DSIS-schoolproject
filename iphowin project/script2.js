let randomInt;
let randomEL = document.querySelector(".random");
let randomEL2 = document.querySelector(".random2");
let randomEL3 = document.querySelector(".random3");
let progress = document.querySelector(".progress");
let progress2 = document.querySelector(".progress2");
let progress3 = document.querySelector(".progress3");

// generate random num
function randomGen() {
  randomInt = Math.floor(Math.random() * 20) + 1;
}

// create progressBar
function createBar(progressType) {
  let track = document.createElement("div");
  track.classList.add("track");

  let bar = document.createElement("div");

  // Set different gradient and shadow effects based on randomInt
  if (randomInt <= 6) {
    bar.classList.add("bar");
    progressType.appendChild(track);
    track.appendChild(bar);
    bar.style.backgroundImage =
      "linear-gradient(to top, rgba(255, 0, 0, 1), rgba(200, 0, 0, 0.80))";
    bar.style.boxShadow = `
      0px 0px 5px rgba(255, 0, 0, 0.6),
      0px 0px 10px rgba(255, 0, 0, 0.4),
      0px 0px 15px rgba(255, 0, 0, 0.3),
      0px 0px 20px rgba(255, 0, 0, 0.2)
    `;
    bar.style.height = randomInt * 10 + "px"; // Adjust bar height instead of width
  } else if (randomInt > 6 && randomInt <= 12) {
    bar.classList.add("bar");
    progressType.appendChild(track);
    track.appendChild(bar);
    bar.style.backgroundImage =
      "linear-gradient(to top, rgba(255, 0, 0, 1), rgba(255, 165, 0, 1))";
    bar.style.boxShadow = `
      0px 0px 5px rgba(255, 0, 0, 0.6),
      0px 0px 10px rgba(255, 69, 0, 0.5),
      0px 0px 15px rgba(255, 140, 0, 0.4),
      0px 0px 20px rgba(255, 165, 0, 0.3)
    `;
    bar.style.height = randomInt * 10 + "px";
  } else {
    bar.classList.add("bar");
    progressType.appendChild(track);
    track.appendChild(bar);
    // bar.style.backgroundImage = 'linear-gradient(to top, rgba(255, 0, 0, 1), rgba(255, 165, 0, 1), rgba(0, 128, 0, 1))';
    bar.style.backgroundImage =
      "linear-gradient(to top, " +
      "rgba(255, 0, 0, 1) 30%, " +
      "rgba(255, 165, 0, 1) 60%, " +
      "rgba(0, 128, 0, 1) 100%";
    (")");
    bar.style.boxShadow = `
      0px 0px 5px rgba(255, 0, 0, 0.6),
      0px 0px 10px rgba(255, 102, 102, 0.4),
      0px 0px 15px rgba(102, 255, 102, 0.4),
      0px 0px 20px rgba(0, 128, 0, 0.3)
    `;
    bar.style.height = randomInt * 10 + "px";
  }
}

randomInt = 20;
// randomGen();
createBar(progress);
randomEL.innerHTML = "random = " + randomInt;
// randomGen();
randomInt = 13;
// randomGen();
createBar(progress2);
randomEL2.innerHTML = "random = " + randomInt;

randomInt = 12;
// randomGen();
createBar(progress3);
randomEL3.innerHTML = "random = " + randomInt;
