import { loadComponent } from './utils.js';

document.addEventListener('DOMContentLoaded', async () => {
    loadComponent('header', '/components/header.html');
    loadComponent('footer', '/components/footer.html');

    const loginForm = document.getElementById('login-form');
    const recoveryForm = document.getElementById('recovery-form');
    const newPasswordForm = document.getElementById('new-password-form');
    const forgotPasswordLink = document.getElementById('forgot-password');
    const loginContainer = document.querySelector('.login-container');
    const recoveryContainer = document.querySelector('.recovery-container');
    const newPasswordContainer = document.querySelector('.new-password-container');
    const errorMessage = document.getElementById('error-message');
    const carousel = document.querySelector('.carousel-container');
    const slides = document.querySelectorAll('.carousel-slide');
    const prevButton = document.querySelector('.carousel-button.prev');
    const nextButton = document.querySelector('.carousel-button.next');
    let currentSlide = 0;

    function showSlide(n) {
        carousel.style.transform = `translateX(-${n * 100}%)`;
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    }

    nextButton.addEventListener('click', nextSlide);
    prevButton.addEventListener('click', prevSlide);

    // Cambiar slide automáticamente cada 10 segundos
    setInterval(nextSlide, 10000);

    // Calendario simple
    const calendarContainer = document.getElementById('calendar-container');
    const date = new Date();
    const monthNames = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

    calendarContainer.innerHTML = `
        <h3>${monthNames[date.getMonth()]} ${date.getFullYear()}</h3>
        <table>
            <tr>
                <th>Dom</th>
                <th>Lun</th>
                <th>Mar</th>
                <th>Mié</th>
                <th>Jue</th>
                <th>Vie</th>
                <th>Sáb</th>
            </tr>
            ${generateCalendarDays(date)}
        </table>
    `;

    // Menú desplegable
    const dropdowns = document.querySelectorAll('.dropdown');
    dropdowns.forEach(dropdown => {
        const link = dropdown.querySelector('a');
        const content = dropdown.querySelector('.dropdown-content');

        link.addEventListener('click', (e) => {
            e.preventDefault();
            content.classList.toggle('show');
        });

        // Cerrar el menú desplegable cuando se hace clic fuera de él
        document.addEventListener('click', (e) => {
            if (!dropdown.contains(e.target)) {
                content.classList.remove('show');
            }
        });
    });

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if (!username || !password) {
            errorMessage.textContent = 'Por favor, complete todos los campos.';
            return;
        }

        // Aquí iría la lógica de autenticación
        // Por ahora, simularemos un inicio de sesión exitoso
        errorMessage.textContent = '';
        alert('Inicio de sesión exitoso');
    });

    forgotPasswordLink.addEventListener('click', (e) => {
        e.preventDefault();
        loginContainer.style.display = 'none';
        recoveryContainer.style.display = 'block';
    });

    recoveryForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const username = document.getElementById('recovery-username').value;
        const email = document.getElementById('recovery-email').value;
        const recoveryMessage = document.getElementById('recovery-message');

        if (!username || !email) {
            showMessage(recoveryMessage, 'Por favor, complete todos los campos.', 'error');
            return;
        }

        if (!isValidEmail(email)) {
            showMessage(recoveryMessage, 'Por favor, ingrese un correo electrónico válido.', 'error');
            return;
        }

        // Aquí iría la lógica de recuperación de contraseña
        // Simulamos una respuesta exitosa
        showMessage(recoveryMessage, 'Se ha enviado un enlace de recuperación a su correo electrónico.', 'success');
        setTimeout(() => {
            recoveryContainer.style.display = 'none';
            newPasswordContainer.style.display = 'block';
        }, 3000);
    });

    newPasswordForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const newPassword = document.getElementById('new-password').value;
        const confirmPassword = document.getElementById('confirm-password').value;
        const newPasswordMessage = document.getElementById('new-password-message');

        if (!newPassword || !confirmPassword) {
            showMessage(newPasswordMessage, 'Por favor, complete todos los campos.', 'error');
            return;
        }

        if (newPassword !== confirmPassword) {
            showMessage(newPasswordMessage, 'Las contraseñas no coinciden.', 'error');
            return;
        }

        if (!isValidPassword(newPassword)) {
            showMessage(newPasswordMessage, 'La contraseña debe tener al menos 8 caracteres, incluyendo una mayúscula, una minúscula y un número.', 'error');
            return;
        }

        // Aquí iría la lógica para establecer la nueva contraseña
        showMessage(newPasswordMessage, 'Se ha establecido la nueva contraseña exitosamente.', 'success');
        setTimeout(() => {
            newPasswordContainer.style.display = 'none';
            loginContainer.style.display = 'block';
        }, 3000);
    });
});

function generateCalendarDays(date) {
    const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
    const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    let dayCount = 1;
    let calendarHTML = '';

    for (let i = 0; i < 6; i++) {
        calendarHTML += '<tr>';
        for (let j = 0; j < 7; j++) {
            if (i === 0 && j < firstDay.getDay()) {
                calendarHTML += '<td></td>';
            } else if (dayCount > lastDay.getDate()) {
                calendarHTML += '<td></td>';
            } else {
                calendarHTML += `<td>${dayCount}</td>`;
                dayCount++;
            }
        }
        calendarHTML += '</tr>';
        if (dayCount > lastDay.getDate()) break;
    }

    return calendarHTML;
    }

function showMessage(element, message, type) {
    element.textContent = message;
    element.className = `message ${type}`;
}

function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function isValidPassword(password) {
    const re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    return re.test(password);
}

document.addEventListener('DOMContentLoaded', () => {
    const navbarToggle = document.querySelector('.navbar-toggle');
    const navbarMenu = document.querySelector('.navbar-menu');

    if (navbarToggle && navbarMenu) {
        navbarToggle.addEventListener('click', () => {
            navbarToggle.classList.toggle('active');
            navbarMenu.classList.toggle('active');
        });

        navbarMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navbarToggle.classList.remove('active');
                navbarMenu.classList.remove('active');
            });
        });
    }
});

