import goblin from "../images/goblin.png";
export default class Board {
  constructor(element) {
    this.element = element;
    this.cells = this.element.querySelectorAll(".cell");
    this.image = document.createElement("img");
    this.image.src = goblin;
    this.image.classList.add("image");
  }

  showImageOnRandomCell(index) {
    this.cells[index].appendChild(this.image);
    this.cells[index].classList.add("image-cell");
  }

  hideCell() {
    if (this.element.querySelector(".image-cell")) {
      this.element.querySelector(".image-cell").classList.remove("image-cell");
    }
  }

  getRandomIndex() {
    return Math.floor(Math.random() * this.cells.length);
  }

  changeImageCell() {
    const randomIndex = this.getRandomIndex();
    if (this.cells[randomIndex].classList.contains("image-cell")) {
      this.changeImageCell();
    } else {
      this.hideCell();
      this.showImageOnRandomCell(randomIndex);
    }
  }
}
