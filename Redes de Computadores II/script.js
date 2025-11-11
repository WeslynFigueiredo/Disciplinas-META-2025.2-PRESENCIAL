/* ============================================
   FUNDAMENTOS DE REDES - SCRIPT.JS
   Módulo 1 - Material Autodidata
   ============================================ */

// Estado global
let currentSlide = 1;
const totalSlides = 18;

// Elementos DOM
let prevBtn = null;
let nextBtn = null;
let slideIndicator = null;
let progressText = null;
let progressBar = null;

// Estado dos jogos
let game1Current = 0;
let game1Score = 0;
let game2Current = 0;
let game2Score = 0;

// Questões do Jogo 1
const game1Questions = [
    {
        scenario: "Qual dispositivo aprende endereços MAC e encaminha dados apenas para a porta correta?",
        options: ["Hub", "Switch", "Router", "Servidor"],
        correct: 1,
        feedback: "✅ Correto! O Switch é inteligente e aprende os endereços MAC de cada computador."
    },
    {
        scenario: "O que diferencia uma rede Peer-to-Peer de uma Cliente-Servidor?",
        options: [
            "P2P tem servidor central",
            "P2P não tem servidor central; Cliente-Servidor tem",
            "Não há diferença",
            "P2P usa apenas um computador"
        ],
        correct: 1,
        feedback: "✅ Correto! Em P2P todos os dispositivos são iguais. Em Cliente-Servidor há um servidor central poderoso."
    },
    {
        scenario: "Qual padrão de cores para o RJ45 é mais comum nas redes comerciais?",
        options: ["568A", "568B", "568C", "568D"],
        correct: 1,
        feedback: "✅ Correto! O padrão 568B é o mais usado em redes residenciais e comerciais nos EUA."
    },
    {
        scenario: "O que é DHCP?",
        options: [
            "Um tipo de cabo de rede",
            "Um protocolo que atribui IPs automaticamente",
            "Um tipo de Switch",
            "Um servidor de arquivos"
        ],
        correct: 1,
        feedback: "✅ Correto! DHCP elimina a necessidade de configurar IPs manualmente em cada dispositivo."
    }
];

// Questões do Jogo 2
const game2Questions = [
    {
        scenario: "Você precisa montar um servidor de arquivos para sua empresa com 50 usuários. Que arquitetura de rede você usaria?",
        options: [
            "Peer-to-Peer (P2P)",
            "Cliente-Servidor",
            "Não importa",
            "Apenas com Hubs"
        ],
        correct: 1,
        feedback: "✅ Correto! Para 50 usuários, arquitetura Cliente-Servidor é ideal com um servidor central poderoso gerenciando tudo."
    },
    {
        scenario: "Qual padrão de cabo você usaria para conectar dois PCs diretamente (sem Switch)?",
        options: [
            "Cabo Direto (568B nos dois lados)",
            "Cabo Crossover (568A em uma ponta, 568B na outra)",
            "Qualquer um funciona",
            "Só dá para usar com Switch"
        ],
        correct: 1,
        feedback: "✅ Correto! O cabo Crossover é necessário para conectar dispositivos iguais (PC a PC) sem intermediários."
    },
    {
        scenario: "Em uma rede com DHCP, um novo computador é ligado. O que acontece?",
        options: [
            "O computador nunca consegue conexão",
            "É preciso configurar manualmente o IP",
            "O servidor DHCP atribui automaticamente um IP",
            "O computador gera seu próprio IP aleatório"
        ],
        correct: 2,
        feedback: "✅ Correto! O DHCP detecta o novo dispositivo e automaticamente atribui um endereço IP válido da rede."
    }
];

// ============================================
// INICIALIZAÇÃO
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    console.log('✅ Módulo 1 - Fundamentos de Redes inicializado');
    initNavigation();
    updateSlideDisplay();
    setupActivityForm();
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

    // Inicializar jogos quando seus slides são exibidos
    if (currentSlide === 14) {
        setTimeout(() => initGame1(), 100);
    }
    if (currentSlide === 15) {
        setTimeout(() => initGame2(), 100);
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
// JOGO 1 - IDENTIFICAR COMPONENTES
// ============================================

function initGame1() {
    game1Current = 0;
    game1Score = 0;
    loadGame1Question();
}

function loadGame1Question() {
    if (game1Current >= game1Questions.length) {
        showGame1FinalScore();
        return;
    }

    const question = game1Questions[game1Current];

    document.getElementById('game1-current').textContent = game1Current + 1;
    document.getElementById('game1-score').textContent = game1Score;
    document.getElementById('game1-scenario').innerHTML = question.scenario;

    const optionsHTML = question.options.map((option, index) => 
        `<button class="option-btn" onclick="checkGame1Answer(${index})">${option}</button>`
    ).join('');
    document.getElementById('game1-options').innerHTML = optionsHTML;

    document.getElementById('game1-feedback').style.display = 'none';
    document.getElementById('game1-next-btn').style.display = 'none';
}

function checkGame1Answer(selected) {
    const question = game1Questions[game1Current];
    const feedbackEl = document.getElementById('game1-feedback');

    if (selected === question.correct) {
        game1Score++;
        document.getElementById('game1-score').textContent = game1Score;
        feedbackEl.innerHTML = `<p class="correct">${question.feedback}</p>`;
    } else {
        feedbackEl.innerHTML = `<p class="incorrect">❌ Incorreto. A resposta correta é: <strong>${question.options[question.correct]}</strong></p>`;
    }

    feedbackEl.style.display = 'block';
    document.getElementById('game1-next-btn').style.display = 'block';
    document.querySelectorAll('#game1-options .option-btn').forEach(btn => btn.disabled = true);
}

function nextGame1Question() {
    game1Current++;
    loadGame1Question();
}

function showGame1FinalScore() {
    const finalEl = document.getElementById('game1-final');
    const percentage = Math.round((game1Score / game1Questions.length) * 100);

    let message = `Você acertou ${game1Score} de ${game1Questions.length} questões<br><br>Sua pontuação: ${percentage}%`;

    if (percentage === 100) {
        message += '<br><br><span class="excellent">🌟 PERFEITO! Você domina completamente este tópico!</span>';
    } else if (percentage >= 75) {
        message += '<br><br><span class="excellent">✅ Excelente! Você tem bom domínio dos conceitos!</span>';
    } else if (percentage >= 50) {
        message += '<br><br><span class="excellent">👍 Bom! Continue revisando os tópicos.</span>';
    } else {
        message += '<br><br><span class="excellent">💪 Continue estudando! Você consegue!</span>';
    }

    finalEl.innerHTML = message;

    document.getElementById('game1-scenario').style.display = 'none';
    document.getElementById('game1-options').style.display = 'none';
    document.getElementById('game1-feedback').style.display = 'none';
    document.getElementById('game1-next-btn').style.display = 'none';
    finalEl.style.display = 'block';
}

// ============================================
// JOGO 2 - CENÁRIOS PRÁTICOS
// ============================================

function initGame2() {
    game2Current = 0;
    game2Score = 0;
    loadGame2Question();
}

function loadGame2Question() {
    if (game2Current >= game2Questions.length) {
        showGame2FinalScore();
        return;
    }

    const question = game2Questions[game2Current];

    document.getElementById('game2-current').textContent = game2Current + 1;
    document.getElementById('game2-score').textContent = game2Score;
    document.getElementById('game2-scenario').innerHTML = question.scenario;

    const optionsHTML = question.options.map((option, index) => 
        `<button class="option-btn" onclick="checkGame2Answer(${index})">${option}</button>`
    ).join('');
    document.getElementById('game2-options').innerHTML = optionsHTML;

    document.getElementById('game2-feedback').style.display = 'none';
    document.getElementById('game2-next-btn').style.display = 'none';
}

function checkGame2Answer(selected) {
    const question = game2Questions[game2Current];
    const feedbackEl = document.getElementById('game2-feedback');

    if (selected === question.correct) {
        game2Score++;
        document.getElementById('game2-score').textContent = game2Score;
        feedbackEl.innerHTML = `<p class="correct">${question.feedback}</p>`;
    } else {
        feedbackEl.innerHTML = `<p class="incorrect">❌ Incorreto. A resposta correta é: <strong>${question.options[question.correct]}</strong></p>`;
    }

    feedbackEl.style.display = 'block';
    document.getElementById('game2-next-btn').style.display = 'block';
    document.querySelectorAll('#game2-options .option-btn').forEach(btn => btn.disabled = true);
}

function nextGame2Question() {
    game2Current++;
    loadGame2Question();
}

function showGame2FinalScore() {
    const finalEl = document.getElementById('game2-final');
    const percentage = Math.round((game2Score / game2Questions.length) * 100);

    let message = `Você acertou ${game2Score} de ${game2Questions.length} questões<br><br>Sua pontuação: ${percentage}%`;

    if (percentage === 100) {
        message += '<br><br><span class="excellent">🌟 PERFEITO! Você aplicaria os conceitos perfeitamente!</span>';
    } else if (percentage >= 75) {
        message += '<br><br><span class="excellent">✅ Excelente! Você tem excelente compreensão prática!</span>';
    } else if (percentage >= 50) {
        message += '<br><br><span class="excellent">👍 Bom! Você está no caminho certo!</span>';
    } else {
        message += '<br><br><span class="excellent">💪 Continue praticando! Você melhora cada dia!</span>';
    }

    finalEl.innerHTML = message;

    document.getElementById('game2-scenario').style.display = 'none';
    document.getElementById('game2-options').style.display = 'none';
    document.getElementById('game2-feedback').style.display = 'none';
    document.getElementById('game2-next-btn').style.display = 'none';
    finalEl.style.display = 'block';
}

// ============================================
// FORMULÁRIO DE ATIVIDADE
// ============================================

function setupActivityForm() {
    const form = document.getElementById('activityForm');
    if (!form) return;

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        // Capturar respostas (opcional - você pode salvar em localStorage)
        const responses = new FormData(form);

        // Mostrar mensagem de sucesso
        document.getElementById('submissionFeedback').style.display = 'block';
        document.getElementById('submissionFeedback').scrollIntoView({ 
            behavior: 'smooth', 
            block: 'center' 
        });

        // Limpar formulário (opcional)
        form.reset();
    });
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
