window.addEventListener("load", () => {
    const inputBusqueda = document.querySelector(".busqueda .input_Search");
    const priceRange = document.getElementById("priceRange");
    const priceText = document.getElementById("priceText");
    const radioOpciones = document.querySelectorAll("input[name='opcion']");
    const checkCategorias = document.querySelectorAll("input[name='categoria']");
    const checkLongitudes = document.querySelectorAll("input[name='longitud']");
    const btnLimpiar = document.getElementById("btnLimpiarFiltros");
    const resultados = document.querySelectorAll(".resultadoLibrosEncontrado");
  
    const urlParams = new URLSearchParams(window.location.search);
    let textoURL = urlParams.get("q") ? urlParams.get("q").toLowerCase() : "";
    let categoriaURL = urlParams.get("categoria") ? urlParams.get("categoria").toLowerCase() : "";
  
    if (textoURL) {
      inputBusqueda.value = textoURL;
    }
  
    if (categoriaURL) {
      checkCategorias.forEach(check => {
        if (check.value.toLowerCase() === categoriaURL) {
          check.checked = true;
        } else {
          check.checked = false;
        }
      });
    }

    function limpiarParametroURL() {
      const url = new URL(window.location);
      url.searchParams.delete("q");
      window.history.replaceState({}, document.title, url.toString());
    }
  
    function filtrarLibros() {
      const textoInput = inputBusqueda.value.toLowerCase();
      const texto = textoInput || textoURL;
  
      const maxPrecio = parseFloat(priceRange.value);
      const orden = document.querySelector("input[name='opcion']:checked").value;
  
      const categorias = Array.from(checkCategorias)
        .filter(c => c.checked)
        .map(c => c.value.toLowerCase());
  
      const longitudes = Array.from(checkLongitudes)
        .filter(c => c.checked)
        .map(c => c.value.toLowerCase());
  
      resultados.forEach(libro => {
        const titulo = libro.querySelector("h3").textContent.toLowerCase();
        const autor = libro.querySelector("p").textContent.toLowerCase();
        const precio = parseFloat(libro.querySelector(".precio").textContent.replace("€", ""));
  
        const coincideBusqueda = titulo.includes(texto) || autor.includes(texto);
        const coincidePrecio = precio <= maxPrecio;
  
        const categoriaLibro = categorias.length === 0 || categorias.some(cat =>
          titulo.includes(cat) || autor.includes(cat)
        );
  
        const longitudLibro = longitudes.length === 0 || longitudes.some(l => {
          const longitudData = libro.getAttribute("data-longitud")?.toLowerCase() || "";
          if (l.includes("corta")) return longitudData === "corta";
          if (l.includes("media")) return longitudData === "media";
          if (l.includes("larga")) return longitudData === "larga";
          return false;
        });
  
        const visible = coincideBusqueda && coincidePrecio && categoriaLibro && longitudLibro;
        libro.style.display = visible ? "flex" : "none";
      });
  
      ordenarLibros(orden);
    }
  
    function ordenarLibros(orden) {
      const contenedor = document.querySelector(".resultadoLibrosEncontrados");
      const libros = Array.from(document.querySelectorAll(".resultadoLibrosEncontrado"))
        .filter(libro => libro.style.display !== "none");
  
      libros.sort((a, b) => {
        const precioA = parseFloat(a.querySelector(".precio").textContent.replace("€", ""));
        const precioB = parseFloat(b.querySelector(".precio").textContent.replace("€", ""));
  
        if (orden === "opcion2") return precioA - precioB;
        if (orden === "opcion3") return precioB - precioA;
        return 0;
      });
  
      libros.forEach(libro => contenedor.appendChild(libro));
    }
  
    function updatePrice(valor) {
      priceText.textContent = `0 € - ${valor} €`;
      filtrarLibros();
    }
  
    function limpiarFiltros() {
      inputBusqueda.value = "";
      priceRange.value = priceRange.max;
      updatePrice(priceRange.value);
  
      if (radioOpciones.length > 0) {
        radioOpciones.forEach(radio => radio.checked = false);
        radioOpciones[0].checked = true;
      }
  
      checkCategorias.forEach(c => c.checked = false);
      checkLongitudes.forEach(c => c.checked = false);
  
      limpiarParametroURL();
  
      textoURL = "";
      categoriaURL = "";
  
      filtrarLibros();
    }
  
    // Eventos
    inputBusqueda.addEventListener("input", filtrarLibros);
    priceRange.addEventListener("input", e => updatePrice(e.target.value));
    radioOpciones.forEach(radio => radio.addEventListener("change", filtrarLibros));
    checkCategorias.forEach(check => check.addEventListener("change", filtrarLibros));
    checkLongitudes.forEach(check => check.addEventListener("change", filtrarLibros));
  
    btnLimpiar.addEventListener("click", limpiarFiltros);
  
    filtrarLibros();
  });
  