(() => {
    "use strict";

    const translations = {
        pt: {
            nav_aria: "Navegação principal",
            nav_exp: "Experiência",
            nav_services: "Serviços",
            nav_projects: "Projetos",
            nav_process: "Processo",
            nav_contact: "Vamos conversar",
            hero_badge: "Desenvolvedor Full Stack · Sites, sistemas e APIs",
            hero_title_prefix: "Transformo ideias de negócio em",
            hero_aria: "Transformo ideias de negócio em sites profissionais",
            hero_text: "Do planejamento à publicação: interface, back-end, banco de dados, integrações e performance reunidos em uma solução sob medida.",
            btn_projects: "Conhecer meus trabalhos",
            btn_hire: "Apresentar meu projeto",
            btn_explore: "Explorar projeto",
            hero_trust: "Atendimento direto em todas as etapas, da ideia à entrega em produção.",
            hero_showcase_tag: "Desenvolvimento sob medida",
            hero_showcase_note: "Sem templates genéricos",
            hero_showcase_stack: "Código organizado",
            stat_years: "Anos desenvolvendo soluções",
            stat_projects: "Projetos desenvolvidos",
            stat_vanilla: "Foco em Vanilla",
            stat_speed: "PageSpeed em projeto auditado",
            about_badge: "Quem está por trás",
            about_title: "Visão completa, código organizado e <span>um único responsável.</span>",
            about_text: "Sou André Abrão, Desenvolvedor Full Stack com mais de quatro anos de experiência e mais de 50 projetos desenvolvidos. Participo de todo o ciclo: planejamento, interface, front-end, back-end, banco de dados, APIs, integrações, testes, otimização e publicação.",
            tag_vanilla: "HTML · CSS · JavaScript",
            tag_js: "PHP · APIs REST",
            tag_vitals: "MySQL",
            tag_git: "Git · GitHub",
            tag_android: "Android · Kotlin",
            social_badge: "Confiança",
            social_title: "O que muda depois de uma <span>boa entrega.</span>",
            test_1_text: "O André elevou o nível técnico das nossas landing pages e entregou uma experiência muito mais rápida do que tínhamos anteriormente.",
            test_2_text: "A entrega foi organizada, fiel ao projeto e extremamente cuidadosa com performance em dispositivos móveis.",
            test_3_text: "A transição para uma página mais leve na Detox Orange foi um divisor de águas. Reduzimos o tempo de carregamento e melhoramos a experiência das campanhas mobile.",
            test_3_sub: "Marca de saúde e bem-estar",
            method_badge: "Como funciona",
            method_title: "Um processo claro da necessidade <span>à produção.</span>",
            method_1_h: "Entendimento e planejamento",
            method_1_p: "Analiso o negócio, o público, os objetivos, as funcionalidades e os principais fluxos antes de definir a solução.",
            method_2_h: "Desenvolvimento ponta a ponta",
            method_2_p: "Construo interface, back-end, banco de dados e integrações por etapas, com acompanhamento e validações.",
            method_3_h: "Testes, publicação e suporte",
            method_3_p: "Valido funcionalidades, responsividade e desempenho antes de configurar o ambiente e colocar a solução em produção.",
            serv_badge: "Como posso ajudar",
            serv_title: "Do visual à lógica, <span>uma entrega completa.</span>",
            serv_intro: "Planejamento, interface, back-end, banco de dados, integrações, testes e publicação tratados de ponta a ponta.",
            serv_lp_title: "Sites e landing pages",
            serv_lp_desc: "Presenças digitais rápidas e personalizadas para apresentar sua marca, seus serviços e suas ofertas com profissionalismo.",
            serv_lp_item1: "Sites institucionais e páginas comerciais",
            serv_lp_item2: "Design responsivo e mobile first",
            serv_lp_item3: "Formulários, WhatsApp, mapas e redes sociais",
            serv_opt_title: "Sistemas web e APIs",
            serv_opt_desc: "Soluções funcionais para organizar informações, automatizar processos e conectar diferentes serviços.",
            serv_opt_item1: "PHP, regras de negócio e APIs REST",
            serv_opt_item2: "Cadastros, autenticação e painéis",
            serv_opt_item3: "MySQL e integração com bancos de dados",
            serv_app_title: "Desenvolvimento mobile",
            serv_app_desc: "Aplicativos Android nativos, seguros e fluidos para transformar sua ideia em produto.",
            serv_b2b_title: "Performance e publicação",
            serv_b2b_desc: "Preparação técnica para entregar uma solução rápida, estável, encontrável e pronta para funcionar em produção.",
            serv_b2b_item1: "Otimização e SEO técnico essencial",
            serv_b2b_item2: "Domínio, hospedagem, DNS e SSL",
            serv_b2b_item3: "Testes, publicação e suporte na entrega",
            secondary_capability: "Também atuo em implementação white label para agências e desenvolvimento Android nativo com Kotlin quando o projeto exige uma solução mobile dedicada.",
            lp_concept_badge: "Conceito",
            lp_concept_title: "Mas afinal, o que é uma <span>Landing Page</span>?",
            lp_concept_desc: "Diferente de um site institucional cheio de caminhos, uma <strong>Landing Page</strong> concentra a experiência em um objetivo principal: <strong>conversão</strong>.",
            lp_feat_1_h: "🎯 Foco único",
            lp_feat_1_p: "Reduz distrações e conduz o visitante até a ação mais importante.",
            lp_feat_2_h: "⚡ Velocidade crítica",
            lp_feat_2_p: "Páginas leves reduzem a espera e melhoram a experiência de quem chega pelos anúncios.",
            lp_feat_3_h: "📱 Mobile first",
            lp_feat_3_p: "Design pensado primeiro para quem navega e compra pelo celular.",
            speed_badge: "Prova técnica",
            speed_title: "Velocidade é parte da <span>experiência de venda.</span>",
            speed_desc: "Uma página bonita perde valor quando demora para abrir. Por isso, cada entrega é pensada para celulares, conexões reais e manutenção simples.",
            speed_item1: "Imagens e recursos otimizados",
            speed_item2: "Código sem dependências desnecessárias",
            speed_item3: "Acessibilidade e estabilidade visual",
            speed_caption: "Resultado registrado em projeto auditado",
            projects_badge: "Trabalhos selecionados",
            projects_title: "Projetos com propósito. <span>Soluções sob medida.</span>",
            projects_intro: "Trabalhos para diferentes segmentos, construídos com identidade própria, navegação clara, responsividade e foco nos objetivos de cada negócio.",
            case_goal_label: "Objetivo",
            case_delivery_label: "Entrega",
            case1_category: "Mentoria e lançamento",
            case1_title: "Uma oferta complexa apresentada com clareza.",
            case1_desc: "Uma direção editorial forte para organizar método, posicionamento e chamada para a nova turma sem sobrecarregar a decisão.",
            case1_goal: "Transformar experiência em uma oferta desejada",
            case1_delivery: "Estratégia visual e landing page responsiva",
            case2_category: "Cafeteria premium",
            case2_title: "Uma marca sensorial traduzida para o digital.",
            case2_desc: "Fotografia imersiva, ritmo calmo e navegação precisa constroem uma experiência que comunica origem, cuidado e pausa.",
            case2_goal: "Valorizar a experiência e o cardápio da marca",
            case2_delivery: "Site de marca com narrativa e menu responsivo",
            case3_category: "Beleza e agendamento",
            case3_title: "Sofisticação que conduz até a reserva.",
            case3_desc: "Uma linguagem visual elegante apresenta serviços, confiança e disponibilidade sem perder o foco na ação principal.",
            case3_goal: "Elevar percepção de valor e gerar agendamentos",
            case3_delivery: "Site institucional com jornada de reserva",
            other_projects_badge: "Outras entregas",
            other_projects_title: "Mais experiências <span>sob medida</span>",
            systems_badge: "Sistemas interativos",
            systems_title: "Além de sites: <span>produtos que funcionam.</span>",
            systems_intro: "Cinco demonstrações funcionais de interfaces, regras de negócio, dados, automações e integrações.",
            system1_category: "Dashboard e gestão",
            system1_desc: "Indicadores, filtros, gráficos e atividade recente em um painel responsivo.",
            system2_category: "Autenticação e segurança",
            system2_desc: "Login com validação, feedback de erros e controle visual de sessão.",
            system3_category: "Banco de dados e CRUD",
            system3_desc: "Cadastro completo com busca, edição, exclusão e persistência no navegador.",
            system4_category: "Automação de processos",
            system4_desc: "Fluxo automatizado de atendimento com execução e histórico em tempo real.",
            system5_category: "API REST e integrações",
            system5_desc: "Console interativo para testar métodos HTTP e visualizar respostas JSON.",
            compact1_category: "Confeitaria e infoproduto",
            compact1_desc: "Página de lançamento com direção visual de alto impacto.",
            compact2_category: "Alimentação saudável",
            compact2_desc: "Catálogo leve, prova social e pedido direto pelo WhatsApp.",
            compact3_category: "Gastronomia artesanal",
            compact3_desc: "Narrativa italiana, produto em destaque e presença memorável.",
            compact4_category: "Bistrô e alta gastronomia",
            compact4_desc: "Atmosfera sofisticada com cardápio e reservas em evidência.",
            faq_badge: "Antes de começar",
            faq_title: "Perguntas <span>frequentes</span>",
            faq_q1: "Você desenvolve apenas sites?",
            faq_a1: "Não. Também desenvolvo sistemas web, painéis administrativos, autenticação, APIs REST, integrações com bancos de dados e aplicações Android nativas com Kotlin.",
            faq_q2: "Quanto tempo leva uma entrega?",
            faq_a2: "O prazo depende do escopo e do conteúdo, mas é definido antes do início com etapas claras de validação.",
            faq_q3: "A solução fica pronta para celular e publicação?",
            faq_a3: "Sim. A entrega inclui responsividade, testes, otimização e apoio com hospedagem, domínio, DNS e certificado SSL conforme o escopo.",
            faq_q4: "Você trabalha com agências?",
            faq_a4: "Sim. Posso atuar em white label, preservando a identidade da agência e entregando a implementação pronta para produção.",
            contact_badge: "Sua próxima solução começa com uma boa conversa",
            contact_title: "Vamos transformar sua necessidade em uma solução <span>pronta para evoluir?</span>",
            contact_text: "Conte o objetivo, as funcionalidades e o momento do seu negócio para receber uma direção inicial.",
            btn_contact_chat: "Apresentar meu projeto",
            tooltip_vanilla: "Front-end responsivo desenvolvido com as tecnologias fundamentais da web.",
            tooltip_js: "Back-end em PHP, regras de negócio, integrações e criação de APIs REST.",
            tooltip_android: "Aplicativos nativos desenvolvidos com Kotlin, a linguagem recomendada para Android.",
            tooltip_vitals: "Banco de dados relacional para cadastros, autenticação, painéis e outras funcionalidades.",
            tooltip_git: "Versionamento e organização do código com Git e GitHub."
        },
        en: {
            nav_aria: "Primary navigation",
            nav_exp: "Experience",
            nav_services: "Services",
            nav_projects: "Projects",
            nav_process: "Process",
            nav_contact: "Let's talk",
            hero_badge: "Full Stack Developer · Websites, systems and APIs",
            hero_title_prefix: "I turn business ideas into",
            hero_aria: "I turn business ideas into professional websites",
            hero_text: "From planning to launch: interface, back-end, database, integrations and performance combined in a bespoke solution.",
            btn_projects: "Explore my work",
            btn_hire: "Share my project",
            btn_explore: "Explore project",
            hero_trust: "Direct communication through every stage, from the idea to production delivery.",
            hero_showcase_tag: "Bespoke development",
            hero_showcase_note: "No generic templates",
            hero_showcase_stack: "Organized code",
            stat_years: "Years building solutions",
            stat_projects: "Projects developed",
            stat_vanilla: "Vanilla focused",
            stat_speed: "PageSpeed on an audited project",
            about_badge: "Behind the work",
            about_title: "End-to-end vision, organized code and <span>one accountable partner.</span>",
            about_text: "I am André Abrão, a Full Stack Developer with more than four years of experience and over 50 projects developed. I work across the entire cycle: planning, interface, front-end, back-end, databases, APIs, integrations, testing, optimization and launch.",
            tag_vanilla: "HTML · CSS · JavaScript",
            tag_js: "PHP · REST APIs",
            tag_vitals: "MySQL",
            tag_git: "Git · GitHub",
            tag_android: "Android · Kotlin",
            social_badge: "Trust",
            social_title: "What changes after a <span>great delivery.</span>",
            test_1_text: "André raised the technical standard of our landing pages and delivered a much faster experience than we had before.",
            test_2_text: "The delivery was organized, faithful to the design and extremely careful about mobile performance.",
            test_3_text: "Moving Detox Orange to a lighter page was a turning point. We reduced loading time and improved the experience of our mobile campaigns.",
            test_3_sub: "Health and wellness brand",
            method_badge: "How it works",
            method_title: "A clear process from the need <span>to production.</span>",
            method_1_h: "Discovery and planning",
            method_1_p: "I analyze the business, audience, goals, features and key flows before defining the solution.",
            method_2_h: "End-to-end development",
            method_2_p: "I build the interface, back-end, database and integrations in stages, with progress updates and validation.",
            method_3_h: "Testing, launch and support",
            method_3_p: "I validate features, responsiveness and performance before configuring the environment and launching the solution.",
            serv_badge: "How I can help",
            serv_title: "From visuals to business logic, <span>a complete delivery.</span>",
            serv_intro: "Planning, interface, back-end, database, integrations, testing and launch handled end to end.",
            serv_lp_title: "Websites and landing pages",
            serv_lp_desc: "Fast, personalized digital experiences that present your brand, services and offers professionally.",
            serv_lp_item1: "Corporate websites and commercial pages",
            serv_lp_item2: "Responsive, mobile-first design",
            serv_lp_item3: "Forms, WhatsApp, maps and social media",
            serv_opt_title: "Web systems and APIs",
            serv_opt_desc: "Functional solutions to organize information, automate processes and connect different services.",
            serv_opt_item1: "PHP, business rules and REST APIs",
            serv_opt_item2: "Records, authentication and dashboards",
            serv_opt_item3: "MySQL and database integrations",
            serv_app_title: "Mobile development",
            serv_app_desc: "Secure, fluid native Android applications that turn your idea into a product.",
            serv_b2b_title: "Performance and launch",
            serv_b2b_desc: "Technical preparation for a fast, stable, discoverable solution that is ready to run in production.",
            serv_b2b_item1: "Optimization and essential technical SEO",
            serv_b2b_item2: "Domain, hosting, DNS and SSL",
            serv_b2b_item3: "Testing, launch and delivery support",
            secondary_capability: "I also provide white-label implementation for agencies and native Android development with Kotlin when a project requires a dedicated mobile solution.",
            lp_concept_badge: "Concept",
            lp_concept_title: "What exactly is a <span>Landing Page</span>?",
            lp_concept_desc: "Unlike a corporate website with many paths, a <strong>Landing Page</strong> focuses the experience on one primary goal: <strong>conversion</strong>.",
            lp_feat_1_h: "🎯 Single focus",
            lp_feat_1_p: "Reduces distractions and guides visitors toward the most important action.",
            lp_feat_2_h: "⚡ Critical speed",
            lp_feat_2_p: "Lightweight pages reduce waiting and improve the experience of visitors coming from ads.",
            lp_feat_3_h: "📱 Mobile first",
            lp_feat_3_p: "A design created first for people who browse and buy on their phones.",
            speed_badge: "Technical proof",
            speed_title: "Speed is part of the <span>sales experience.</span>",
            speed_desc: "A beautiful page loses value when it takes too long to load. Every delivery is designed for phones, real connections and simple maintenance.",
            speed_item1: "Optimized images and resources",
            speed_item2: "Code without unnecessary dependencies",
            speed_item3: "Accessibility and visual stability",
            speed_caption: "Result recorded on an audited project",
            projects_badge: "Selected work",
            projects_title: "Purposeful projects. <span>Bespoke solutions.</span>",
            projects_intro: "Work across different industries, built with a distinct identity, clear navigation, responsive behavior and each business goal in mind.",
            case_goal_label: "Goal",
            case_delivery_label: "Delivery",
            case1_category: "Mentoring and launch",
            case1_title: "A complex offer presented with clarity.",
            case1_desc: "A bold editorial direction to organize the method, positioning and cohort call without overwhelming the decision.",
            case1_goal: "Turn experience into a desirable offer",
            case1_delivery: "Visual strategy and responsive landing page",
            case2_category: "Premium coffee shop",
            case2_title: "A sensory brand translated to digital.",
            case2_desc: "Immersive photography, a calm rhythm and precise navigation communicate origin, care and pause.",
            case2_goal: "Elevate the brand experience and menu",
            case2_delivery: "Brand website with storytelling and responsive menu",
            case3_category: "Beauty and appointments",
            case3_title: "Sophistication that leads to a booking.",
            case3_desc: "An elegant visual language presents services, trust and availability without losing focus on the main action.",
            case3_goal: "Increase perceived value and appointments",
            case3_delivery: "Business website with a booking journey",
            other_projects_badge: "More deliveries",
            other_projects_title: "More bespoke <span>experiences</span>",
            systems_badge: "Interactive systems",
            systems_title: "Beyond websites: <span>products that work.</span>",
            systems_intro: "Five working demonstrations of interfaces, business logic, data, automations and integrations.",
            system1_category: "Dashboard and management",
            system1_desc: "Metrics, filters, charts and recent activity in a responsive dashboard.",
            system2_category: "Authentication and security",
            system2_desc: "Login with validation, error feedback and visual session control.",
            system3_category: "Database and CRUD",
            system3_desc: "Complete product management with search, editing, deletion and browser persistence.",
            system4_category: "Process automation",
            system4_desc: "Automated lead workflow with live execution and event history.",
            system5_category: "REST API and integrations",
            system5_desc: "Interactive console for testing HTTP methods and viewing JSON responses.",
            compact1_category: "Confectionery and digital product",
            compact1_desc: "A launch page with high-impact visual direction.",
            compact2_category: "Healthy food and beverages",
            compact2_desc: "Lightweight catalog, social proof and direct WhatsApp ordering.",
            compact3_category: "Artisan gastronomy",
            compact3_desc: "Italian storytelling, product focus and a memorable presence.",
            compact4_category: "Bistro and fine dining",
            compact4_desc: "A refined atmosphere with menu and reservations in focus.",
            faq_badge: "Before we begin",
            faq_title: "Frequently asked <span>questions</span>",
            faq_q1: "Do you only build websites?",
            faq_a1: "No. I also build web systems, admin dashboards, authentication, REST APIs, database integrations and native Android applications with Kotlin.",
            faq_q2: "How long does a delivery take?",
            faq_a2: "Timing depends on scope and content, but it is agreed before kickoff with clear validation stages.",
            faq_q3: "Will the solution be ready for mobile and launch?",
            faq_a3: "Yes. Delivery includes responsiveness, testing, optimization and support with hosting, domain, DNS and SSL certificates according to scope.",
            faq_q4: "Do you work with agencies?",
            faq_a4: "Yes. I can work white label, preserving the agency's identity and delivering a production-ready implementation.",
            contact_badge: "Your next solution starts with a good conversation",
            contact_title: "Let's turn your need into a solution <span>ready to evolve.</span>",
            contact_text: "Share your goal, required features and current business stage to receive an initial direction.",
            btn_contact_chat: "Share my project",
            tooltip_vanilla: "Responsive front-end development using the core technologies of the web.",
            tooltip_js: "PHP back-end, business rules, integrations and REST API development.",
            tooltip_android: "Native applications developed with Kotlin, the recommended language for Android.",
            tooltip_vitals: "Relational database for records, authentication, dashboards and other features.",
            tooltip_git: "Code versioning and organization with Git and GitHub."
        }
    };

    const typingPhrases = {
        pt: [
            "sites profissionais.",
            "sistemas sob medida.",
            "soluções completas."
        ],
        en: [
            "professional websites.",
            "bespoke web systems.",
            "complete applications."
        ]
    };

    const safeStorage = {
        get(key) {
            try {
                return window.localStorage.getItem(key);
            } catch {
                return null;
            }
        },
        set(key, value) {
            try {
                window.localStorage.setItem(key, value);
            } catch {
                // The interface still works when storage is unavailable.
            }
        }
    };

    function createTypingController(element) {
        let language = "pt";
        let phraseIndex = 0;
        let charIndex = 0;
        let deleting = false;
        let timer = null;

        function tick() {
            const phrase = typingPhrases[language][phraseIndex];
            charIndex += deleting ? -1 : 1;
            element.textContent = phrase.slice(0, Math.max(0, charIndex));

            let delay = deleting ? 32 : 80;
            if (!deleting && charIndex >= phrase.length) {
                deleting = true;
                delay = 1800;
            } else if (deleting && charIndex <= 0) {
                deleting = false;
                phraseIndex = (phraseIndex + 1) % typingPhrases[language].length;
                delay = 260;
            }

            timer = window.setTimeout(tick, delay);
        }

        return {
            setLanguage(nextLanguage) {
                language = nextLanguage;
                phraseIndex = 0;
                charIndex = typingPhrases[language][0].length;
                deleting = true;
                window.clearTimeout(timer);
                element.textContent = typingPhrases[language][0];
                timer = window.setTimeout(tick, 1200);
            }
        };
    }

    function loadProject(containerId, url) {
        const container = document.getElementById(containerId);
        if (!container || !url) return;

        const iframe = document.createElement("iframe");
        iframe.src = url;
        iframe.title = "Demonstração do projeto";
        iframe.loading = "lazy";
        iframe.setAttribute("sandbox", "allow-scripts allow-same-origin allow-forms allow-popups");
        iframe.setAttribute("allow", "fullscreen");
        container.replaceChildren(iframe);
        container.classList.add("loaded");
    }

    document.addEventListener("DOMContentLoaded", () => {
        const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        const finePointer = window.matchMedia("(min-width: 1024px) and (pointer: fine)").matches;
        const langToggle = document.getElementById("lang-toggle");
        const themeToggle = document.getElementById("theme-toggle");
        const navToggle = document.getElementById("nav-toggle");
        const navMenu = document.getElementById("nav-menu");
        const navBar = document.querySelector(".nav-bar");
        const typingElement = document.getElementById("typing-text");
        const typingController = typingElement
            ? createTypingController(typingElement)
            : null;
        let currentLanguage = safeStorage.get("portfolio_language") === "en" ? "en" : "pt";

        function setLanguage(language) {
            const dictionary = translations[language];
            currentLanguage = language;
            document.documentElement.lang = language === "pt" ? "pt-BR" : "en";

            document.querySelectorAll("[data-i18n]").forEach((element) => {
                const key = element.dataset.i18n;
                if (dictionary[key]) element.innerHTML = dictionary[key];
            });

            document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
                const key = element.dataset.i18nAriaLabel;
                if (dictionary[key]) element.setAttribute("aria-label", dictionary[key]);
            });

            document.querySelectorAll("[data-tooltip-key]").forEach((element) => {
                const key = element.dataset.tooltipKey;
                const tooltip = dictionary[key];
                if (!tooltip) return;
                element.dataset.tooltip = tooltip;
                element.tabIndex = 0;
                element.setAttribute("aria-label", `${element.textContent.trim()}: ${tooltip}`);
            });

            if (langToggle) {
                langToggle.textContent = language === "pt" ? "EN" : "PT";
                langToggle.setAttribute(
                    "aria-label",
                    language === "pt" ? "Mudar para inglês" : "Switch to Portuguese"
                );
            }

            typingController?.setLanguage(language);
            safeStorage.set("portfolio_language", language);
        }

        langToggle?.addEventListener("click", () => {
            setLanguage(currentLanguage === "pt" ? "en" : "pt");
        });

        function setTheme(theme) {
            const dark = theme === "dark";
            document.body.classList.toggle("dark", dark);
            themeToggle?.setAttribute("aria-pressed", String(dark));
            const themeColor = document.querySelector('meta[name="theme-color"]');
            themeColor?.setAttribute("content", dark ? "#0c110e" : "#1b3022");
        }

        const savedTheme = safeStorage.get("portfolio_theme");
        const initialTheme = savedTheme || (
            window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
        );
        setTheme(initialTheme);

        themeToggle?.addEventListener("click", () => {
            const nextTheme = document.body.classList.contains("dark") ? "light" : "dark";
            setTheme(nextTheme);
            safeStorage.set("portfolio_theme", nextTheme);
        });

        function closeMobileMenu() {
            navMenu?.classList.remove("open");
            navToggle?.setAttribute("aria-expanded", "false");
        }

        navToggle?.addEventListener("click", () => {
            const open = navMenu?.classList.toggle("open") ?? false;
            navToggle.setAttribute("aria-expanded", String(open));
        });

        navMenu?.querySelectorAll("a").forEach((link) => {
            link.addEventListener("click", closeMobileMenu);
        });

        document.addEventListener("keydown", (event) => {
            if (event.key === "Escape") closeMobileMenu();
        });

        if (!("IntersectionObserver" in window)) {
            document.querySelectorAll(".hidden").forEach((element) => element.classList.add("show"));
        } else {
            const revealObserver = new IntersectionObserver((entries, observer) => {
                let delay = 0;
                entries.forEach((entry) => {
                    if (!entry.isIntersecting) return;
                    window.setTimeout(() => entry.target.classList.add("show"), delay);
                    delay += 90;
                    observer.unobserve(entry.target);
                });
            }, { threshold: 0.1, rootMargin: "0px 0px -40px" });

            document.querySelectorAll(".hidden").forEach((element) => revealObserver.observe(element));
        }

        function updateNav() {
            navBar?.classList.toggle("scrolled", window.scrollY > 50);
        }

        updateNav();
        window.addEventListener("scroll", updateNav, { passive: true });

        if (finePointer) {
            const cursor = document.getElementById("magnetic-cursor");
            const cursorDot = document.getElementById("magnetic-cursor-dot");
            const typingLine = document.querySelector(".hero-typing-line");
            let typingMotionFrame = null;

            if (cursor && cursorDot) {
                document.body.classList.add("custom-cursor-enabled");

                document.addEventListener("pointermove", (event) => {
                    const position = `translate3d(${event.clientX}px, ${event.clientY}px, 0) translate(-50%, -50%)`;
                    cursor.style.transform = position;
                    cursorDot.style.transform = position;
                    document.body.classList.add("cursor-ready");
                }, { passive: true });

                document.documentElement.addEventListener("mouseleave", () => {
                    document.body.classList.remove("cursor-ready", "cursor-active");
                });

                window.addEventListener("blur", () => {
                    document.body.classList.remove("cursor-ready", "cursor-active");
                });
            }

            typingLine?.addEventListener("pointerenter", () => {
                document.body.classList.add("cursor-active");
            });

            typingLine?.addEventListener("pointermove", (event) => {
                window.cancelAnimationFrame(typingMotionFrame);
                typingMotionFrame = window.requestAnimationFrame(() => {
                    const rect = typingLine.getBoundingClientRect();
                    const x = (event.clientX - rect.left - rect.width / 2) / (rect.width / 2 || 1);
                    const y = (event.clientY - rect.top - rect.height / 2) / (rect.height / 2 || 1);
                    const moveX = Math.max(-14, Math.min(14, x * 14));
                    const moveY = Math.max(-8, Math.min(8, y * 8));
                    const rotate = Math.max(-2.5, Math.min(2.5, x * 2.5));
                    typingLine.style.transform = `translate3d(${moveX}px, ${moveY}px, 0) rotate(${rotate}deg) scale(1.015)`;
                });
            });

            typingLine?.addEventListener("pointerleave", () => {
                window.cancelAnimationFrame(typingMotionFrame);
                typingLine.style.transform = "";
                document.body.classList.remove("cursor-active");
            });

            const interactiveElements = document.querySelectorAll(
                "a, button, .service-card, .project-card, .nav-logo, .tag-tech"
            );

            interactiveElements.forEach((element) => {
                element.addEventListener("pointerenter", () => document.body.classList.add("cursor-active"));
                element.addEventListener("pointerleave", () => {
                    document.body.classList.remove("cursor-active");
                    element.style.translate = "";
                });
            });

            if (!reducedMotion) {
                const hero = document.querySelector(".hero");
                const heroTitle = hero?.querySelector("h1");
                let parallaxFrame = null;

                hero?.addEventListener("pointermove", (event) => {
                    window.cancelAnimationFrame(parallaxFrame);
                    parallaxFrame = window.requestAnimationFrame(() => {
                        const x = (event.clientX - window.innerWidth / 2) / 55;
                        const y = (event.clientY - window.innerHeight / 2) / 55;
                        if (heroTitle) heroTitle.style.translate = `${x}px ${y}px`;
                    });
                });

                hero?.addEventListener("pointerleave", () => {
                    if (heroTitle) heroTitle.style.translate = "";
                });

                interactiveElements.forEach((element) => {
                    element.addEventListener("pointermove", (event) => {
                        const rect = element.getBoundingClientRect();
                        const x = (event.clientX - rect.left - rect.width / 2) * 0.08;
                        const y = (event.clientY - rect.top - rect.height / 2) * 0.08;
                        element.style.translate = `${x}px ${y}px`;
                    });
                });
            }
        }

        document.querySelectorAll("[data-project-container][data-project-url]").forEach((button) => {
            button.addEventListener("click", () => {
                loadProject(button.dataset.projectContainer, button.dataset.projectUrl);
            });
        });

        setLanguage(currentLanguage);
    });
})();
