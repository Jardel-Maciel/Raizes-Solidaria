document.addEventListener("DOMContentLoaded", () => {

  const cardsImpacto = document.querySelectorAll(
    '.container-div .div1, .container-div .div2, .container-div .div3, .container-div .div4'
  );

  if (!cardsImpacto.length) return;

  const observerImpacto = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('ativo');
      } else {
        entry.target.classList.remove('ativo'); // remova se quiser só 1x
      }
    });
  }, {
    threshold: 0.2
  });

  cardsImpacto.forEach(card => observerImpacto.observe(card));

});

// === FORMULÁRIO DE VOLUNTÁRIO ===
// === ALERTA DE SUCESSO DO FORMULÁRIO ===
document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("form-voluntario");
    const alerta = document.getElementById("alerta-sucesso");
    const fechar = document.getElementById("fechar-alerta");

    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault();

            // Limpa formulário
            form.reset();

            // Exibe alerta
            alerta.style.display = "flex";
        });
    }

    fechar.addEventListener("click", function () {
        alerta.style.display = "none";
    });

});

