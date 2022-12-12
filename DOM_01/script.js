import colors from "./colors.js";
import {openModal, closeModal} from "./modal.js";

const container = document.querySelector(".container"); //Выбираем контейнер
//const SQUARES = 35; //количество квадратиков
for (let index = 0; index < colors.length; index++) {
  const square = document.createElement("div");
  square.classList.add("square"); // Добавляем стили квадратикам
  square.setAttribute("style", `background-color: ${colors[index]};`);
  square.addEventListener("click", getAddDivColor); //сорректировала (Миша)
  container.append(square);
  square.style.cursor = 'pointer'
}

const icon = document.querySelector(".icon"); //Выбираем иконку
icon.addEventListener("click", openModal);
const overlay = document.querySelector(".overlay");
const sguare = document.querySelector('.square')

overlay.onclick = function (event) {
  //в прошлый раз было реализовано, тольео если нажимала на overlay - переделала
  let a = event.target.className;
  //console.log(a.length);
  if (event.target.className === "overlay") {
    closeModal()
    //icon.style.fill = "#f6bf54";
  } else if (a.length === 0) {
    closeModal()
  }
};

const input = document.createElement("input");
input.classList.add("input");
input.placeholder = "#000000";
input.type = 'text'
container.append(input);
const squareColor = document.createElement("div");
squareColor.classList.add("div-color");
squareColor.style.cursor = 'pointer'
input.before(squareColor);

const checkMarkIcon = document.querySelector("#svg"); //Галочка
input.after(checkMarkIcon);

let currentInputValue = "";
let isInputValid = false;

const inputChange = function (event) { // проверка на hex формат
  let reg = /^#[0-9A-F]{6}$/i

  currentInputValue = event.target.value;
  isInputValid = reg.test(event.target.value);

  if (isInputValid) { 
          checkMarkIcon.style.stroke = "green"
          input.style.border = "1px solid green"
        } 
        else {
          input.style.border = "1px solid red"
  }
};
console.log(squareColor);

input.addEventListener("input", inputChange); 
//если значение в инпуте соответствует формату hex, галочка подсвечивается зеленым и при клике на галочку  цвет иконки меняется на цвет, который ввели и поповер закрывается
const onSvgClick = function (event) {
  if (isInputValid) {
    squareColor.style.backgroundColor = currentInputValue
    closeModal();
}
};

checkMarkIcon.addEventListener("click", onSvgClick);

function getAddDivColor(event) {
  //вернула function Declaration, т.к. вызов функции перенесла на строку 10. Подскажи, полуйста, если можно этого избежать в данном коде
  let rgbTarget = event.target.style.backgroundColor;
  icon.style.fill = rgbTarget;
  closeModal()
}

const svgColorGet = function (event) { //когда поповер открыт, иконка подсвечивается оранжевым,  outline: 1px solid #f6bf54; при наведении на цвет, он немного увеличивается
  //console.log(icon.style.fill === 'rgb(246, 191, 84)');
  if (icon.style.fill === "rgb(246, 191, 84)") {
    icon.classList.add("svg-colorGet");
    icon.removeAttribute("data-title");
  } else {
    icon.classList.remove("svg-colorGet");
  }
};
icon.addEventListener("mouseout", svgColorGet);




