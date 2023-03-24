const imageList = document.querySelector(".image-slider .image-list");

const imageSlider = document.querySelector(".image-slider");

function automaticSlide() {
  for (let i = 0; i < imageList.children.length; i += 1) {
    if (imageList.children[i].classList.contains("picture")) {
      imageList.children[i].classList.remove("picture");
      if (i === imageList.children.length - 1) {
        imageList.children[0].classList.add("picture");
      } else {
        imageList.children[i + 1].classList.add("picture");
      }
      updateNavDots();
      timeOutFiveSeconds();
      break;
    }
  }
}
function timeOutFiveSeconds() {
  const timeoutID = setTimeout(() => {
    automaticSlide();
  }, 5000);
  window.onclick = () => {
    clearTimeout(timeoutID);
  };
}

function updateNavDots() {
  for (let i = 0; i < navDots.length; i += 1) {
    for (let j = 0; j < imageList.children.length; j += 1) {
      if (i === j) {
        if (imageList.children[j].classList.contains("picture")) {
          if (document.querySelector(".nav-dot.selected")) {
            document
              .querySelector(".nav-dot.selected")
              .classList.remove("selected");
          }
          navDots[i].classList.add("selected");
        }
      }
    }
  }
}

const navDots = document.querySelectorAll(".nav-dot");
for (let i = 0; i < navDots.length; i += 1) {
  navDots[i].addEventListener("click", () => {
    for (let j = 0; j < imageList.children.length; j += 1) {
      if (i === j) {
        if (!imageList.children[j].classList.contains("picture")) {
          document.querySelector(".image.picture").classList.remove("picture");
          if (document.querySelector(".nav-dot.selected")) {
            document
              .querySelector(".nav-dot.selected")
              .classList.remove("selected");
          }
          imageList.children[j].classList.add("picture");
          navDots[i].classList.add("selected");
        }
      }
    }
  });
}

imageSlider.firstElementChild.addEventListener("click", () => {
  for (let i = 0; i < imageList.children.length; i += 1) {
    if (imageList.children[i].classList.contains("picture")) {
      imageList.children[i].classList.remove("picture");
      if (i > 0) {
        imageList.children[i - 1].classList.add("picture");
      } else {
        const index = imageList.children.length - 1;
        imageList.children[index].classList.add("picture");
      }
      updateNavDots();
      break;
    }
  }
});

imageSlider.lastElementChild.addEventListener("click", () => {
  for (let i = 0; i < imageList.children.length; i += 1) {
    if (imageList.children[i].classList.contains("picture")) {
      imageList.children[i].classList.remove("picture");
      if (i === imageList.children.length - 1) {
        imageList.children[0].classList.add("picture");
      } else {
        imageList.children[i + 1].classList.add("picture");
      }
      updateNavDots();
      break;
    }
  }
});

window.onload = () => {
  timeOutFiveSeconds();
};
