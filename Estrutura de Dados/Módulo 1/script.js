/* ============================================
   C++ E FILA - SCRIPT.JS
   ============================================ */

let currentSlide = 1;
const totalSlides = 21;

// Elementos DOM
let prevBtn = null;
let nextBtn = null;
let slideIndicator = null;
let progressText = null;
let progressBar = null;

// ============================================
// INICIALIZAÇÃO
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    console.log('✅ Módulo C++ e Fila inicializado');
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

    // Atualizar botões
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
// MINI-DESAFIO (SLIDE 10)
// ============================================

function checkChallenge() {
    const answer = document.getElementById('challengeAnswer').value.trim();
    const feedbackEl = document.getElementById('challengeFeedback');
    const solutionEl = document.getElementById('challengeSolution');

    // Respostas aceitas (simplificado)
    const correctAnswers = [
        'if (idade >= 18 && nome != "visitante")',
        'if(idade>=18&&nome!="visitante")',
        'if (idade >= 18 && nome != \'visitante\')',
        'if(idade>=18&&nome!=\'visitante\')'
    ];

    // Verificar se resposta está correta
    const isCorrect = correctAnswers.some(correct => 
        answer.toLowerCase().replace(/\s+/g, '') === correct.toLowerCase().replace(/\s+/g, '')
    );

    feedbackEl.classList.remove('hidden');
    solutionEl.classList.remove('hidden');

    if (isCorrect) {
        feedbackEl.className = 'feedback success';
        feedbackEl.innerHTML = '✅ <strong>Parabéns! Resposta correta!</strong><br>Você compreendeu bem os operadores lógicos e relacionais.';
    } else {
        feedbackEl.className = 'feedback error';
        feedbackEl.innerHTML = '❌ <strong>Não está correto.</strong><br>Confira a solução abaixo e tente novamente.';
    }
}

// ============================================
// MOSTRAR SOLUÇÃO DA ATIVIDADE (SLIDE 20)
// ============================================

function showSolution() {
    // Avançar para o próximo slide (solução)
    if (currentSlide === 20) {
        nextSlide();
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

function getProgress() {
    return Math.round((currentSlide / totalSlides) * 100);
}

console.log('Script C++ e Fila carregado com sucesso!');
