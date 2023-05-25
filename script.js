const section = document.querySelector("section");
const turnsPassed = document.querySelector("#turnsPassed");
let turnsPlayed = 0;

turnsPassed.textContent = turnsPlayed;

const getData = () => [
  {
    imgSrc: "matchingGamePhotos/lvl1/pickleRicktransparent.fw.png",
    name: "pickleRick",
  },
  {
    imgSrc: "matchingGamePhotos/lvl1/tinyRicktransparent.fw.png",
    name: "tinyRick",
  },
  {
    imgSrc: "matchingGamePhotos/lvl1/theDeviltransparent.fw.png",
    name: "theDevil",
  },
  {
    imgSrc: "matchingGamePhotos/lvl1/mrMeeseekstransparent.fw.png",
    name: "mrMeeseeks",
  },
  {
    imgSrc: "matchingGamePhotos/lvl1/stupidRicktransparent.fw.png",
    name: "stupidRick",
  },
  {
    imgSrc: "matchingGamePhotos/lvl1/yellowkidtransparent.fw.png",
    name: "morty",
  },
  {
    imgSrc: "matchingGamePhotos/lvl1/spaceBethtransparent.fw.png",
    name: "spaceBeth",
  },
  {
    imgSrc: "matchingGamePhotos/lvl1/abrahamLinclertransparent.fw.png",
    name: "abrahamLincler",
  },
  {
    imgSrc: "matchingGamePhotos/lvl1/tinyRicktransparent.fw.png",
    name: "tinyRick",
  },
  {
    imgSrc: "matchingGamePhotos/lvl1/pickleRicktransparent.fw.png",
    name: "pickleRick",
  },
  {
    imgSrc: "matchingGamePhotos/lvl1/theDeviltransparent.fw.png",
    name: "theDevil",
  },
  {
    imgSrc: "matchingGamePhotos/lvl1/mrMeeseekstransparent.fw.png",
    name: "mrMeeseeks",
  },
  {
    imgSrc: "matchingGamePhotos/lvl1/stupidRicktransparent.fw.png",
    name: "stupidRick",
  },
  {
    imgSrc: "matchingGamePhotos/lvl1/yellowkidtransparent.fw.png",
    name: "morty",
  },
  {
    imgSrc: "matchingGamePhotos/lvl1/spaceBethtransparent.fw.png",
    name: "spaceBeth",
  },
  {
    imgSrc: "matchingGamePhotos/lvl1/abrahamLinclertransparent.fw.png",
    name: "abrahamLincler",
  },
  {
    imgSrc: "matchingGamePhotos/lvl1/butterrobot.png",
    name: "butterBot",
  },
  {
    imgSrc: "matchingGamePhotos/lvl1/butterrobot.png",
    name: "butterBot",
  },
  {
    imgSrc: "matchingGamePhotos/lvl1/evilmorty.png",
    name: "evilMorty",
  },
  {
    imgSrc: "matchingGamePhotos/lvl1/evilmorty.png",
    name: "evilMorty",
  },
  {
    imgSrc: "matchingGamePhotos/lvl1/jerry.png",
    name: "jerry",
  },
  {
    imgSrc: "matchingGamePhotos/lvl1/jerry.png",
    name: "jerry",
  },
  {
    imgSrc: "matchingGamePhotos/lvl1/poppybutthole.png",
    name: "mrPoopyButthole",
  },
  {
    imgSrc: "matchingGamePhotos/lvl1/poppybutthole.png",
    name: "mrPoopyButthole",
  },
  {
    imgSrc: "matchingGamePhotos/lvl1/theboi.gif",
    name: "theBoi",
  },
  {
    imgSrc: "matchingGamePhotos/lvl1/theboi.gif",
    name: "theBoi",
  },

  {
    imgSrc: "matchingGamePhotos/lvl1/birdperson.png",
    name: "birdPerson",
  },
  {
    imgSrc: "matchingGamePhotos/lvl1/birdperson.png",
    name: "birdPerson",
  },
];

const randomize = () => {
  const cardData = getData();
  cardData.sort(() => Math.random() - 0.5);
  return cardData;
};

const cardGenerator = () => {
  const cardPic = randomize();

  cardPic.forEach((item, index) => {
    const card = document.createElement("div");
    const face = document.createElement("img");
    const back = document.createElement("div");
    card.classList = "card";
    face.classList = "face";
    back.classList = "back";

    face.src = item.imgSrc;
    card.setAttribute("name", item.name);

    section.appendChild(card);
    card.appendChild(face);
    card.appendChild(back);

    card.addEventListener("click", (e) => {
      card.classList.toggle("toggleCard");
      matchCards(e);
      toggleCard();
    });
  });
};

const matchCards = (e) => {
  console.log(e);
  const choice = e.target;
  choice.classList.add("flipped");
  const flippedCards = document.querySelectorAll(".flipped");

  if (flippedCards.length === 2) {
    if (
      flippedCards[0].getAttribute("name") ===
      flippedCards[1].getAttribute("name")
    ) {
      console.log("match");
      flippedCards.forEach((card) => {
        card.classList.remove("flipped");
        card.style.pointerEvents = "none";
      });
      turnsPlayed++;
      turnsPassed.textContent = turnsPlayed;
    } else {
      console.log("wrong");
      flippedCards.forEach((card) => {
        card.classList.remove("flipped");
        setTimeout(() => card.classList.remove("toggleCard"), 1000);
      });
      turnsPlayed++;
      turnsPassed.textContent = turnsPlayed;
    }
  }
};

cardGenerator();

const modal = document.getElementById("modal");
const modalContent = document.querySelector(".modal-content");
const modalTurnsPlayed = document.getElementById("modalTurnsPlayed");
const closeModal = document.querySelector(".close");

function gameOver() {
  modal.style.display = "block";
  modalTurnsPlayed.textContent = turnsPlayed;
}

closeModal.onclick = function () {
  modal.style.display = "none";
};
