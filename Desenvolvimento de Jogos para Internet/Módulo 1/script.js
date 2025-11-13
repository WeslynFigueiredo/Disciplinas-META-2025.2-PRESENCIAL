/* ============================================
   GODOT ENGINE - SCRIPT.JS
   ============================================ */

let currentSlide = 1;
const totalSlides = 18;

let prevBtn = null;
let nextBtn = null;
let slideCounter = null;
let progressLabel = null;
let progressFill = null;

// ============================================
// INICIALIZAÇÃO
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    console.log('✅ Módulo Godot Engine carregado');
    initializeElements();
    updateSlideDisplay();
});

function initializeElements() {
    prevBtn = document.getElementById('prevBtn');
    nextBtn = document.getElementById('nextBtn');
    slideCounter = document.getElementById('slideCounter');
    progressLabel = document.getElementById('progressLabel');
    progressFill = document.getElementById('progressFill');

    if (prevBtn) prevBtn.addEventListener('click', previousSlide);
    if (nextBtn) nextBtn.addEventListener('click', nextSlide);

    // Navegação por teclado
    document.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowLeft') previousSlide();
        else if (e.key === 'ArrowRight') nextSlide();
    });
}

// ============================================
// NAVEGAÇÃO DE SLIDES
// ============================================

function previousSlide() {
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
    const slides = document.querySelectorAll('.slide');
    slides.forEach(slide => {
        slide.classList.remove('active');
    });

    // Mostrar slide ativo
    const activeSlide = document.querySelector(`[data-slide="${currentSlide}"]`);
    if (activeSlide) {
        activeSlide.classList.add('active');
    }

    // Atualizar botões
    if (prevBtn) prevBtn.disabled = currentSlide === 1;
    if (nextBtn) nextBtn.disabled = currentSlide === totalSlides;

    // Atualizar indicadores
    updateIndicators();

    // Scroll para top
    window.scrollTo(0, 0);
}

function updateIndicators() {
    const progressPercent = (currentSlide / totalSlides) * 100;

    if (slideCounter) {
        slideCounter.textContent = `Slide ${currentSlide} de ${totalSlides}`;
    }

    if (progressLabel) {
        progressLabel.textContent = `Slide ${currentSlide} de ${totalSlides}`;
    }

    if (progressFill) {
        progressFill.style.width = `${progressPercent}%`;
    }
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

function goToSlide(number) {
    if (number >= 1 && number <= totalSlides) {
        currentSlide = number;
        updateSlideDisplay();
    }
}

console.log('Script Godot Engine carregado!');
