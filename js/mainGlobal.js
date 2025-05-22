window.addEventListener("load", init);

function init() {

  fetch('../pages/components/footer.html')
  .then(res => res.text())
  .then(data => {
    console.log('Contenido footer:', data);
    document.getElementById('componentFooter').innerHTML = data;
  })
  .catch(console.error);


  fetch("../pages/components/header.html")
    .then(res => res.text())
    .then(data => {
      const header = document.getElementById("componentHeader");
      if (header) {
        header.innerHTML = data;

        // Buscador
        const inputHeader = document.querySelector(".busqueda_header .input_Search");
        if (inputHeader) {
          inputHeader.addEventListener("keydown", (e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              const query = inputHeader.value.trim();
              if (query.length > 0) {
                const url = new URL(window.location.origin + "/pages/search.html");
                url.searchParams.set("q", query);
                window.location.href = url.toString();
              }
            }
          });
        }

        // Carrito
        const carritoContainer = document.querySelector(".carritoContainer");
        const cartPreview = carritoContainer?.querySelector(".cartPreview");

        if (carritoContainer && cartPreview) {
          carritoContainer.addEventListener("mouseenter", () => {
            updateCartPreview();
            cartPreview.classList.add("show");
          });

          carritoContainer.addEventListener("mouseleave", () => {
            cartPreview.classList.remove("show");
          });
        }
      } else {
        console.warn("⚠️ No se encontró el div con id 'componentHeader'");
      }

      const botones = document.querySelectorAll(".botonAñadir");
      botones.forEach(boton => {
        boton.addEventListener("click", () => {
          const book = boton.closest(".bestSellers_book");

          const tituloElem = book.querySelector("h3");
          const autorElem = book.querySelector("p");
          const precioElem = book.querySelector(".precio");

          const titulo = tituloElem.innerText;
          const autor = autorElem.innerText;
          const precioText = precioElem.innerText.replace("€", "").trim();
          const precio = parseFloat(precioText);

          addToCart(titulo, autor, precio);
        });
      });
    });
}


function addToCart(titulo, autor, precioUnitario) {
  let carrito = JSON.parse(localStorage.getItem("cart")) || [];

  const index = carrito.findIndex(item => item.titulo === titulo);

  if (index !== -1) {
    carrito[index].cantidad += 1;
    carrito[index].precioTotal = (carrito[index].precioUnitario * carrito[index].cantidad).toFixed(2);
  } else {
    carrito.push({
      titulo,
      autor,
      precioUnitario,
      cantidad: 1,
      precioTotal: precioUnitario.toFixed(2),
    });
  }

  localStorage.setItem("cart", JSON.stringify(carrito));
}

function updateCartPreview() {
  const cartPreview = document.querySelector(".cartPreview");
  const cartItems = JSON.parse(localStorage.getItem("cart")) || [];

  if (cartItems.length === 0) {
    cartPreview.innerHTML = "<p>Carrito vacío</p>";
  } else {
    cartPreview.innerHTML = cartItems.map(item =>
      `<div>
        <strong>${item.titulo} (x${item.cantidad})</strong><br>
        <span>${item.autor}</span> - <span>${item.precioTotal}€</span>
      </div><hr>`
    ).join("");
  }
}
