/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/images/goblin.png
const goblin_namespaceObject = __webpack_require__.p + "assets/goblin.png";
;// CONCATENATED MODULE: ./src/js/app.js

class Board {
  constructor(element) {
    this.element = element;
    this.cells = this.element.querySelectorAll(".cell");
    this.image = document.createElement("img");
    this.image.src = goblin_namespaceObject;
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
;// CONCATENATED MODULE: ./src/index.js



const board = new Board(document.querySelector(".board"));
board.changeImageCell();
setInterval(() => board.changeImageCell(), 800);
/******/ })()
;