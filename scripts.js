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
document.addEventListener('DOMContentLoaded', function () {
    const video = document.getElementById('taj-mahal-video');
    const playPauseBtn = document.getElementById('play-pause-btn');
    const translateBtn = document.getElementById('translate-btn');

    const texts = {
        pt: {
            title: "Taj Mahal",
            historiaLink: "História",
            arquiteturaLink: "Arquitetura",
            significadoLink: "Significado Cultural",
            curiosidadesLink: "Curiosidades",
            galeriaLink: "Galeria",
            musicaLink: "Música",
            translateBtn: "Translate to English",
            historiaTitle: "História",
            historiaText: "O Taj Mahal foi construído pelo imperador Mughal Shah Jahan em memória de sua amada esposa Mumtaz Mahal...",
            arquiteturaTitle: "Arquitetura",
            arquiteturaText: "A arquitetura do Taj Mahal combina elementos de estilos islâmico, persa, otomano e indiano...",
            significadoTitle: "Significado Cultural",
            significadoText: "O Taj Mahal é um símbolo do amor eterno e uma obra-prima da arquitetura mundial...",
            curiosidade1: "Curiosidade 1: A construção do Taj Mahal começou em 1632 e foi concluída em 1653.",
            curiosidade2: "Curiosidade 2: O mármore branco usado na construção veio de Makrana, no Rajastão.",
            curiosidade3: "Curiosidade 3: Mais de 20.000 artesãos trabalharam na construção do Taj Mahal.",
            curiosidade4: "Curiosidade 4: O Taj Mahal muda de cor dependendo da hora do dia, variando do rosa suave ao branco brilhante.",
            curiosidade5: "Curiosidade 5: Há uma lenda que diz que Shah Jahan planejava construir uma réplica do Taj Mahal em mármore preto do outro lado do rio Yamuna...",
            curiosidade6: "Curiosidade 6: O complexo do Taj Mahal inclui uma mesquita e uma casa de hóspedes, além dos jardins...",
            galeriaTitle: "Galeria",
            musicaTitle: "Música",
        },
        en: {
            title: "Taj Mahal",
            historiaLink: "History",
            arquiteturaLink: "Architecture",
            significadoLink: "Cultural Significance",
            curiosidadesLink: "Curiosities",
            galeriaLink: "Gallery",
            musicaLink: "Music",
            translateBtn: "Traduzir para Português",
            historiaTitle: "History",
            historiaText: "The Taj Mahal was built by Mughal Emperor Shah Jahan in memory of his beloved wife Mumtaz Mahal...",
            arquiteturaTitle: "Architecture",
            arquiteturaText: "The architecture of the Taj Mahal combines elements of Islamic, Persian, Ottoman, and Indian styles...",
            significadoTitle: "Cultural Significance",
            significadoText: "The Taj Mahal is a symbol of eternal love and a masterpiece of world architecture...",
            curiosidade1: "Curiosity 1: The construction of the Taj Mahal began in 1632 and was completed in 1653.",
            curiosidade2: "Curiosity 2: The white marble used in the construction came from Makrana, in Rajasthan.",
            curiosidade3: "Curiosity 3: More than 20,000 artisans worked on the construction of the Taj Mahal.",
            curiosidade4: "Curiosity 4: The Taj Mahal changes color depending on the time of day, ranging from soft pink to bright white.",
            curiosidade5: "Curiosity 5: There is a legend that Shah Jahan planned to build a black marble replica of the Taj Mahal on the other side of the Yamuna River...",
            curiosidade6: "Curiosity 6: The Taj Mahal complex includes a mosque and a guest house, in addition to the gardens...",
            galeriaTitle: "Gallery",
            musicaTitle: "Music",
        }
    };

    let currentLanguage = 'pt';

    function updateText(language) {
        document.getElementById('title').textContent = texts[language].title;
        document.getElementById('historia-link').textContent = texts[language].historiaLink;
        document.getElementById('arquitetura-link').textContent = texts[language].arquiteturaLink;
        document.getElementById('significado-link').textContent = texts[language].significadoLink;
        document.getElementById('curiosidades-link').textContent = texts[language].curiosidadesLink;
        document.getElementById('galeria-link').textContent = texts[language].galeriaLink;
        document.getElementById('musica-link').textContent = texts[language].musicaLink;
        translateBtn.textContent = texts[language].translateBtn;

        document.getElementById('historia-title').textContent = texts[language].historiaTitle;
        document.getElementById('historia-text').textContent = texts[language].historiaText;
        document.getElementById('arquitetura-title').textContent = texts[language].arquiteturaTitle;
        document.getElementById('arquitetura-text').textContent = texts[language].arquiteturaText;
        document.getElementById('significado-title').textContent = texts[language].significadoTitle;
        document.getElementById('significado-text').textContent = texts[language].significadoText;
        document.getElementById('curiosidade1').textContent = texts[language].curiosidade1;
        document.getElementById('curiosidade2').textContent = texts[language].curiosidade2;
        document.getElementById('curiosidade3').textContent = texts[language].curiosidade3;
        document.getElementById('curiosidade4').textContent = texts[language].curiosidade4;
        document.getElementById('curiosidade5').textContent = texts[language].curiosidade5;
        document.getElementById('curiosidade6').textContent = texts[language].curiosidade6;
        document.getElementById('galeria-title').textContent = texts[language].galeriaTitle;
        document.getElementById('musica-title').textContent = texts[language].musicaTitle;
    }

    translateBtn.addEventListener('click', function () {
        currentLanguage = currentLanguage === 'pt' ? 'en' : 'pt';
        updateText(currentLanguage);
    });

    playPauseBtn.addEventListener('click', function () {
        if (video.paused) {
            video.play();
            playPauseBtn.textContent = 'Pause Música';
        } else {
            video.pause();
            playPauseBtn.textContent = 'Play Música';
        }
    });
});
