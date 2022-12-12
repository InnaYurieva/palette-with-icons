const container = document.querySelector(".container")
const icon = document.querySelector('.icon') //Выбираем иконку

export const openModal = function(event) { // не было реализовано закрытие модального окна при клике на иконку после открытия модального окна
    
    if (container.classList.contains("is-open")) {
      container.classList.remove("is-open")
      icon.style.fill = "black";
    } else {
      container.classList.add("is-open")
      icon.style.fill = "#f6bf54"; 
    }
  }

  export const closeModal = () => {
    container.classList.remove("is-open")
  }