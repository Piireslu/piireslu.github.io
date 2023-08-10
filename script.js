document.addEventListener("DOMContentLoaded", function() {
    var form = document.querySelector(".contactForm form"); // Selecione o formulário corretamente
    if (form) {
        form.addEventListener("submit", function(event) {
            event.preventDefault();

            var primeiroNome = form.querySelector('input[name="primeiroNome"]').value;
            var sobrenome = form.querySelector('input[name="sobrenome"]').value;
            var mensagem = form.querySelector('textarea[name="mensagem"]').value;

            // Armazena a mensagem no armazenamento local do navegador
            var storedMessages = JSON.parse(localStorage.getItem("messages")) || [];
            storedMessages.push({ primeiroNome, sobrenome, mensagem });
            localStorage.setItem("messages", JSON.stringify(storedMessages));

            // Limpa os campos do formulário
            form.querySelector('input[name="primeiroNome"]').value = "";
            form.querySelector('input[name="sobrenome"]').value = "";
            form.querySelector('textarea[name="mensagem"]').value = "";

            // Redireciona para a página feedbacks.html
            window.location.href = "feedbacks.html";
        });
    }

    // Exibe os comentários na página feedbacks.html
    var commentsContainer = document.getElementById("comments");
    if (commentsContainer) {
        var storedMessages = JSON.parse(localStorage.getItem("messages")) || [];
        storedMessages.forEach(function(message) {
            var commentElement = document.createElement("div");
            commentElement.classList.add("comment");
            commentElement.innerHTML = "<strong>" + message.primeiroNome + " " + message.sobrenome + "</strong>: " + message.mensagem;
            commentsContainer.appendChild(commentElement);
        });
    }
});
