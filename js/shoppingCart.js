window.addEventListener("load", () => {
    const input = document.getElementById("cantidad");
    const btnMinus = document.querySelector(".btn-minus");
    const btnPlus = document.querySelector(".btn-plus");
  
    btnMinus.addEventListener("click", () => {
      if (input.value > input.min) {
        input.value = parseInt(input.value) - 1;
      }
    });
  
    btnPlus.addEventListener("click", () => {
      input.value = parseInt(input.value) + 1;
    });
  });
  