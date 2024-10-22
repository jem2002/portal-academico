document.addEventListener('DOMContentLoaded', function() {
    const tabs = document.querySelectorAll('.nivel-tab');
    const contents = document.querySelectorAll('.nivel-content');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const nivel = tab.getAttribute('data-nivel');
            
            tabs.forEach(t => t.classList.remove('active'));
            contents.forEach(c => c.classList.remove('active'));

            tab.classList.add('active');
            document.getElementById(nivel).classList.add('active');
        });
    });
});