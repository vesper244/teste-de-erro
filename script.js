// script.js
window.onload = function() {
    // Defina o link para o qual você quer redirecionar o usuário
    const destinationURL = "https://api.whatsapp.com/send/?phone=555180443401&text&type=phone_number&app_absent=0"; // <-- TROQUE ESTE LINK!

    // Define o tempo de espera em milissegundos.
    // Para um redirecionamento quase instantâneo, você pode usar um valor baixo como 100 ou até 0.
    const delay = 50; // Meio segundo de espera

    // Função que redireciona o usuário
    setTimeout(function() {
        window.location.href = destinationURL;
    }, delay);
};