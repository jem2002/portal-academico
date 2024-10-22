document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');
    const loginMessage = document.getElementById('login-message');

    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Simulación de autenticación (reemplazar con lógica real de autenticación)
        if (username === 'demo' && password === 'password') {
            loginMessage.textContent = '¡Inicio de sesión exitoso!';
            loginMessage.style.color = 'green';
        } else {
            loginMessage.textContent = 'Usuario o contraseña incorrectos. Por favor, intente de nuevo.';
            loginMessage.style.color = 'red';
        }
    });
});