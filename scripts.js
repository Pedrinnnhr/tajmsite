document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
document.getElementById('translateButton').addEventListener('click', function() {
    var ptElements = document.querySelectorAll('.pt');
    var enElements = document.querySelectorAll('.en');

    ptElements.forEach(function(element) {
        element.style.display = element.style.display === 'none' ? 'block' : 'none';
    });

    enElements.forEach(function(element) {
        element.style.display = element.style.display === 'none' ? 'block' : 'none';
    });

    this.textContent = this.textContent === 'Translate to English' ? 'Traduzir para Português' : 'Translate to English';
});
