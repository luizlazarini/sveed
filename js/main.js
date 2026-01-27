// ==========================================================================
// SVEED - Site Institucional - JavaScript Principal
// ==========================================================================

// Dados do Dashboard (Placeholder realistas - 1º Semestre 2025)
const dashboardData = {
    mes: {
        todas: {
            tempoMedio: 38,
            sessoesCompletas: 72,
            totalSessoes: 41235,
            distribuicaoArea: {
                'Português': 28,
                'Matemática': 26,
                'Ciências': 18,
                'História': 15,
                'Inglês': 13
            },
            evolucaoTemporal: {
                labels: ['Sem 1', 'Sem 2', 'Sem 3', 'Sem 4'],
                valores: [35, 37, 39, 40]
            }
        },
        'zona-urbana': {
            tempoMedio: 42,
            sessoesCompletas: 78,
            totalSessoes: 28456,
            distribuicaoArea: {
                'Português': 29,
                'Matemática': 27,
                'Ciências': 19,
                'História': 14,
                'Inglês': 11
            },
            evolucaoTemporal: {
                labels: ['Sem 1', 'Sem 2', 'Sem 3', 'Sem 4'],
                valores: [38, 41, 43, 44]
            }
        },
        'zona-rural': {
            tempoMedio: 31,
            sessoesCompletas: 63,
            totalSessoes: 12779,
            distribuicaoArea: {
                'Português': 26,
                'Matemática': 24,
                'Ciências': 17,
                'História': 17,
                'Inglês': 16
            },
            evolucaoTemporal: {
                labels: ['Sem 1', 'Sem 2', 'Sem 3', 'Sem 4'],
                valores: [28, 30, 32, 34]
            }
        },
        'zona-norte': {
            tempoMedio: 36,
            sessoesCompletas: 70,
            totalSessoes: 19847,
            distribuicaoArea: {
                'Português': 27,
                'Matemática': 25,
                'Ciências': 19,
                'História': 16,
                'Inglês': 13
            },
            evolucaoTemporal: {
                labels: ['Sem 1', 'Sem 2', 'Sem 3', 'Sem 4'],
                valores: [33, 35, 37, 39]
            }
        },
        'zona-sul': {
            tempoMedio: 44,
            sessoesCompletas: 80,
            totalSessoes: 21388,
            distribuicaoArea: {
                'Português': 30,
                'Matemática': 28,
                'Ciências': 18,
                'História': 13,
                'Inglês': 11
            },
            evolucaoTemporal: {
                labels: ['Sem 1', 'Sem 2', 'Sem 3', 'Sem 4'],
                valores: [40, 42, 45, 47]
            }
        }
    },
    trimestre: {
        todas: {
            tempoMedio: 42,
            sessoesCompletas: 78,
            totalSessoes: 124837,
            distribuicaoArea: {
                'Português': 29,
                'Matemática': 27,
                'Ciências': 18,
                'História': 14,
                'Inglês': 12
            },
            evolucaoTemporal: {
                labels: ['Mês 1', 'Mês 2', 'Mês 3'],
                valores: [38, 42, 46]
            }
        },
        'zona-urbana': {
            tempoMedio: 45,
            sessoesCompletas: 82,
            totalSessoes: 86234,
            distribuicaoArea: {
                'Português': 30,
                'Matemática': 28,
                'Ciências': 19,
                'História': 13,
                'Inglês': 10
            },
            evolucaoTemporal: {
                labels: ['Mês 1', 'Mês 2', 'Mês 3'],
                valores: [42, 45, 48]
            }
        },
        'zona-rural': {
            tempoMedio: 35,
            sessoesCompletas: 68,
            totalSessoes: 38603,
            distribuicaoArea: {
                'Português': 27,
                'Matemática': 25,
                'Ciências': 17,
                'História': 16,
                'Inglês': 15
            },
            evolucaoTemporal: {
                labels: ['Mês 1', 'Mês 2', 'Mês 3'],
                valores: [31, 35, 39]
            }
        },
        'zona-norte': {
            tempoMedio: 40,
            sessoesCompletas: 75,
            totalSessoes: 59826,
            distribuicaoArea: {
                'Português': 28,
                'Matemática': 26,
                'Ciências': 19,
                'História': 15,
                'Inglês': 12
            },
            evolucaoTemporal: {
                labels: ['Mês 1', 'Mês 2', 'Mês 3'],
                valores: [36, 40, 44]
            }
        },
        'zona-sul': {
            tempoMedio: 47,
            sessoesCompletas: 83,
            totalSessoes: 65011,
            distribuicaoArea: {
                'Português': 31,
                'Matemática': 29,
                'Ciências': 18,
                'História': 12,
                'Inglês': 10
            },
            evolucaoTemporal: {
                labels: ['Mês 1', 'Mês 2', 'Mês 3'],
                valores: [43, 47, 51]
            }
        }
    },
    semestre: {
        todas: {
            tempoMedio: 40,
            sessoesCompletas: 75,
            totalSessoes: 247658,
            distribuicaoArea: {
                'Português': 28,
                'Matemática': 26,
                'Ciências': 19,
                'História': 15,
                'Inglês': 12
            },
            evolucaoTemporal: {
                labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
                valores: [35, 37, 39, 41, 43, 45]
            }
        },
        'zona-urbana': {
            tempoMedio: 43,
            sessoesCompletas: 79,
            totalSessoes: 171245,
            distribuicaoArea: {
                'Português': 29,
                'Matemática': 27,
                'Ciências': 20,
                'História': 14,
                'Inglês': 10
            },
            evolucaoTemporal: {
                labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
                valores: [38, 40, 42, 44, 46, 48]
            }
        },
        'zona-rural': {
            tempoMedio: 33,
            sessoesCompletas: 65,
            totalSessoes: 76413,
            distribuicaoArea: {
                'Português': 26,
                'Matemática': 24,
                'Ciências': 18,
                'História': 17,
                'Inglês': 15
            },
            evolucaoTemporal: {
                labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
                valores: [28, 30, 32, 34, 36, 38]
            }
        },
        'zona-norte': {
            tempoMedio: 38,
            sessoesCompletas: 72,
            totalSessoes: 118567,
            distribuicaoArea: {
                'Português': 27,
                'Matemática': 25,
                'Ciências': 20,
                'História': 16,
                'Inglês': 12
            },
            evolucaoTemporal: {
                labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
                valores: [33, 35, 37, 39, 41, 43]
            }
        },
        'zona-sul': {
            tempoMedio: 45,
            sessoesCompletas: 81,
            totalSessoes: 129091,
            distribuicaoArea: {
                'Português': 30,
                'Matemática': 28,
                'Ciências': 19,
                'História': 13,
                'Inglês': 10
            },
            evolucaoTemporal: {
                labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
                valores: [40, 42, 44, 46, 48, 50]
            }
        }
    }
};

// Variáveis globais para os gráficos
let areaChart = null;
let tempoChart = null;

// Expor globalmente para i18n.js
window.areaChart = null;
window.tempoChart = null;

// ==========================================================================
// Inicialização
// ==========================================================================

document.addEventListener('DOMContentLoaded', function() {
    // Inicializar gráficos do dashboard
    initDashboard();
    
    // Configurar event listeners para filtros
    setupFilters();
    
    // Configurar modal de contato
    setupModal();
    
    // Adicionar smooth scroll para navegação
    setupSmoothScroll();
});

// ==========================================================================
// Dashboard - Inicialização e Atualização
// ==========================================================================

function initDashboard() {
    // Criar gráficos iniciais
    createAreaChart();
    createTempoChart();
    
    // Atualizar dashboard com dados iniciais
    updateDashboard('trimestre', 'todas');
}

function createAreaChart() {
    const ctx = document.getElementById('areaChart').getContext('2d');
    
    areaChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: [],
            datasets: [{
                data: [],
                backgroundColor: [
                    '#0A2342', // Azul marinho
                    '#123456', // Azul marinho médio
                    '#4A5568', // Cinza chumbo
                    '#718096', // Cinza médio
                    '#CBD5E0'  // Cinza claro
                ],
                borderWidth: 2,
                borderColor: '#FFFFFF'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        padding: 15,
                        font: {
                            family: 'Inter',
                            size: 13,
                            weight: '500'
                        },
                        generateLabels: function(chart) {
                            const data = chart.data;
                            if (data.labels.length && data.datasets.length) {
                                return data.labels.map((label, i) => {
                                    const value = data.datasets[0].data[i];
                                    return {
                                        text: `${label}: ${value}%`,
                                        fillStyle: data.datasets[0].backgroundColor[i],
                                        hidden: false,
                                        index: i
                                    };
                                });
                            }
                            return [];
                        }
                    }
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return context.label + ': ' + context.parsed + '%';
                        }
                    }
                },
                datalabels: {
                    display: true,
                    color: '#FFFFFF',
                    font: {
                        family: 'Inter',
                        size: 14,
                        weight: 'bold'
                    },
                    formatter: function(value, context) {
                        return value + '%';
                    }
                }
            }
        },
        plugins: [{
            id: 'customLabels',
            afterDatasetsDraw: function(chart) {
                const ctx = chart.ctx;
                chart.data.datasets.forEach((dataset, i) => {
                    const meta = chart.getDatasetMeta(i);
                    meta.data.forEach((element, index) => {
                        const data = dataset.data[index];
                        const label = chart.data.labels[index];
                        
                        // Configurar estilo do texto
                        ctx.fillStyle = '#FFFFFF';
                        ctx.font = 'bold 13px Inter';
                        ctx.textAlign = 'center';
                        ctx.textBaseline = 'middle';
                        
                        // Calcular posição
                        const position = element.tooltipPosition();
                        
                        // Desenhar o nome da área
                        ctx.fillText(label, position.x, position.y - 8);
                        
                        // Desenhar a porcentagem
                        ctx.fillText(data + '%', position.x, position.y + 8);
                    });
                });
            }
        }]
    });
    
    // Expor globalmente
    window.areaChart = areaChart;
}

function createTempoChart() {
    const ctx = document.getElementById('tempoChart').getContext('2d');
    
    tempoChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: [],
            datasets: [{
                label: 'Tempo Médio (minutos)',
                data: [],
                borderColor: '#0A2342',
                backgroundColor: 'rgba(10, 35, 66, 0.1)',
                borderWidth: 3,
                fill: true,
                tension: 0.4,
                pointRadius: 5,
                pointBackgroundColor: '#0A2342',
                pointBorderColor: '#FFFFFF',
                pointBorderWidth: 2,
                pointHoverRadius: 7
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: true,
                    position: 'top',
                    labels: {
                        font: {
                            family: 'Inter',
                            size: 12
                        }
                    }
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return context.dataset.label + ': ' + context.parsed.y + ' min';
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        callback: function(value) {
                            return value + ' min';
                        }
                    }
                }
            }
        }
    });
    
    // Expor globalmente
    window.tempoChart = tempoChart;
}

function updateDashboard(periodo, regiao) {
    const data = dashboardData[periodo][regiao];
    
    // Atualizar métricas
    document.getElementById('metricTempo').textContent = data.tempoMedio + ' min';
    document.getElementById('metricSessoes').textContent = data.sessoesCompletas + '%';
    document.getElementById('metricTotal').textContent = formatNumber(data.totalSessoes);
    
    // Atualizar gráfico de distribuição por área
    areaChart.data.labels = Object.keys(data.distribuicaoArea);
    areaChart.data.datasets[0].data = Object.values(data.distribuicaoArea);
    areaChart.update();
    
    // Atualizar gráfico de evolução temporal
    tempoChart.data.labels = data.evolucaoTemporal.labels;
    tempoChart.data.datasets[0].data = data.evolucaoTemporal.valores;
    tempoChart.update();
}

// ==========================================================================
// Filtros do Dashboard
// ==========================================================================

function setupFilters() {
    const periodoFilter = document.getElementById('periodoFilter');
    const regiaoFilter = document.getElementById('regiaoFilter');
    
    periodoFilter.addEventListener('change', function() {
        const periodo = this.value;
        const regiao = regiaoFilter.value;
        updateDashboard(periodo, regiao);
    });
    
    regiaoFilter.addEventListener('change', function() {
        const periodo = periodoFilter.value;
        const regiao = this.value;
        updateDashboard(periodo, regiao);
    });
}

// ==========================================================================
// Modal de Contato
// ==========================================================================

function setupModal() {
    const modal = document.getElementById('contactModal');
    const ctaButton = document.getElementById('ctaButton');
    const footerCta = document.getElementById('footerCta');
    const closeBtn = modal.querySelector('.modal-close');
    const form = document.getElementById('contactForm');
    
    // Abrir modal
    ctaButton.addEventListener('click', () => openModal(modal));
    footerCta.addEventListener('click', () => openModal(modal));
    
    // Fechar modal
    closeBtn.addEventListener('click', () => closeModal(modal));
    
    // Fechar modal ao clicar fora
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal(modal);
        }
    });
    
    // Fechar modal com ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal(modal);
        }
    });
    
    // Submissão do formulário
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        handleFormSubmit(form);
    });
}

function openModal(modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal(modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

function handleFormSubmit(form) {
    // Coletar dados do formulário
    const formData = {
        nome: form.nome.value,
        cargo: form.cargo.value,
        instituicao: form.instituicao.value,
        email: form.email.value,
        telefone: form.telefone.value,
        mensagem: form.mensagem.value,
        timestamp: new Date().toISOString()
    };
    
    // Simular envio (em produção, aqui seria uma chamada API)
    console.log('Solicitação enviada:', formData);
    
    // Esconder formulário e mostrar mensagem de sucesso
    form.style.display = 'none';
    document.getElementById('formSuccess').style.display = 'block';
    
    // Resetar após 3 segundos
    setTimeout(() => {
        form.style.display = 'flex';
        document.getElementById('formSuccess').style.display = 'none';
        form.reset();
        closeModal(document.getElementById('contactModal'));
    }, 3000);
}

// ==========================================================================
// Smooth Scroll
// ==========================================================================

function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Ignorar links que são apenas "#"
            if (href === '#') return;
            
            e.preventDefault();
            
            const target = document.querySelector(href);
            if (target) {
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ==========================================================================
// Funções Utilitárias
// ==========================================================================

function formatNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

// ==========================================================================
// Animações ao Scroll (opcional - otimização de performance)
// ==========================================================================

// Observer para animações ao scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Aplicar animação a cards (se necessário)
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.challenge-card, .pillar-card, .operadora-card');
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
});
