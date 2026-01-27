// ==========================================================================
// SVEED - Sistema de Tradução Multi-idioma COMPLETO (PT / EN / ES)
// Versão 4.0.0 - TODAS as seções traduzidas
// ==========================================================================

const siteTranslations = {
    pt: {
        // ===== META E TÍTULO =====
        metaDesc: "SVEED - Governança Pública da Última Milha Educacional. Infraestrutura técnica voltada à governança pública para verificação de execução em dispositivos da educação.",
        metaKeywords: "Governança digital, Última milha, Conformidade TCU, Gestão de ativos públicos, Software offline da educação",
        pageTitle: "SVEED - Governança Pública da Última Milha Educacional",
        
        // ===== HEADER E NAVEGAÇÃO =====
        logoSubtitle: "Verificação de Rotinas de Uso na Educação",
        navChallenge: "O Desafio",
        navAbout: "O SVEED",
        navDynamics: "Dinâmica",
        navPillars: "Pilares",
        navDashboard: "Dashboard",
        navOperators: "Operadoras",
        navCompliance: "Conformidade",
        
        // ===== HERO =====
        heroTitle: "SVEED — Governança Pública da Última Milha Educacional",
        heroSubtitle: "Verificação técnica de execução mínima de uso na educação em dispositivos utilizados no âmbito de políticas públicas de educação, em ambientes offline e de difícil monitoramento.",
        ctaButton: "Solicitar Nota Técnica de Viabilidade",
        ctaDisclaimer: "Documento técnico-institucional, sem caráter comercial ou pedagógico.",
        
        // ===== SEÇÃO O DESAFIO =====
        challengeTitle: "O Desafio da Evidência",
        challenge1Title: "Entrega Física ≠ Uso Efetivo",
        challenge1Text: "A distribuição de hardware da educação não assegura, por si só, a execução das atividades para as quais os ativos foram contratados. A evidência de entrega não substitui a evidência de utilização.",
        challenge2Title: "Desafio de Comprovação Operacional",
        challenge2Text: "O desafio atual da gestão pública consiste em comprovar a execução funcional dos ativos tecnológicos, especialmente em contextos de baixa conectividade e ausência de infraestrutura de monitoramento centralizado.",
        challenge3Title: "Risco de Ociosidade e Questionamento",
        challenge3Text: "A ausência de evidência operacional objetiva pode resultar em questionamentos sobre efetividade de políticas públicas, gerando risco de ociosidade patrimonial e questionamento contratual por órgãos de controle.",
        
        // ===== SEÇÃO O QUE É O SVEED =====
        aboutTitle: "O Que É o SVEED",
        aboutLead: "O SVEED é um programa de computador de infraestrutura técnica voltada à governança pública, desenvolvido para verificação de execução mínima de uso educacional em dispositivos Android 7+ com 1.5GB RAM+, utilizados no âmbito de políticas públicas de educação.",
        aboutDef1Title: "Natureza Funcional",
        aboutDef1Text: "Sistema determinístico de verificação operacional, agnóstico a conteúdo pedagógico e a plataformas educacionais específicas.",
        aboutDef2Title: "Foco em Processo",
        aboutDef2Text: "Verifica execução de rotinas operacionais, não resultados de aprendizagem ou desempenho individual.",
        aboutDef3Title: "Infraestrutura Técnica",
        aboutDef3Text: "Não realiza ensino, não executa avaliação e não coleta dados pessoais. Atua exclusivamente na camada de verificação de processos.",
        aboutTechTitle: "Características Técnicas",
        aboutTech1: "Offline-first:",
        aboutTech1Text: "Operação independente de conectividade contínua",
        aboutTech2: "Compatível com hardware legado de uso na educação pública:",
        aboutTech2Text: "Requisitos mínimos (~1.5GB RAM)",
        aboutTech3: "Sem IA generativa:",
        aboutTech3Text: "Processamento determinístico e auditável",
        aboutTech4: "Sem avaliação pedagógica:",
        aboutTech4Text: "Não infere qualidade de aprendizagem",
        aboutNote: "O SVEED não induz, orienta ou interfere na prática pedagógica, limitando-se à verificação técnica da execução operacional.",
        
        // ===== SEÇÃO DINÂMICA OPERACIONAL =====
        dynamicsTitle: "Dinâmica Operacional na Prática",
        dynamicsSubtitle: "O SVEED respeita integralmente a rotina da escola e da família, garantindo autonomia e fluidez no uso dos dispositivos.",
        dynamicsContext: "Durante o horário de aula, finais de semana, feriados e férias, o dispositivo funciona em modo de autonomia total, sem qualquer interferência do sistema. A verificação ocorre exclusivamente uma única vez ao dia, no primeiro uso fora do horário escolar, seguindo o fluxo abaixo:",
        dynamicsFlow1Title: "Orientação Inicial por Áudio",
        dynamicsFlow1Text: "O sistema explica de forma simples e humanizada o que vai acontecer. A criança não precisa ter domínio de leitura para iniciar a rotina.",
        dynamicsFlow2Title: "Bloco de Reforço (Tempo de Exposição)",
        dynamicsFlow2Text: "Período curto dedicado à revisão de conteúdos. Sem perguntas, sem avaliação e sem pressão por resultados. O foco é o contato com o tema.",
        dynamicsFlow3Title: "Pausa Obrigatória (Saúde Digital)",
        dynamicsFlow3Text: "O sistema interrompe a atividade para uma pausa breve (hidratação e alongamento). Previne a fadiga e mitiga comportamentos de simulação de estudo.",
        dynamicsFlow4Title: "Bloco de Execução (Interação Funcional)",
        dynamicsFlow4Text: "Momento de execução da atividade proposta. O sistema verifica apenas a interação e o nexo operacional, sem atribuição de notas ou julgamento de erro/acerto.",
        dynamicsFlow5Title: "Encerramento e Liberação",
        dynamicsFlow5Text: "Caso a criança interaja, a rotina é concluída com sucesso. Se houver cansaço, o sistema encerra de forma gentil. Após o ciclo, o tablet fica totalmente livre e o SVEED não reaparece até o dia seguinte.",
        dynamicsNote: "Nota:",
        dynamicsNoteText: "O SVEED prioriza a saúde digital e o engajamento positivo, eliminando mecanismos de frustração ou cobrança pedagógica indevida.",
        
        // ===== SEÇÃO PILARES TECNOLÓGICOS =====
        pillarsTitle: "Pilares Tecnológicos",
        pillar1Title: "Precisão Temporal",
        pillar1Text: "Utilização de relógio monotônico para garantir registro fidedigno de tempo real de execução, independente de manipulações de sistema ou relógio de parede.",
        pillar1Detail: "Método:",
        pillar1DetailText: "Monotonic clock API com proteção contra adulteração",
        pillar2Title: "Privacidade por Design",
        pillar2Text: "Arquitetura que impede, por concepção, a coleta de dados pessoais, identificação individual ou rastreamento de usuários específicos.",
        pillar2Detail: "Conformidade:",
        pillar2DetailText: "LGPD por design, não por compliance",
        pillar3Title: "Acessibilidade Operacional",
        pillar3Text: "Interface baseada em áudio e sinais visuais simplificados, sem pressupor letramento funcional ou familiaridade com ambientes digitais. A acessibilidade aqui é estritamente operacional, não pedagógica ou curricular.",
        pillar3Detail: "Aplicação:",
        pillar3DetailText: "Contextos de baixa alfabetização digital",
        
        // ===== SEÇÃO DASHBOARD PÚBLICO =====
        dashboardTitle: "Painel Público de Execução",
        dashboardDemoNote: "Painel demonstrativo com dados simulados, apresentado exclusivamente para visualização técnica de indicadores agregados de execução.",
        dashboardDisclaimer: "Este painel apresenta exclusivamente indicadores agregados de execução operacional no contexto de políticas públicas. Não contém dados pessoais, individuais ou identificáveis.",
        dashboardFilterPeriod: "Período de Referência:",
        dashboardFilterRegion: "Região:",
        dashboardFilterAllRegions: "Todas as Regiões",
        dashboardFilterUrbanZone: "Zona Urbana",
        dashboardFilterRuralZone: "Zona Rural",
        dashboardFilterNorthZone: "Zona Norte",
        dashboardFilterSouthZone: "Zona Sul",
        dashboardMetric1Label: "Tempo Médio Diário",
        dashboardMetric1Change: "+8% vs período anterior",
        dashboardMetric2Label: "Sessões com Ciclo Encerrado",
        dashboardMetric2Change: "+3% vs período anterior",
        dashboardMetric2Note: "Ciclo encerrado refere-se exclusivamente ao término técnico da sessão conforme parâmetros temporais do sistema, sem inferência de desempenho, conteúdo ou aprendizagem.",
        dashboardMetric3Label: "Total de Sessões",
        dashboardMetric3Change: "Período: Q1 2026",
        dashboardChart1Title: "Distribuição por Área de Conhecimento",
        dashboardChart2Title: "Evolução Temporal de Execução",
        dashboardNote: "Nota técnica:",
        dashboardNoteText: "Os indicadores apresentados referem-se exclusivamente a dados agregados de execução operacional. Não representam avaliação de qualidade pedagógica, desempenho individual ou eficácia de conteúdos.",
        
        // ===== SEÇÃO PARA OPERADORAS =====
        operatorsTitle: "Para Operadoras e Integradores",
        operatorsIntro: "O SVEED atua como serviço técnico complementar à infraestrutura de fornecimento de hardware da educação, oferecendo camada adicional de verificação objetiva de uso funcional.",
        operators1Title: "Redução de Risco Contratual",
        operators1Text: "Fornece evidência objetiva de execução operacional dos ativos fornecidos, mitigando questionamentos sobre efetividade de entrega e uso funcional dos equipamentos.",
        operators2Title: "Evidência Objetiva de Uso",
        operators2Text: "Gera registros auditáveis de tempo de execução e encerramento técnico de sessões, independente de conectividade ou infraestrutura centralizada de monitoramento.",
        operators3Title: "Proteção Reputacional",
        operators3Text: "Documenta a operação funcional dos equipamentos fornecidos, oferecendo amparo técnico para processos de recebimento e prestação de contas junto a órgãos contratantes.",
        operators4Title: "Integração Técnica",
        operators4Text: "Compatível com diferentes configurações de hardware e sistemas operacionais, sem dependência de plataformas proprietárias ou conectividade obrigatória.",
        operatorsDisclaimer: "O SVEED não substitui obrigações contratuais de fornecimento, suporte técnico ou conectividade. Atua exclusivamente como ferramenta de verificação complementar.",
        
        // ===== SEÇÃO CONFORMIDADE =====
        complianceTitle: "Conformidade e Natureza Jurídica",
        complianceHighlight: "O SVEED é infraestrutura técnica de verificação, não plataforma da educação.",
        compliance1Title: "Registro INPI",
        compliance1Text: "Programa de computador com registro concedido pelo Instituto Nacional da Propriedade Industrial (INPI), processo BR 51 2026 000328-8, publicado na RPI 2873 de 27/01/2026. Natureza jurídica de software de infraestrutura técnica voltada à governança pública.",
        compliance2Title: "Arquitetura Determinística",
        compliance2Text: "Processamento baseado em lógica determinística e auditável, sem componentes probabilísticos, algoritmos de inferência ou processamento de linguagem natural generativo.",
        compliance3Title: "Operação Offline",
        compliance3Text: "Funcionamento independente de conexão contínua à internet, sem dependência de serviços em nuvem ou sistemas de autenticação remota.",
        compliance4Title: "Conformidade LGPD",
        compliance4Text: "Arquitetura que impede, por concepção técnica, a coleta de dados pessoais ou identificação individual. Conformidade por design, não por processo.",
        compliance5Title: "Dados Agregados",
        compliance5Text: "Registros exclusivamente agregados por região, período e área de conhecimento. Impossibilidade técnica de desagregação para nível individual.",
        compliance6Title: "Auditabilidade",
        compliance6Text: "Logs de sistema auditáveis por órgãos de controle, com trilha de processamento verificável e transparente quanto aos métodos de cálculo empregados.",
        complianceScopeTitle: "Escopo de Atuação",
        complianceScopeText: "O SVEED verifica exclusivamente a execução operacional de rotinas no contexto da educação em dispositivos utilizados no âmbito de políticas públicas de educação. Não realiza:",
        complianceScope1: "Avaliação de conteúdo pedagógico",
        complianceScope2: "Inferência sobre qualidade de ensino",
        complianceScope3: "Mensuração de resultados de aprendizagem",
        complianceScope4: "Comparação entre indivíduos ou instituições",
        complianceScope5: "Processamento de dados sensíveis ou pessoais",
        
        // ===== SEÇÃO DOCUMENTAÇÃO TÉCNICA =====
        documentationTitle: "Documentação Técnica",
        whitepaperTitle: "White Paper Técnico",
        whitepaperSubtitle: "Aviões, Foguetes e Trens: Por Que a EdTech Tradicional Falha em Políticas Públicas de Educação no Brasil",
        whitepaperDescription: "Documento técnico-institucional que analisa o gap de auditabilidade em políticas públicas de tecnologia educacional e apresenta a arquitetura determinística de verificação como solução.",
        whitepaperBtnView: "VER DOCUMENTO",
        whitepaperBtnDownload: "BAIXAR PDF",
        
        // ===== FOOTER =====
        footerTagline: "Verificação de Rotinas de Uso na Educação",
        footerDescription: "Infraestrutura técnica voltada à governança pública da última milha educacional.",
        footerScope: "O SVEED não coleta dados pessoais nem permite identificação individual.",
        footerNavTitle: "Navegação",
        footerPublicTitle: "Público",
        footerContactTitle: "Contato Institucional",
        footerContactText: "Para solicitações de nota técnica, esclarecimentos ou integração:",
        footerContactBtn: "Solicitar Contato",
        footerCopyright: "© 2025 SVEED. Programa de computador de infraestrutura técnica voltada à governança pública. Todos os direitos reservados.",
        
        // ===== MODAL DE CONTATO =====
        modalTitle: "Solicitar Nota Técnica de Viabilidade",
        modalFieldName: "Nome Completo",
        modalFieldRole: "Cargo / Função",
        modalFieldInstitution: "Instituição / Órgão",
        modalFieldEmail: "E-mail Institucional",
        modalFieldPhone: "Telefone",
        modalFieldMessage: "Contexto / Objetivo da Solicitação",
        modalSubmitBtn: "Enviar Solicitação",
        modalSuccessMsg: "Solicitação recebida com sucesso. Retornaremos em até 48 horas úteis.",
        
        // ===== LABELS DOS GRÁFICOS =====
        chartKnowledgeAreas: {
            'Português': 'Português',
            'Matemática': 'Matemática',
            'Ciências': 'Ciências',
            'História': 'História',
            'Inglês': 'Inglês'
        },
        chartTimeLabels: {
            week: 'Sem',
            month: 'Mês',
            months: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun']
        },
        chartTimeSeriesLabel: 'Tempo Médio (minutos)'
    },
    
    en: {
        // ===== META AND TITLE =====
        metaDesc: "SVEED - Public Governance of the Educational Last Mile. Technical infrastructure for public governance for execution verification on educational devices.",
        metaKeywords: "Digital governance, Last mile, Compliance, Public asset management, Offline education software",
        pageTitle: "SVEED - Public Governance of the Educational Last Mile",
        
        // ===== HEADER AND NAVIGATION =====
        logoSubtitle: "Verification of Educational Use Routines",
        navChallenge: "The Challenge",
        navAbout: "About SVEED",
        navDynamics: "Dynamics",
        navPillars: "Pillars",
        navDashboard: "Dashboard",
        navOperators: "Operators",
        navCompliance: "Compliance",
        
        // ===== HERO =====
        heroTitle: "SVEED — Public Governance of the Educational Last Mile",
        heroSubtitle: "Technical verification of minimum educational use execution on devices used within the scope of public education policies, in offline and hard-to-monitor environments.",
        ctaButton: "Request Technical Feasibility Note",
        ctaDisclaimer: "Technical-institutional document, without commercial or pedagogical character.",
        
        // ===== CHALLENGE SECTION =====
        challengeTitle: "The Evidence Challenge",
        challenge1Title: "Physical Delivery ≠ Effective Use",
        challenge1Text: "The distribution of educational hardware does not, by itself, ensure the execution of activities for which the assets were contracted. Evidence of delivery does not replace evidence of utilization.",
        challenge2Title: "Operational Verification Challenge",
        challenge2Text: "The current challenge for public management is to prove the functional execution of technological assets, especially in contexts of low connectivity and absence of centralized monitoring infrastructure.",
        challenge3Title: "Risk of Idleness and Questioning",
        challenge3Text: "The absence of objective operational evidence may result in questions about the effectiveness of public policies, generating risk of asset idleness and contractual questioning by oversight bodies.",
        
        // ===== ABOUT SECTION =====
        aboutTitle: "What is SVEED",
        aboutLead: "SVEED is a computer program of technical infrastructure for public governance, developed for verification of minimum educational use execution on Android 7+ devices with 1.5GB RAM+, used within the scope of public education policies.",
        aboutDef1Title: "Functional Nature",
        aboutDef1Text: "Deterministic operational verification system, agnostic to pedagogical content and specific educational platforms.",
        aboutDef2Title: "Process Focus",
        aboutDef2Text: "Verifies execution of operational routines, not learning outcomes or individual performance.",
        aboutDef3Title: "Technical Infrastructure",
        aboutDef3Text: "Does not perform teaching, does not execute evaluation, and does not collect personal data. Acts exclusively on the process verification layer.",
        aboutTechTitle: "Technical Characteristics",
        aboutTech1: "Offline-first:",
        aboutTech1Text: "Operation independent of continuous connectivity",
        aboutTech2: "Compatible with legacy hardware for public education:",
        aboutTech2Text: "Minimum requirements (~1.5GB RAM)",
        aboutTech3: "No generative AI:",
        aboutTech3Text: "Deterministic and auditable processing",
        aboutTech4: "No pedagogical evaluation:",
        aboutTech4Text: "Does not infer learning quality",
        aboutNote: "SVEED does not induce, guide, or interfere with pedagogical practice, limiting itself to technical verification of operational execution.",
        
        // ===== OPERATIONAL DYNAMICS SECTION =====
        dynamicsTitle: "Operational Dynamics in Practice",
        dynamicsSubtitle: "SVEED fully respects the school and family routine, ensuring autonomy and fluidity in device use.",
        dynamicsContext: "During school hours, weekends, holidays, and vacations, the device operates in total autonomy mode, without any system interference. Verification occurs exclusively once a day, on first use outside school hours, following the flow below:",
        dynamicsFlow1Title: "Initial Audio Guidance",
        dynamicsFlow1Text: "The system explains in a simple and humanized way what will happen. The child does not need reading proficiency to start the routine.",
        dynamicsFlow2Title: "Review Block (Exposure Time)",
        dynamicsFlow2Text: "Short period dedicated to content review. No questions, no evaluation, and no pressure for results. Focus is on contact with the subject.",
        dynamicsFlow3Title: "Mandatory Break (Digital Health)",
        dynamicsFlow3Text: "The system interrupts the activity for a brief break (hydration and stretching). Prevents fatigue and mitigates study simulation behaviors.",
        dynamicsFlow4Title: "Execution Block (Functional Interaction)",
        dynamicsFlow4Text: "Moment of execution of the proposed activity. The system only verifies interaction and operational nexus, without assigning grades or judging right/wrong.",
        dynamicsFlow5Title: "Closing and Release",
        dynamicsFlow5Text: "If the child interacts, the routine is successfully completed. If tired, the system closes gently. After the cycle, the tablet is completely free and SVEED does not reappear until the next day.",
        dynamicsNote: "Note:",
        dynamicsNoteText: "SVEED prioritizes digital health and positive engagement, eliminating mechanisms of frustration or undue pedagogical pressure.",
        
        // ===== TECHNOLOGICAL PILLARS SECTION =====
        pillarsTitle: "Technological Pillars",
        pillar1Title: "Temporal Precision",
        pillar1Text: "Use of monotonic clock to ensure reliable recording of actual execution time, independent of system manipulations or wall clock.",
        pillar1Detail: "Method:",
        pillar1DetailText: "Monotonic clock API with tamper protection",
        pillar2Title: "Privacy by Design",
        pillar2Text: "Architecture that prevents, by design, the collection of personal data, individual identification, or tracking of specific users.",
        pillar2Detail: "Compliance:",
        pillar2DetailText: "LGPD by design, not by compliance",
        pillar3Title: "Operational Accessibility",
        pillar3Text: "Interface based on audio and simplified visual signals, without assuming functional literacy or familiarity with digital environments. Accessibility here is strictly operational, not pedagogical or curricular.",
        pillar3Detail: "Application:",
        pillar3DetailText: "Low digital literacy contexts",
        
        // ===== PUBLIC DASHBOARD SECTION =====
        dashboardTitle: "Public Execution Dashboard",
        dashboardDemoNote: "Demonstration dashboard with simulated data, presented exclusively for technical visualization of aggregated execution indicators.",
        dashboardDisclaimer: "This dashboard presents exclusively aggregated indicators of operational execution in the context of public policies. Contains no personal, individual, or identifiable data.",
        dashboardFilterPeriod: "Reference Period:",
        dashboardFilterRegion: "Region:",
        dashboardFilterAllRegions: "All Regions",
        dashboardFilterUrbanZone: "Urban Zone",
        dashboardFilterRuralZone: "Rural Zone",
        dashboardFilterNorthZone: "North Zone",
        dashboardFilterSouthZone: "South Zone",
        dashboardMetric1Label: "Average Daily Time",
        dashboardMetric1Change: "+8% vs previous period",
        dashboardMetric2Label: "Sessions with Completed Cycle",
        dashboardMetric2Change: "+3% vs previous period",
        dashboardMetric2Note: "Completed cycle refers exclusively to the technical termination of the session according to system temporal parameters, without inference of performance, content, or learning.",
        dashboardMetric3Label: "Total Sessions",
        dashboardMetric3Change: "Period: Q1 2026",
        dashboardChart1Title: "Distribution by Knowledge Area",
        dashboardChart2Title: "Temporal Evolution of Execution",
        dashboardNote: "Technical note:",
        dashboardNoteText: "The indicators presented refer exclusively to aggregated data of operational execution. They do not represent evaluation of pedagogical quality, individual performance, or content effectiveness.",
        
        // ===== OPERATORS SECTION =====
        operatorsTitle: "For Operators and Integrators",
        operatorsIntro: "SVEED acts as a complementary technical service to educational hardware supply infrastructure, offering an additional layer of objective functional use verification.",
        operators1Title: "Contractual Risk Reduction",
        operators1Text: "Provides objective evidence of operational execution of supplied assets, mitigating questions about delivery effectiveness and functional use of equipment.",
        operators2Title: "Objective Use Evidence",
        operators2Text: "Generates auditable records of execution time and technical session closure, independent of connectivity or centralized monitoring infrastructure.",
        operators3Title: "Reputational Protection",
        operators3Text: "Documents the functional operation of supplied equipment, offering technical support for receipt processes and accountability to contracting agencies.",
        operators4Title: "Technical Integration",
        operators4Text: "Compatible with different hardware configurations and operating systems, without dependency on proprietary platforms or mandatory connectivity.",
        operatorsDisclaimer: "SVEED does not replace contractual obligations of supply, technical support, or connectivity. Acts exclusively as a complementary verification tool.",
        
        // ===== COMPLIANCE SECTION =====
        complianceTitle: "Compliance and Legal Nature",
        complianceHighlight: "SVEED is technical verification infrastructure, not an educational platform.",
        compliance1Title: "INPI Registration",
        compliance1Text: "Computer program with registration filed with the National Institute of Industrial Property (INPI), with legal nature of technical infrastructure software for public governance.",
        compliance2Title: "Deterministic Architecture",
        compliance2Text: "Processing based on deterministic and auditable logic, without probabilistic components, inference algorithms, or generative natural language processing.",
        compliance3Title: "Offline Operation",
        compliance3Text: "Operation independent of continuous internet connection, without dependency on cloud services or remote authentication systems.",
        compliance4Title: "LGPD Compliance",
        compliance4Text: "Architecture that prevents, by technical design, the collection of personal data or individual identification. Compliance by design, not by process.",
        compliance5Title: "Aggregated Data",
        compliance5Text: "Records exclusively aggregated by region, period, and knowledge area. Technical impossibility of disaggregation to individual level.",
        compliance6Title: "Auditability",
        compliance6Text: "System logs auditable by oversight bodies, with verifiable processing trail and transparency regarding calculation methods employed.",
        complianceScopeTitle: "Scope of Action",
        complianceScopeText: "SVEED verifies exclusively the operational execution of routines in the educational context on devices used within the scope of public education policies. Does not perform:",
        complianceScope1: "Pedagogical content evaluation",
        complianceScope2: "Inference about teaching quality",
        complianceScope3: "Measurement of learning outcomes",
        complianceScope4: "Comparison between individuals or institutions",
        complianceScope5: "Processing of sensitive or personal data",
        
        // ===== TECHNICAL DOCUMENTATION SECTION =====
        documentationTitle: "Technical Documentation",
        whitepaperTitle: "Technical White Paper",
        whitepaperSubtitle: "Airplanes, Rockets and Trains: Why Traditional EdTech Fails in Public Education Policies in Brazil",
        whitepaperDescription: "Technical-institutional document that analyzes the auditability gap in public policies of educational technology and presents the deterministic verification architecture as a solution.",
        whitepaperBtnView: "VIEW DOCUMENT",
        whitepaperBtnDownload: "DOWNLOAD PDF",
        
        // ===== FOOTER =====
        footerTagline: "Verification of Educational Use Routines",
        footerDescription: "Technical infrastructure for public governance of the educational last mile.",
        footerScope: "SVEED does not collect personal data nor allows individual identification.",
        footerNavTitle: "Navigation",
        footerPublicTitle: "Audience",
        footerContactTitle: "Institutional Contact",
        footerContactText: "For technical note requests, clarifications, or integration:",
        footerContactBtn: "Request Contact",
        footerCopyright: "© 2025 SVEED. Computer program of technical infrastructure for public governance. All rights reserved.",
        
        // ===== CONTACT MODAL =====
        modalTitle: "Request Technical Feasibility Note",
        modalFieldName: "Full Name",
        modalFieldRole: "Position / Role",
        modalFieldInstitution: "Institution / Agency",
        modalFieldEmail: "Institutional Email",
        modalFieldPhone: "Phone",
        modalFieldMessage: "Context / Request Objective",
        modalSubmitBtn: "Submit Request",
        modalSuccessMsg: "Request successfully received. We will respond within 48 business hours.",
        
        // ===== CHART LABELS =====
        chartKnowledgeAreas: {
            'Português': 'Portuguese',
            'Matemática': 'Mathematics',
            'Ciências': 'Science',
            'História': 'History',
            'Inglês': 'English'
        },
        chartTimeLabels: {
            week: 'Week',
            month: 'Month',
            months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
        },
        chartTimeSeriesLabel: 'Average Time (minutes)'
    },
    
    es: {
        // ===== META Y TÍTULO =====
        metaDesc: "SVEED - Gobernanza Pública de la Última Milla Educativa. Infraestructura técnica orientada a la gobernanza pública para verificación de ejecución en dispositivos educativos.",
        metaKeywords: "Gobernanza digital, Última milla, Cumplimiento, Gestión de activos públicos, Software offline educativo",
        pageTitle: "SVEED - Gobernanza Pública de la Última Milla Educativa",
        
        // ===== ENCABEZADO Y NAVEGACIÓN =====
        logoSubtitle: "Verificación de Rutinas de Uso en Educación",
        navChallenge: "El Desafío",
        navAbout: "SVEED",
        navDynamics: "Dinámica",
        navPillars: "Pilares",
        navDashboard: "Dashboard",
        navOperators: "Operadoras",
        navCompliance: "Cumplimiento",
        
        // ===== HERO =====
        heroTitle: "SVEED — Gobernanza Pública de la Última Milla Educativa",
        heroSubtitle: "Verificación técnica de ejecución mínima de uso en educación en dispositivos utilizados en el ámbito de políticas públicas de educación, en ambientes offline y de difícil monitoreo.",
        ctaButton: "Solicitar Nota Técnica de Viabilidad",
        ctaDisclaimer: "Documento técnico-institucional, sin carácter comercial o pedagógico.",
        
        // ===== SECCIÓN DESAFÍO =====
        challengeTitle: "El Desafío de la Evidencia",
        challenge1Title: "Entrega Física ≠ Uso Efectivo",
        challenge1Text: "La distribución de hardware educativo no asegura, por sí sola, la ejecución de las actividades para las cuales los activos fueron contratados. La evidencia de entrega no sustituye la evidencia de utilización.",
        challenge2Title: "Desafío de Comprobación Operacional",
        challenge2Text: "El desafío actual de la gestión pública consiste en comprobar la ejecución funcional de los activos tecnológicos, especialmente en contextos de baja conectividad y ausencia de infraestructura de monitoreo centralizado.",
        challenge3Title: "Riesgo de Ociosidad y Cuestionamiento",
        challenge3Text: "La ausencia de evidencia operacional objetiva puede resultar en cuestionamientos sobre efectividad de políticas públicas, generando riesgo de ociosidad patrimonial y cuestionamiento contractual por órganos de control.",
        
        // ===== SECCIÓN QUÉ ES SVEED =====
        aboutTitle: "Qué es SVEED",
        aboutLead: "SVEED es un programa de computadora de infraestructura técnica orientada a la gobernanza pública, desarrollado para verificación de ejecución mínima de uso educativo en dispositivos Android 7+ con 1.5GB RAM+, utilizados en el ámbito de políticas públicas de educación.",
        aboutDef1Title: "Naturaleza Funcional",
        aboutDef1Text: "Sistema determinístico de verificación operacional, agnóstico a contenido pedagógico y plataformas educativas específicas.",
        aboutDef2Title: "Enfoque en Proceso",
        aboutDef2Text: "Verifica ejecución de rutinas operacionales, no resultados de aprendizaje o desempeño individual.",
        aboutDef3Title: "Infraestructura Técnica",
        aboutDef3Text: "No realiza enseñanza, no ejecuta evaluación y no recopila datos personales. Actúa exclusivamente en la capa de verificación de procesos.",
        aboutTechTitle: "Características Técnicas",
        aboutTech1: "Offline-first:",
        aboutTech1Text: "Operación independiente de conectividad continua",
        aboutTech2: "Compatible con hardware heredado de uso en educación pública:",
        aboutTech2Text: "Requisitos mínimos (~1.5GB RAM)",
        aboutTech3: "Sin IA generativa:",
        aboutTech3Text: "Procesamiento determinístico y auditable",
        aboutTech4: "Sin evaluación pedagógica:",
        aboutTech4Text: "No infiere calidad de aprendizaje",
        aboutNote: "SVEED no induce, orienta ni interfiere en la práctica pedagógica, limitándose a la verificación técnica de la ejecución operacional.",
        
        // ===== SECCIÓN DINÁMICA OPERACIONAL =====
        dynamicsTitle: "Dinámica Operacional en la Práctica",
        dynamicsSubtitle: "SVEED respeta íntegramente la rutina de la escuela y la familia, garantizando autonomía y fluidez en el uso de los dispositivos.",
        dynamicsContext: "Durante el horario de clase, fines de semana, feriados y vacaciones, el dispositivo funciona en modo de autonomía total, sin ninguna interferencia del sistema. La verificación ocurre exclusivamente una vez al día, en el primer uso fuera del horario escolar, siguiendo el flujo a continuación:",
        dynamicsFlow1Title: "Orientación Inicial por Audio",
        dynamicsFlow1Text: "El sistema explica de forma simple y humanizada lo que va a pasar. El niño no necesita dominio de lectura para iniciar la rutina.",
        dynamicsFlow2Title: "Bloque de Refuerzo (Tiempo de Exposición)",
        dynamicsFlow2Text: "Período corto dedicado a la revisión de contenidos. Sin preguntas, sin evaluación y sin presión por resultados. El foco es el contacto con el tema.",
        dynamicsFlow3Title: "Pausa Obligatoria (Salud Digital)",
        dynamicsFlow3Text: "El sistema interrumpe la actividad para una pausa breve (hidratación y estiramiento). Previene la fatiga y mitiga comportamientos de simulación de estudio.",
        dynamicsFlow4Title: "Bloque de Ejecución (Interacción Funcional)",
        dynamicsFlow4Text: "Momento de ejecución de la actividad propuesta. El sistema verifica solo la interacción y el nexo operacional, sin atribución de notas o juicio de error/acierto.",
        dynamicsFlow5Title: "Cierre y Liberación",
        dynamicsFlow5Text: "Si el niño interactúa, la rutina se completa con éxito. Si hay cansancio, el sistema cierra de forma gentil. Después del ciclo, la tablet queda totalmente libre y SVEED no reaparece hasta el día siguiente.",
        dynamicsNote: "Nota:",
        dynamicsNoteText: "SVEED prioriza la salud digital y el compromiso positivo, eliminando mecanismos de frustración o cobro pedagógico indebido.",
        
        // ===== SECCIÓN PILARES TECNOLÓGICOS =====
        pillarsTitle: "Pilares Tecnológicos",
        pillar1Title: "Precisión Temporal",
        pillar1Text: "Utilización de reloj monotónico para garantizar registro fidedigno de tiempo real de ejecución, independiente de manipulaciones de sistema o reloj de pared.",
        pillar1Detail: "Método:",
        pillar1DetailText: "Monotonic clock API con protección contra adulteración",
        pillar2Title: "Privacidad por Diseño",
        pillar2Text: "Arquitectura que impide, por concepción, la recopilación de datos personales, identificación individual o rastreo de usuarios específicos.",
        pillar2Detail: "Cumplimiento:",
        pillar2DetailText: "LGPD por diseño, no por compliance",
        pillar3Title: "Accesibilidad Operacional",
        pillar3Text: "Interfaz basada en audio y señales visuales simplificadas, sin presuponer alfabetización funcional o familiaridad con ambientes digitales. La accesibilidad aquí es estrictamente operacional, no pedagógica o curricular.",
        pillar3Detail: "Aplicación:",
        pillar3DetailText: "Contextos de baja alfabetización digital",
        
        // ===== SECCIÓN DASHBOARD PÚBLICO =====
        dashboardTitle: "Panel Público de Ejecución",
        dashboardDemoNote: "Panel demostrativo con datos simulados, presentado exclusivamente para visualización técnica de indicadores agregados de ejecución.",
        dashboardDisclaimer: "Este panel presenta exclusivamente indicadores agregados de ejecución operacional en el contexto de políticas públicas. No contiene datos personales, individuales o identificables.",
        dashboardFilterPeriod: "Período de Referencia:",
        dashboardFilterRegion: "Región:",
        dashboardFilterAllRegions: "Todas las Regiones",
        dashboardFilterUrbanZone: "Zona Urbana",
        dashboardFilterRuralZone: "Zona Rural",
        dashboardFilterNorthZone: "Zona Norte",
        dashboardFilterSouthZone: "Zona Sur",
        dashboardMetric1Label: "Tiempo Promedio Diario",
        dashboardMetric1Change: "+8% vs período anterior",
        dashboardMetric2Label: "Sesiones con Ciclo Cerrado",
        dashboardMetric2Change: "+3% vs período anterior",
        dashboardMetric2Note: "Ciclo cerrado se refiere exclusivamente al término técnico de la sesión conforme parámetros temporales del sistema, sin inferencia de desempeño, contenido o aprendizaje.",
        dashboardMetric3Label: "Total de Sesiones",
        dashboardMetric3Change: "Período: Q1 2026",
        dashboardChart1Title: "Distribución por Área de Conocimiento",
        dashboardChart2Title: "Evolución Temporal de Ejecución",
        dashboardNote: "Nota técnica:",
        dashboardNoteText: "Los indicadores presentados se refieren exclusivamente a datos agregados de ejecución operacional. No representan evaluación de calidad pedagógica, desempeño individual o eficacia de contenidos.",
        
        // ===== SECCIÓN PARA OPERADORAS =====
        operatorsTitle: "Para Operadoras e Integradores",
        operatorsIntro: "SVEED actúa como servicio técnico complementario a la infraestructura de suministro de hardware educativo, ofreciendo capa adicional de verificación objetiva de uso funcional.",
        operators1Title: "Reducción de Riesgo Contractual",
        operators1Text: "Proporciona evidencia objetiva de ejecución operacional de los activos suministrados, mitigando cuestionamientos sobre efectividad de entrega y uso funcional de los equipos.",
        operators2Title: "Evidencia Objetiva de Uso",
        operators2Text: "Genera registros auditables de tiempo de ejecución y cierre técnico de sesiones, independiente de conectividad o infraestructura centralizada de monitoreo.",
        operators3Title: "Protección Reputacional",
        operators3Text: "Documenta la operación funcional de los equipos suministrados, ofreciendo amparo técnico para procesos de recepción y rendición de cuentas ante órganos contratantes.",
        operators4Title: "Integración Técnica",
        operators4Text: "Compatible con diferentes configuraciones de hardware y sistemas operativos, sin dependencia de plataformas propietarias o conectividad obligatoria.",
        operatorsDisclaimer: "SVEED no sustituye obligaciones contractuales de suministro, soporte técnico o conectividad. Actúa exclusivamente como herramienta de verificación complementaria.",
        
        // ===== SECCIÓN CUMPLIMIENTO =====
        complianceTitle: "Cumplimiento y Naturaleza Jurídica",
        complianceHighlight: "SVEED es infraestructura técnica de verificación, no plataforma educativa.",
        compliance1Title: "Registro INPI",
        compliance1Text: "Programa de computadora con registro depositado en el Instituto Nacional de Propiedad Industrial (INPI), con naturaleza jurídica de software de infraestructura técnica orientada a la gobernanza pública.",
        compliance2Title: "Arquitectura Determinística",
        compliance2Text: "Procesamiento basado en lógica determinística y auditable, sin componentes probabilísticos, algoritmos de inferencia o procesamiento de lenguaje natural generativo.",
        compliance3Title: "Operación Offline",
        compliance3Text: "Funcionamiento independiente de conexión continua a internet, sin dependencia de servicios en nube o sistemas de autenticación remota.",
        compliance4Title: "Cumplimiento LGPD",
        compliance4Text: "Arquitectura que impide, por concepción técnica, la recopilación de datos personales o identificación individual. Cumplimiento por diseño, no por proceso.",
        compliance5Title: "Datos Agregados",
        compliance5Text: "Registros exclusivamente agregados por región, período y área de conocimiento. Imposibilidad técnica de desagregación para nivel individual.",
        compliance6Title: "Auditabilidad",
        compliance6Text: "Logs de sistema auditables por órganos de control, con rastro de procesamiento verificable y transparente respecto a los métodos de cálculo empleados.",
        complianceScopeTitle: "Ámbito de Actuación",
        complianceScopeText: "SVEED verifica exclusivamente la ejecución operacional de rutinas en el contexto educativo en dispositivos utilizados en el ámbito de políticas públicas de educación. No realiza:",
        complianceScope1: "Evaluación de contenido pedagógico",
        complianceScope2: "Inferencia sobre calidad de enseñanza",
        complianceScope3: "Medición de resultados de aprendizaje",
        complianceScope4: "Comparación entre individuos o instituciones",
        complianceScope5: "Procesamiento de datos sensibles o personales",
        
        // ===== SECCIÓN DOCUMENTACIÓN TÉCNICA =====
        documentationTitle: "Documentación Técnica",
        whitepaperTitle: "White Paper Técnico",
        whitepaperSubtitle: "Aviones, Cohetes y Trenes: Por Qué la EdTech Tradicional Falla en Políticas Públicas de Educación en Brasil",
        whitepaperDescription: "Documento técnico-institucional que analiza el gap de auditabilidad en políticas públicas de tecnología educativa y presenta la arquitectura determinística de verificación como solución.",
        whitepaperBtnView: "VER DOCUMENTO",
        whitepaperBtnDownload: "DESCARGAR PDF",
        
        // ===== PIE DE PÁGINA =====
        footerTagline: "Verificación de Rutinas de Uso en Educación",
        footerDescription: "Infraestructura técnica orientada a la gobernanza pública de la última milla educativa.",
        footerScope: "SVEED no recopila datos personales ni permite identificación individual.",
        footerNavTitle: "Navegación",
        footerPublicTitle: "Público",
        footerContactTitle: "Contacto Institucional",
        footerContactText: "Para solicitudes de nota técnica, aclaraciones o integración:",
        footerContactBtn: "Solicitar Contacto",
        footerCopyright: "© 2025 SVEED. Programa de computadora de infraestructura técnica orientada a la gobernanza pública. Todos los derechos reservados.",
        
        // ===== MODAL DE CONTACTO =====
        modalTitle: "Solicitar Nota Técnica de Viabilidad",
        modalFieldName: "Nombre Completo",
        modalFieldRole: "Cargo / Función",
        modalFieldInstitution: "Institución / Órgano",
        modalFieldEmail: "Email Institucional",
        modalFieldPhone: "Teléfono",
        modalFieldMessage: "Contexto / Objetivo de la Solicitud",
        modalSubmitBtn: "Enviar Solicitud",
        modalSuccessMsg: "Solicitud recibida con éxito. Responderemos en hasta 48 horas hábiles.",
        
        // ===== ETIQUETAS DE GRÁFICOS =====
        chartKnowledgeAreas: {
            'Português': 'Portugués',
            'Matemática': 'Matemáticas',
            'Ciências': 'Ciencias',
            'História': 'Historia',
            'Inglês': 'Inglés'
        },
        chartTimeLabels: {
            week: 'Sem',
            month: 'Mes',
            months: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun']
        },
        chartTimeSeriesLabel: 'Tiempo Promedio (minutos)'
    }
};

// ==========================================================================
// FUNÇÃO COMPLETA PARA APLICAR TRADUÇÕES EM TODAS AS SEÇÕES
// ==========================================================================

function applyLanguage(lang) {
    const t = siteTranslations[lang];
    if (!t) return;
    
    // Salvar idioma selecionado
    localStorage.setItem('sveed-language', lang);
    
    // ===== META TAGS E ATRIBUTOS =====
    document.querySelector('meta[name="description"]').setAttribute('content', t.metaDesc);
    document.querySelector('meta[name="keywords"]').setAttribute('content', t.metaKeywords);
    document.title = t.pageTitle;
    
    const langCodes = { pt: 'pt-BR', en: 'en-US', es: 'es-ES' };
    document.documentElement.lang = langCodes[lang];
    
    // ===== HEADER =====
    const logoSubtitle = document.querySelector('.logo-subtitle');
    if (logoSubtitle) logoSubtitle.textContent = t.logoSubtitle;
    
    // ===== NAVIGATION =====
    const navLinks = document.querySelectorAll('.nav a');
    if (navLinks.length >= 7) {
        navLinks[0].textContent = t.navChallenge;
        navLinks[1].textContent = t.navAbout;
        navLinks[2].textContent = t.navDynamics;
        navLinks[3].textContent = t.navPillars;
        navLinks[4].textContent = t.navDashboard;
        navLinks[5].textContent = t.navOperators;
        navLinks[6].textContent = t.navCompliance;
    }
    
    // ===== HERO =====
    const heroTitle = document.querySelector('.hero-title');
    const heroSubtitle = document.querySelector('.hero-subtitle');
    const ctaButton = document.querySelector('.cta-button');
    const ctaDisclaimer = document.querySelector('.cta-disclaimer');
    
    if (heroTitle) heroTitle.textContent = t.heroTitle;
    if (heroSubtitle) heroSubtitle.textContent = t.heroSubtitle;
    if (ctaButton) ctaButton.textContent = t.ctaButton;
    if (ctaDisclaimer) ctaDisclaimer.textContent = t.ctaDisclaimer;
    
    // ===== SEÇÃO O DESAFIO =====
    const challengeTitle = document.querySelector('#desafio .section-title');
    if (challengeTitle) challengeTitle.textContent = t.challengeTitle;
    
    const challengeCards = document.querySelectorAll('#desafio .challenge-card');
    if (challengeCards.length >= 3) {
        challengeCards[0].querySelector('h3').textContent = t.challenge1Title;
        challengeCards[0].querySelector('p').textContent = t.challenge1Text;
        challengeCards[1].querySelector('h3').textContent = t.challenge2Title;
        challengeCards[1].querySelector('p').textContent = t.challenge2Text;
        challengeCards[2].querySelector('h3').textContent = t.challenge3Title;
        challengeCards[2].querySelector('p').textContent = t.challenge3Text;
    }
    
    // ===== SEÇÃO O QUE É O SVEED =====
    const aboutTitle = document.querySelector('#sobre .section-title');
    if (aboutTitle) aboutTitle.textContent = t.aboutTitle;
    
    const aboutLead = document.querySelector('.definition-lead');
    if (aboutLead) aboutLead.textContent = t.aboutLead;
    
    const defItems = document.querySelectorAll('.definition-item');
    if (defItems.length >= 3) {
        defItems[0].querySelector('h4').textContent = t.aboutDef1Title;
        defItems[0].querySelector('p').textContent = t.aboutDef1Text;
        defItems[1].querySelector('h4').textContent = t.aboutDef2Title;
        defItems[1].querySelector('p').textContent = t.aboutDef2Text;
        defItems[2].querySelector('h4').textContent = t.aboutDef3Title;
        defItems[2].querySelector('p').textContent = t.aboutDef3Text;
    }
    
    const techHighlightsTitle = document.querySelector('.technical-highlights h3');
    if (techHighlightsTitle) techHighlightsTitle.textContent = t.aboutTechTitle;
    
    const techList = document.querySelectorAll('.technical-list li');
    if (techList.length >= 4) {
        techList[0].innerHTML = `<i class="fas fa-wifi-slash"></i> <strong>${t.aboutTech1}</strong> ${t.aboutTech1Text}`;
        techList[1].innerHTML = `<i class="fas fa-microchip"></i> <strong>${t.aboutTech2}</strong> ${t.aboutTech2Text}`;
        techList[2].innerHTML = `<i class="fas fa-ban"></i> <strong>${t.aboutTech3}</strong> ${t.aboutTech3Text}`;
        techList[3].innerHTML = `<i class="fas fa-user-shield"></i> <strong>${t.aboutTech4}</strong> ${t.aboutTech4Text}`;
    }
    
    const scopeNote = document.querySelector('.sveed-scope-note p');
    if (scopeNote) scopeNote.textContent = t.aboutNote;
    
    // ===== SEÇÃO DINÂMICA OPERACIONAL =====
    const dynamicsTitle = document.querySelector('#dinamica .section-title');
    if (dynamicsTitle) dynamicsTitle.textContent = t.dynamicsTitle;
    
    const dynamicsSubtitle = document.querySelector('#dinamica .section-subtitle');
    if (dynamicsSubtitle) dynamicsSubtitle.textContent = t.dynamicsSubtitle;
    
    const dynamicsContext = document.querySelector('.dinamica-context p');
    if (dynamicsContext) dynamicsContext.textContent = t.dynamicsContext;
    
    const flowCards = document.querySelectorAll('.flow-card');
    if (flowCards.length >= 5) {
        flowCards[0].querySelector('h3').textContent = t.dynamicsFlow1Title;
        flowCards[0].querySelector('p').textContent = t.dynamicsFlow1Text;
        flowCards[1].querySelector('h3').textContent = t.dynamicsFlow2Title;
        flowCards[1].querySelector('p').textContent = t.dynamicsFlow2Text;
        flowCards[2].querySelector('h3').textContent = t.dynamicsFlow3Title;
        flowCards[2].querySelector('p').textContent = t.dynamicsFlow3Text;
        flowCards[3].querySelector('h3').textContent = t.dynamicsFlow4Title;
        flowCards[3].querySelector('p').textContent = t.dynamicsFlow4Text;
        flowCards[4].querySelector('h3').textContent = t.dynamicsFlow5Title;
        flowCards[4].querySelector('p').textContent = t.dynamicsFlow5Text;
    }
    
    const dynamicsNote = document.querySelector('.dinamica-note p');
    if (dynamicsNote) {
        dynamicsNote.innerHTML = `<strong>${t.dynamicsNote}</strong> ${t.dynamicsNoteText}`;
    }
    
    // ===== SEÇÃO PILARES TECNOLÓGICOS =====
    const pillarsTitle = document.querySelector('#pilares .section-title');
    if (pillarsTitle) pillarsTitle.textContent = t.pillarsTitle;
    
    const pillarCards = document.querySelectorAll('.pillar-card');
    if (pillarCards.length >= 3) {
        pillarCards[0].querySelector('h3').textContent = t.pillar1Title;
        pillarCards[0].querySelector('p').textContent = t.pillar1Text;
        const pillar1Detail = pillarCards[0].querySelector('.pillar-detail');
        if (pillar1Detail) pillar1Detail.innerHTML = `<span class="detail-label">${t.pillar1Detail}</span> ${t.pillar1DetailText}`;
        
        pillarCards[1].querySelector('h3').textContent = t.pillar2Title;
        pillarCards[1].querySelector('p').textContent = t.pillar2Text;
        const pillar2Detail = pillarCards[1].querySelector('.pillar-detail');
        if (pillar2Detail) pillar2Detail.innerHTML = `<span class="detail-label">${t.pillar2Detail}</span> ${t.pillar2DetailText}`;
        
        pillarCards[2].querySelector('h3').textContent = t.pillar3Title;
        pillarCards[2].querySelector('p').textContent = t.pillar3Text;
        const pillar3Detail = pillarCards[2].querySelector('.pillar-detail');
        if (pillar3Detail) pillar3Detail.innerHTML = `<span class="detail-label">${t.pillar3Detail}</span> ${t.pillar3DetailText}`;
    }
    
    // ===== SEÇÃO DASHBOARD PÚBLICO =====
    const dashboardTitle = document.querySelector('#dashboard .section-title');
    if (dashboardTitle) dashboardTitle.textContent = t.dashboardTitle;
    
    const dashboardDemoNote = document.querySelector('.dashboard-demo-note p');
    if (dashboardDemoNote) dashboardDemoNote.textContent = t.dashboardDemoNote;
    
    const dashboardDisclaimer = document.querySelector('.dashboard-disclaimer p');
    if (dashboardDisclaimer) dashboardDisclaimer.textContent = t.dashboardDisclaimer;
    
    // Filtros do Dashboard
    const filterLabels = document.querySelectorAll('.filter-group label');
    if (filterLabels.length >= 2) {
        filterLabels[0].textContent = t.dashboardFilterPeriod;
        filterLabels[1].textContent = t.dashboardFilterRegion;
    }
    
    const regionOptions = document.querySelectorAll('#regiaoFilter option');
    if (regionOptions.length >= 5) {
        regionOptions[0].textContent = t.dashboardFilterAllRegions;
        regionOptions[1].textContent = t.dashboardFilterUrbanZone;
        regionOptions[2].textContent = t.dashboardFilterRuralZone;
        regionOptions[3].textContent = t.dashboardFilterNorthZone;
        regionOptions[4].textContent = t.dashboardFilterSouthZone;
    }
    
    // Métricas
    const metricLabels = document.querySelectorAll('.metric-label');
    if (metricLabels.length >= 3) {
        metricLabels[0].textContent = t.dashboardMetric1Label;
        metricLabels[1].textContent = t.dashboardMetric2Label;
        metricLabels[2].textContent = t.dashboardMetric3Label;
    }
    
    const metricChanges = document.querySelectorAll('.metric-change');
    if (metricChanges.length >= 3) {
        metricChanges[0].textContent = t.dashboardMetric1Change;
        metricChanges[1].textContent = t.dashboardMetric2Change;
        metricChanges[2].textContent = t.dashboardMetric3Change;
    }
    
    const metricNote = document.querySelector('.metric-note');
    if (metricNote) metricNote.textContent = t.dashboardMetric2Note;
    
    // Títulos dos gráficos
    const chartTitles = document.querySelectorAll('.chart-title');
    if (chartTitles.length >= 2) {
        chartTitles[0].textContent = t.dashboardChart1Title;
        chartTitles[1].textContent = t.dashboardChart2Title;
    }
    
    const dashboardNote = document.querySelector('.dashboard-note p');
    if (dashboardNote) {
        dashboardNote.innerHTML = `<strong>${t.dashboardNote}</strong> ${t.dashboardNoteText}`;
    }
    
    // ===== SEÇÃO PARA OPERADORAS =====
    const operatorsTitle = document.querySelector('#operadoras .section-title');
    if (operatorsTitle) operatorsTitle.textContent = t.operatorsTitle;
    
    const operatorsIntro = document.querySelector('.operadoras-intro p');
    if (operatorsIntro) operatorsIntro.textContent = t.operatorsIntro;
    
    const operatorCards = document.querySelectorAll('.operadora-card');
    if (operatorCards.length >= 4) {
        operatorCards[0].querySelector('h3').textContent = t.operators1Title;
        operatorCards[0].querySelector('p').textContent = t.operators1Text;
        operatorCards[1].querySelector('h3').textContent = t.operators2Title;
        operatorCards[1].querySelector('p').textContent = t.operators2Text;
        operatorCards[2].querySelector('h3').textContent = t.operators3Title;
        operatorCards[2].querySelector('p').textContent = t.operators3Text;
        operatorCards[3].querySelector('h3').textContent = t.operators4Title;
        operatorCards[3].querySelector('p').textContent = t.operators4Text;
    }
    
    const operatorsDisclaimer = document.querySelector('.operadoras-cta p');
    if (operatorsDisclaimer) operatorsDisclaimer.textContent = t.operatorsDisclaimer;
    
    // ===== SEÇÃO CONFORMIDADE =====
    const complianceTitle = document.querySelector('#conformidade .section-title');
    if (complianceTitle) complianceTitle.textContent = t.complianceTitle;
    
    const complianceHighlight = document.querySelector('.conformidade-highlight .highlight-text');
    if (complianceHighlight) complianceHighlight.textContent = t.complianceHighlight;
    
    const complianceItems = document.querySelectorAll('.conformidade-item');
    if (complianceItems.length >= 6) {
        complianceItems[0].querySelector('h4').innerHTML = `<i class="fas fa-registered"></i> ${t.compliance1Title}`;
        complianceItems[0].querySelector('p').textContent = t.compliance1Text;
        complianceItems[1].querySelector('h4').innerHTML = `<i class="fas fa-code"></i> ${t.compliance2Title}`;
        complianceItems[1].querySelector('p').textContent = t.compliance2Text;
        complianceItems[2].querySelector('h4').innerHTML = `<i class="fas fa-plug"></i> ${t.compliance3Title}`;
        complianceItems[2].querySelector('p').textContent = t.compliance3Text;
        complianceItems[3].querySelector('h4').innerHTML = `<i class="fas fa-user-lock"></i> ${t.compliance4Title}`;
        complianceItems[3].querySelector('p').textContent = t.compliance4Text;
        complianceItems[4].querySelector('h4').innerHTML = `<i class="fas fa-database"></i> ${t.compliance5Title}`;
        complianceItems[4].querySelector('p').textContent = t.compliance5Text;
        complianceItems[5].querySelector('h4').innerHTML = `<i class="fas fa-search"></i> ${t.compliance6Title}`;
        complianceItems[5].querySelector('p').textContent = t.compliance6Text;
    }
    
    const complianceScopeTitle = document.querySelector('.conformidade-note h4');
    if (complianceScopeTitle) complianceScopeTitle.textContent = t.complianceScopeTitle;
    
    const complianceScopeIntro = document.querySelector('.conformidade-note > p');
    if (complianceScopeIntro) complianceScopeIntro.textContent = t.complianceScopeText;
    
    const complianceScopeList = document.querySelectorAll('.conformidade-note ul li');
    if (complianceScopeList.length >= 5) {
        complianceScopeList[0].textContent = t.complianceScope1;
        complianceScopeList[1].textContent = t.complianceScope2;
        complianceScopeList[2].textContent = t.complianceScope3;
        complianceScopeList[3].textContent = t.complianceScope4;
        complianceScopeList[4].textContent = t.complianceScope5;
    }
    
    // ===== FOOTER =====
    const footerTagline = document.querySelector('.footer-tagline');
    const footerDescription = document.querySelector('.footer-description');
    const footerScope = document.querySelector('.footer-scope');
    const footerCopyright = document.querySelector('.footer-bottom p');
    
    if (footerTagline) footerTagline.textContent = t.footerTagline;
    if (footerDescription) footerDescription.textContent = t.footerDescription;
    if (footerScope) footerScope.textContent = t.footerScope;
    if (footerCopyright) footerCopyright.textContent = t.footerCopyright;
    
    const footerSections = document.querySelectorAll('.footer-section h4');
    if (footerSections.length >= 3) {
        footerSections[0].textContent = t.footerNavTitle;
        footerSections[1].textContent = t.footerPublicTitle;
        footerSections[2].textContent = t.footerContactTitle;
    }
    
    const footerContactText = document.querySelector('.footer-section p');
    const footerContactBtn = document.getElementById('footerCta');
    if (footerContactText) footerContactText.textContent = t.footerContactText;
    if (footerContactBtn) footerContactBtn.textContent = t.footerContactBtn;
    
    // Footer Navigation Links (com sufixos)
    const footerNavLinks = document.querySelectorAll('.footer-section ul a');
    if (footerNavLinks.length >= 7) {
        footerNavLinks[0].textContent = t.navChallenge;
        footerNavLinks[1].textContent = t.navAbout;
        footerNavLinks[2].textContent = t.navDynamics + (lang === 'es' ? ' Operacional' : lang === 'en' ? ' Operational' : ' Operacional');
        footerNavLinks[3].textContent = t.navPillars + (lang === 'pt' ? ' Tecnológicos' : lang === 'en' ? ' Technological' : ' Tecnológicos');
        footerNavLinks[4].textContent = t.navDashboard + (lang === 'pt' ? ' Público' : lang === 'en' ? ' Public' : ' Público');
        footerNavLinks[5].textContent = t.navOperators + (lang === 'es' ? ' e Integradores' : lang === 'en' ? ' and Integrators' : ' e Integradores');
        footerNavLinks[6].textContent = t.navCompliance;
    }
    
    // ===== MODAL DE CONTATO =====
    const modalTitle = document.querySelector('#contactModal h3');
    if (modalTitle) modalTitle.textContent = t.modalTitle;
    
    const modalLabels = document.querySelectorAll('#contactForm label');
    if (modalLabels.length >= 6) {
        modalLabels[0].textContent = t.modalFieldName;
        modalLabels[1].textContent = t.modalFieldRole;
        modalLabels[2].textContent = t.modalFieldInstitution;
        modalLabels[3].textContent = t.modalFieldEmail;
        modalLabels[4].textContent = t.modalFieldPhone;
        modalLabels[5].textContent = t.modalFieldMessage;
    }
    
    const modalSubmitBtn = document.querySelector('#contactForm button[type="submit"]');
    if (modalSubmitBtn) modalSubmitBtn.textContent = t.modalSubmitBtn;
    
    const modalSuccessMsg = document.querySelector('#formSuccess p');
    if (modalSuccessMsg) modalSuccessMsg.textContent = t.modalSuccessMsg;
    
    // Atualizar botões de idioma
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.lang === lang) {
            btn.classList.add('active');
        }
    });
}

// ==========================================================================
// INICIALIZAR SISTEMA DE IDIOMAS
// ==========================================================================

document.addEventListener('DOMContentLoaded', function() {
    // Verificar idioma salvo ou usar padrão (pt)
    const savedLang = localStorage.getItem('sveed-language') || 'pt';
    applyLanguage(savedLang);
    
    // Event listeners para botões de idioma
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const lang = this.dataset.lang;
            applyLanguage(lang);
        });
    });
});
