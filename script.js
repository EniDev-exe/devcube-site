// ano dinâmico no footer
document.getElementById("year").textContent = new Date().getFullYear();

// ==================== LÓGICA DO MENU MOBILE ====================
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLinks = document.querySelectorAll(".nav-menu a");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

// Fecha o menu quando um link é clicado (útil para navegação #hash)
navLinks.forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("active");
    });
});


// ==================== Sucesso do formulário ====================
function getQueryParam(param) {
  const params = new URLSearchParams(window.location.search);
  return params.get(param);
}

document.addEventListener("DOMContentLoaded", function () {
  const success = getQueryParam("success");
  const popup = document.getElementById("form-success-popup");

  if (success && popup) {
    popup.classList.add("is-visible");

    setTimeout(() => {
      popup.classList.remove("is-visible");

      // remove ?success=1 da URL
      const url = new URL(window.location.href);
      url.searchParams.delete("success");
      window.history.replaceState({}, "", url.toString());
    }, 3200);

    popup.addEventListener("click", (e) => {
      if (e.target === popup) {
        popup.classList.remove("is-visible");
        const url = new URL(window.location.href);
        url.searchParams.delete("success");
        window.history.replaceState({}, "", url.toString());
      }
    });
  }
  
  // ==================== LÓGICA MOSTRAR MAIS PROJETOS ====================
  const showMoreBtn = document.getElementById("show-more-btn");
  const hiddenProjects = document.querySelectorAll(".project-hidden");
  const noMoreMsg = document.getElementById("no-more-msg");

  if (showMoreBtn && hiddenProjects.length > 0) {
      showMoreBtn.addEventListener("click", () => {
          // 1. Torna todos os projetos ocultos visíveis
          hiddenProjects.forEach(project => {
              // Remove a classe de ocultar
              project.classList.remove("project-hidden"); 
              // Adiciona a classe de visibilidade para triggerar a animação de entrada
              project.classList.add("is-visible");
          });
          
          // 2. Oculta o botão "Mostrar mais"
          showMoreBtn.style.display = "none";

          // 3. Exibe a mensagem de que não há mais projetos
          noMoreMsg.classList.add("visible-msg");
      });
  } 
  
  // Se não houver projetos ocultos (ou se forem removidos no HTML), 
  // o botão não é exibido e a mensagem aparece automaticamente.
  if (hiddenProjects.length === 0 && showMoreBtn) {
      showMoreBtn.style.display = "none";
      noMoreMsg.classList.add("visible-msg");
  }
  // ==================== FIM DA LÓGICA MOSTRAR MAIS PROJETOS ====================
});
