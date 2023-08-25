// DOMContentLoaded, para o código ser executado somente após o carregamento completo do DOM

document.addEventListener("DOMContentLoaded", function () {
    // Pega o elemento do link do WhatsApp
    const whatsappLink = document.getElementById("whatsapp-link");

    const telefone = "5511989370919";

    const whatsappIcon = document.createElement("img");
    whatsappIcon.src = "./img/logowhats.png";

    whatsappIcon.classList.add("whatsapp-icon"); // Adicione a classe de estilo
    whatsappIcon.style.width = "45px";
    whatsappIcon.style.height = "40px";

    // Remove qualquer conteúdo existente do link
    whatsappLink.innerHTML = "";

    // Adiciona a imagem do ícone como filho do link
    whatsappLink.appendChild(whatsappIcon);

    whatsappLink.addEventListener("click", function (event) {
        event.preventDefault(); // Previne o comportamento padrão do link

        const link = `https://api.whatsapp.com/send?phone=${telefone}`;

        window.open(link, "_blank");
    });
});
