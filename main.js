// Functionize Minecraft Fishing Start Code

// HTML variables
let resultIMg = document.getElementById("result-img");
let numCodSpan = document.getElementById("num-cod");
let numSalmonSpan = document.getElementById("num-salmon");
let numTropicalSpan = document.getElementById("num-tropical");
let numPufferSpan = document.getElementById("num-puffer");
let plus5Btn = document.getElementById("plus5");
let until200Btn = document.getElementById("until200");
let xFishingInp = document.getElementById("x-fishing");
let fishingInv = document.getElementById("inventory");

// Fish Count Variables
let numCod = 0;
let numSalmon = 0;
let numTropical = 0;
let numPuffer = 0;
// Fish Button Event Listener
document.getElementById("fish-btn").addEventListener("click", fishOnce);
plus5Btn.addEventListener("click", plus5);
until200Btn.addEventListener("click", until200);
xFishingInp.addEventListener("change", fishXAmount);

function fishOnce() {
  // Determine Selected character
  let character = document.getElementById("character-select").value;
  console.log(character);

  if (character === "steve") {
    // // Steve fish stimulator
    let randNum = Math.random();
    console.log(randNum);
    if (randNum < 0.7) {
      resultIMg.src = "img/Raw-Cod.png";
      numCod++;
      numCodSpan.innerHTML = numCod;
      fishingInv.innerHTML += `<img src="img/Raw-Cod.png" width="25px"/>`;
    } else if (randNum < 0.9) {
      resultIMg.src = "img/Raw-Salmon.png";
      numSalmon++;
      numSalmonSpan.innerHTML = numSalmon;
      fishingInv.innerHTML += `<img src="img/Raw-Salmon.png" width="25px"/>`;
    } else if (randNum < 0.95) {
      resultIMg.src = "img/Tropical-Fish.png";
      numTropical++;
      numTropicalSpan.innerHTML = numTropical;
      fishingInv.innerHTML += `<img src="img/Tropical-Fish.png" width="25px"/>`;
    } else {
      resultIMg.src = "img/Pufferfish.png";
      numPuffer++;
      numPufferSpan.innerHTML = numPuffer;
      fishingInv.innerHTML += `<img src="img/Pufferfish.png" width="25px"/>`;
    }
  } else if (character === "alex") {
    // // alex fish stimulator
    let randNum = Math.random();
    console.log(randNum);
    if (randNum < 0.1) {
      resultIMg.src = "img/Raw-Cod.png";
      numCod++;
      numCodSpan.innerHTML = numCod;
      fishingInv.innerHTML += `<img src="img/Raw-Cod.png" width="25px"/>`;
    } else if (randNum < 0.2) {
      resultIMg.src = "img/Raw-Salmon.png";
      numSalmon++;
      numSalmonSpan.innerHTML = numSalmon;
      fishingInv.innerHTML += `<img src="img/Raw-Salmon.png" width="25px"/>`;
    } else if (randNum < 0.5) {
      resultIMg.src = "img/Tropical-Fish.png";
      numTropical++;
      numTropicalSpan.innerHTML = numTropical;
      fishingInv.innerHTML += `<img src="img/Tropical-Fish.png" width="25px"/>`;
    } else {
      resultIMg.src = "img/Pufferfish.png";
      numPuffer++;
      numPufferSpan.innerHTML = numPuffer;
      fishingInv.innerHTML += `<img src="img/Pufferfish.png" width="25px"/>`;
    }
  } else if (character === "villager") {
    // // lil vill fish stimulator
    let randNum = Math.random();
    console.log(randNum);
    if (randNum < 0.25) {
      resultIMg.src = "img/Raw-Cod.png";
      numCod++;
      numCodSpan.innerHTML = numCod;
      fishingInv.innerHTML += `<img src="img/Raw-Cod.png" width="25px"/>`;
    } else if (randNum < 0.5) {
      resultIMg.src = "img/Raw-Salmon.png";
      numSalmon++;
      numSalmonSpan.innerHTML = numSalmon;
      fishingInv.innerHTML += `<img src="img/Raw-Salmon.png" width="25px"/>`;
    } else if (randNum < 0.75) {
      resultIMg.src = "img/Tropical-Fish.png";
      numTropical++;
      numTropicalSpan.innerHTML = numTropical;
      fishingInv.innerHTML += `<img src="img/Tropical-Fish.png" width="25px"/>`;
    } else {
      resultIMg.src = "img/Pufferfish.png";
      numPuffer++;
      numPufferSpan.innerHTML = numPuffer;
      fishingInv.innerHTML += `<img src="img/Pufferfish.png" width="25px"/>`;
    }
  }
}

function plus5() {
  for (let n = 1; n <= 5; n++) {
    fishOnce();
  }
}

function until200() {
  let codTarget = numCod + 200;
  let count = 0;

  while (numCod < codTarget) {
    fishOnce();
    count++;
  }
  console.log(count);
}

function fishXAmount() {
  if (xFishingInp.value < 0) {
    xFishingInp.value = 0;
  }

  for (let n = 1; n <= xFishingInp.value; n++) {
    fishOnce();
  }
}

document.getElementById("sort").addEventListener("click", fishSort);
function fishSort() {
  fishingInv.innerHTML = ``;
  for (let n = 1; n <= numCod; n++) {
    fishingInv.innerHTML += `<img src="img/Raw-Cod.png" width="25px"/>`;
  }
  for (let n = 1; n <= numSalmon; n++) {
    fishingInv.innerHTML += `<img src="img/Raw-Salmon.png" width="25px"/>`;
  }
  for (let n = 1; n <= numTropical; n++) {
    fishingInv.innerHTML += `<img src="img/Tropical-Fish.png" width="25px"/>`;
  }
  for (let n = 1; n <= numPuffer; n++) {
    fishingInv.innerHTML += `<img src="img/Pufferfish.png" width="25px"/>`;
  }
}
