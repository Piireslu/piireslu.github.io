<script>
    document.addEventListener("DOMContentLoaded", function() {
        var form = document.querySelector(".contactForm form");
        if (form) {
            form.addEventListener("submit", function(event) {
                var primeiroNome = form.querySelector('input[name="primeiroNome"]').value;
                var sobrenome = form.querySelector('input[name="sobrenome"]').value;
                var mensagem = form.querySelector('textarea[name="mensagem"]').value;
                var email = form.querySelector('input[name="email"]').value;

                if (primeiroNome.length < 3) {
                    alert("O primeiro nome deve ter pelo menos 3 caracteres.");
                    event.preventDefault();
                } else if (!email.includes("@")) {
                    alert("O email deve conter o símbolo '@'.");
                    event.preventDefault();
                } else if (mensagem.length < 20) {
                    alert("A mensagem deve ter pelo menos 20 caracteres.");
                    event.preventDefault();
                }
            });
        }
    });
</script>
