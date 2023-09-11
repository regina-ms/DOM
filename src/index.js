import "./css/style.css";
import "./js/app";
import Board from "./js/app";

const board = new Board(document.querySelector(".board"));
board.changeImageCell();
setInterval(() => board.changeImageCell(), 800);
