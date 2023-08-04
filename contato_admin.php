<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nome = $_POST["primeiroNome"] . " " . $_POST["sobrenome"];
    $empresa = $_POST["empresa"];
    $email = $_POST["email"];
    $telefone = $_POST["telefone"];
    $mensagem = $_POST["mensagem"];

    $to = "contatolupires@gmail.com"; // Meu endereço de email
    $subject = "Nova mensagem do formulário de contato";
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    
    // Monta o corpo do email
    $body = "Nome: $nome\n";
    $body .= "Empresa: $empresa\n";
    $body .= "Email: $email\n";
    $body .= "Telefone: $telefone\n\n";
    $body .= "Mensagem:\n$mensagem\n";

    // Envia o email
    if (mail($to, $subject, $body, $headers)) {
        echo "Mensagem enviada com sucesso!";
    } else {
        echo "Erro ao enviar a mensagem.";
    }
}
?>
