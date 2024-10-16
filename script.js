
document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.querySelector('.hamburger');
    const sidebar = document.querySelector('.sidebar');
    const overlay = document.querySelector('.overlay');

    hamburger.addEventListener('click', function() {
        sidebar.classList.toggle('active');
        overlay.classList.toggle('active'); 
    });


    overlay.addEventListener('click', function() {
        sidebar.classList.remove('active');
        overlay.classList.remove('active'); 
    });
});