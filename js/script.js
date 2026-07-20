/*
==========================================================
Nutrigrain
Archivo principal de JavaScript
Versión: 1.0
==========================================================
*/

document.addEventListener("DOMContentLoaded", () => {

    // ==========================================
    // Resaltar el enlace activo del menú
    // ==========================================

    const currentPage = window.location.pathname.split("/").pop() || "index.html";

    const menuLinks = document.querySelectorAll("nav a");

    menuLinks.forEach(link => {

        const href = link.getAttribute("href");

        if (href === currentPage) {

            link.classList.add("activo");

        } else {

            link.classList.remove("activo");

        }

    });

    // ==========================================
    // Animación al aparecer las tarjetas
    // ==========================================

    const cards = document.querySelectorAll(".card");

    const observer = new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

            }

        });

    }, {
        threshold: 0.2
    });

    cards.forEach(card => {

        card.style.opacity = "0";
        card.style.transform = "translateY(40px)";
        card.style.transition = "all .7s ease";

        observer.observe(card);

    });

});

// ==========================================
// Cambiar sombra del header al hacer scroll
// ==========================================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 20) {

        header.style.boxShadow = "0 8px 20px rgba(0,0,0,.15)";

    } else {

        header.style.boxShadow = "0 2px 10px rgba(0,0,0,.05)";

    }

});

// ==========================================
// Crear botón "Volver arriba"
// ==========================================

const topButton = document.createElement("button");

topButton.innerHTML = "↑";

topButton.id = "btnTop";

document.body.appendChild(topButton);

topButton.style.position = "fixed";
topButton.style.bottom = "25px";
topButton.style.right = "25px";
topButton.style.width = "50px";
topButton.style.height = "50px";
topButton.style.border = "none";
topButton.style.borderRadius = "50%";
topButton.style.background = "#2E7D32";
topButton.style.color = "#FFF";
topButton.style.fontSize = "22px";
topButton.style.cursor = "pointer";
topButton.style.display = "none";
topButton.style.boxShadow = "0 8px 20px rgba(0,0,0,.2)";
topButton.style.transition = ".3s";

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        topButton.style.display = "block";

    } else {

        topButton.style.display = "none";

    }

});

topButton.addEventListener("click", () => {

    window.scrollTo({

        top: 0,
        behavior: "smooth"

    });

});
