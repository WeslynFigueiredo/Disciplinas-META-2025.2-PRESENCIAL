/* ============================================
   DDL - SCRIPT.JS
   ============================================ */

let currentSlide = 1;
const totalSlides = 22;

let prevBtn = null;
let nextBtn = null;
let slideIndicator = null;
let progressText = null;
let progressBar = null;

// ============================================
// INICIALIZAÇÃO
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    console.log('✅ Módulo DDL inicializado');
    initNavigation();
    updateSlideDisplay();
});

// ============================================
// NAVEGAÇÃO
// ============================================

function initNavigation() {
    prevBtn = document.getElementById('prevBtn');
    nextBtn = document.getElementById('nextBtn');
    slideIndicator = document.getElementById('slideIndicator');
    progressText = document.getElementById('progressText');
    progressBar = document.getElementById('progressBar');

    if (prevBtn) prevBtn.addEventListener('click', prevSlide);
    if (nextBtn) nextBtn.addEventListener('click', nextSlide);

    // Navegação por teclado
    document.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowLeft') prevSlide();
        else if (e.key === 'ArrowRight') nextSlide();
    });
}

function prevSlide() {
    if (currentSlide > 1) {
        currentSlide--;
        updateSlideDisplay();
    }
}

function nextSlide() {
    if (currentSlide < totalSlides) {
        currentSlide++;
        updateSlideDisplay();
    }
}

function updateSlideDisplay() {
    // Ocultar todos os slides
    document.querySelectorAll('.slide').forEach(slide => {
        slide.classList.remove('active');
    });

    // Mostrar slide ativo
    const activeSlide = document.querySelector(`[data-slide="${currentSlide}"]`);
    if (activeSlide) {
        activeSlide.classList.add('active');
    }

    // Atualizar botões de navegação
    if (prevBtn) prevBtn.disabled = currentSlide === 1;
    if (nextBtn) nextBtn.disabled = currentSlide === totalSlides;

    // Atualizar indicadores
    if (slideIndicator) slideIndicator.textContent = `Slide ${currentSlide} de ${totalSlides}`;
    if (progressText) progressText.textContent = `Slide ${currentSlide} de ${totalSlides}`;

    // Atualizar barra de progresso
    const progress = (currentSlide / totalSlides) * 100;
    if (progressBar) progressBar.style.width = `${progress}%`;

    // Scroll para o topo
    window.scrollTo(0, 0);
}

// ============================================
// UTILITÁRIOS
// ============================================

function getCurrentSlide() {
    return currentSlide;
}

function getTotalSlides() {
    return totalSlides;
}

function getProgress() {
    return Math.round((currentSlide / totalSlides) * 100);
}

console.log('Script carregado com sucesso!');
