window.addEventListener("load", cargarCarrito);

function cargarCarrito() {
  const tablaBody = document.querySelector("table tbody");
  const precioTotalElement = document.querySelector(".precioTotalLibros");
  let carrito = JSON.parse(localStorage.getItem("cart")) || [];

  tablaBody.innerHTML = "";

  let totalPedido = 0;

  carrito.forEach((item, index) => {
    const fila = document.createElement("tr");

    totalPedido += parseFloat(item.precioTotal);

    fila.innerHTML = `
      <td class="informacionLibro d-flex align-items-center">
        <img src="${item.imagen}" alt="${item.titulo}" class="me-3" style="width: 80px; height: auto;">
        <div>
          <strong>${item.titulo}</strong><br>
          <span>${item.autor}</span><br>
          <span>${item.precioUnitario.toFixed(2)}€</span>
        </div>
      </td>
      <td class="text-center align-middle informacionCantidad">
        <div class="input-number-container d-inline-flex align-items-center">
          <button class="btn-minus" data-index="${index}">−</button>
          <input type="number" class="cantidad" data-index="${index}" value="${item.cantidad}" min="1" />
          <button class="btn-plus" data-index="${index}">+</button>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="red"
            class="bi bi-trash mt-2 eliminar" data-index="${index}" viewBox="0 0 16 16">
          <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
          <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
        </svg>
      </td>
      <td class="text-center align-middle precioTotalLibro">${item.precioTotal}€</td>
    `;

    tablaBody.appendChild(fila);
  });

  precioTotalElement.textContent = `${totalPedido.toFixed(2)}€`;

  // Eventos para botones +/-, cantidad, eliminar
  document.querySelectorAll(".btn-minus").forEach(btn => {
    btn.addEventListener("click", () => actualizarCantidad(btn.dataset.index, -1));
  });

  document.querySelectorAll(".btn-plus").forEach(btn => {
    btn.addEventListener("click", () => actualizarCantidad(btn.dataset.index, 1));
  });

  document.querySelectorAll(".cantidad").forEach(input => {
    input.addEventListener("change", () => {
      const nuevaCantidad = parseInt(input.value);
      if (!isNaN(nuevaCantidad) && nuevaCantidad > 0) {
        actualizarCantidad(input.dataset.index, 0, nuevaCantidad);
      }
    });
  });

  document.querySelectorAll(".eliminar").forEach(icon => {
    icon.addEventListener("click", () => eliminarItem(icon.dataset.index));
  });
}

function actualizarCantidad(index, delta, nuevaCantidad = null) {
  let carrito = JSON.parse(localStorage.getItem("cart")) || [];
  const item = carrito[index];

  if (nuevaCantidad !== null) {
    item.cantidad = nuevaCantidad;
  } else {
    item.cantidad = Math.max(1, item.cantidad + delta);
  }

  item.precioTotal = (item.precioUnitario * item.cantidad).toFixed(2);

  localStorage.setItem("cart", JSON.stringify(carrito));
  cargarCarrito();
}

function eliminarItem(index) {
  let carrito = JSON.parse(localStorage.getItem("cart")) || [];
  carrito.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(carrito));
  cargarCarrito();
}
