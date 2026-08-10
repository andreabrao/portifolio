(() => {
    "use strict";

    const translations = {
        pt: {
            nav_aria: "Navegação principal",
            hero_aria: "Interfaces com performance",
            nav_exp: "Experiência",
            nav_services: "Serviços",
            nav_projects: "Projetos",
            nav_process: "Processo",
            nav_contact: "Vamos conversar",
            hero_badge: "Landing pages e sites sob medida",
            hero_title_prefix: "Páginas rápidas que transformam",
            hero_aria: "Páginas rápidas que transformam atenção em clientes",
            hero_text: "Design exclusivo, código leve e uma jornada clara para negócios que querem crescer sem parecer iguais aos concorrentes.",
            btn_projects: "Ver projetos e entregas",
            btn_hire: "Solicitar diagnóstico",
            btn_explore: "Explorar projeto",
            hero_trust: "Atendimento direto com quem desenha e desenvolve cada projeto.",
            hero_showcase_tag: "Design autoral",
            hero_showcase_note: "Sem templates genéricos",
            hero_showcase_stack: "Código leve",
            stat_years: "Anos criando para a web",
            stat_projects: "Projetos entregues",
            stat_vanilla: "Foco em Vanilla",
            stat_speed: "PageSpeed em projeto auditado",
            about_badge: "Quem está por trás",
            about_title: "Estratégia, design e código com <span>um único responsável.</span>",
            about_text: "Sou André Abrão, desenvolvedor front-end especializado em experiências rápidas e autorais. Você conversa diretamente comigo do diagnóstico à publicação, sem repasses e sem perder a intenção do projeto no caminho.",
            tag_vanilla: "HTML5 / CSS3 Vanilla",
            tag_js: "JavaScript puro",
            tag_android: "Android / Kotlin",
            tag_vitals: "Web Vitals",
            social_badge: "Confiança",
            social_title: "O que muda depois de uma <span>boa entrega.</span>",
            test_1_text: "O André elevou o nível técnico das nossas landing pages e entregou uma experiência muito mais rápida do que tínhamos anteriormente.",
            test_2_text: "A entrega foi organizada, fiel ao projeto e extremamente cuidadosa com performance em dispositivos móveis.",
            test_3_text: "A transição para uma página mais leve na Detox Orange foi um divisor de águas. Reduzimos o tempo de carregamento e melhoramos a experiência das campanhas mobile.",
            test_3_sub: "Marca de saúde e bem-estar",
            method_badge: "Como funciona",
            method_title: "Um processo claro do diagnóstico <span>à entrega.</span>",
            method_1_h: "Diagnóstico e direção",
            method_1_p: "Entendo o público, a oferta e a ação mais importante antes de desenhar qualquer tela.",
            method_2_h: "Design e desenvolvimento",
            method_2_p: "Conteúdo, interface e código são construídos juntos para manter a estratégia intacta.",
            method_3_h: "Otimização e publicação",
            method_3_p: "Reviso responsividade, velocidade e interações antes de colocar a experiência no ar.",
            serv_badge: "Como posso ajudar",
            serv_title: "Uma entrega completa, <span>sem ruído.</span>",
            serv_intro: "Da primeira conversa à publicação, estratégia, interface e desenvolvimento avançam na mesma direção.",
            serv_lp_title: "Landing pages e sites premium",
            serv_lp_desc: "Para lançamentos, serviços e marcas que precisam comunicar valor e conduzir o visitante até a ação.",
            serv_lp_item1: "Estratégia de conteúdo",
            serv_lp_item2: "Design responsivo",
            serv_lp_item3: "Integração com WhatsApp e formulários",
            serv_opt_title: "Otimização e reconstrução",
            serv_opt_desc: "Para páginas lentas, confusas ou difíceis de manter que já não acompanham o nível do negócio.",
            serv_opt_item1: "Auditoria de experiência",
            serv_opt_item2: "Melhoria de performance",
            serv_opt_item3: "Refatoração de interface",
            serv_app_title: "Desenvolvimento mobile",
            serv_app_desc: "Aplicativos Android nativos, seguros e fluidos para transformar sua ideia em produto.",
            serv_b2b_title: "White label para agências",
            serv_b2b_desc: "Para agências e designers que precisam de um parceiro confiável para transformar protótipos em código.",
            serv_b2b_item1: "Fidelidade ao design",
            serv_b2b_item2: "Código organizado",
            serv_b2b_item3: "Entrega pronta para produção",
            secondary_capability: "Também desenvolvo experiências Android nativas com Kotlin para projetos que exigem uma solução mobile dedicada.",
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
            projects_title: "Design com intenção. <span>Entrega com contexto.</span>",
            projects_intro: "Cada projeto começa com uma necessidade de negócio e termina em uma experiência clara, responsiva e pronta para conduzir o visitante.",
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
            faq_q1: "Você cria o design ou apenas desenvolve?",
            faq_a1: "Posso conduzir o projeto completo, da estratégia visual ao código, ou implementar um protótipo já aprovado pela sua equipe.",
            faq_q2: "Quanto tempo leva uma entrega?",
            faq_a2: "O prazo depende do escopo e do conteúdo, mas é definido antes do início com etapas claras de validação.",
            faq_q3: "A página fica pronta para celular e publicação?",
            faq_a3: "Sim. A entrega inclui responsividade, otimização, configuração técnica prevista no escopo e acompanhamento na publicação.",
            faq_q4: "Você trabalha com agências?",
            faq_a4: "Sim. Posso atuar em white label, preservando a identidade da agência e entregando a implementação pronta para produção.",
            contact_badge: "Seu próximo projeto começa com clareza",
            contact_title: "Vamos transformar sua ideia em uma experiência que <span>merece ser lembrada?</span>",
            contact_text: "Conte o momento do seu negócio e receba uma direção inicial para o projeto.",
            btn_contact_chat: "Conversar sobre meu projeto",
            tooltip_vanilla: "Tecnologias fundamentais da web usadas sem frameworks ou bibliotecas de interface.",
            tooltip_js: "JavaScript nativo, com alto desempenho e controle direto sobre as interações.",
            tooltip_android: "Aplicativos nativos desenvolvidos com Kotlin, a linguagem recomendada para Android.",
            tooltip_vitals: "Métricas que medem velocidade, resposta e estabilidade visual na experiência real do usuário."
        },
        en: {
            nav_aria: "Primary navigation",
            hero_aria: "High-performance interfaces",
            nav_exp: "Experience",
            nav_services: "Services",
            nav_projects: "Projects",
            nav_process: "Process",
            nav_contact: "Let's talk",
            hero_badge: "Bespoke landing pages and websites",
            hero_title_prefix: "Fast websites that turn",
            hero_aria: "Fast websites that turn attention into customers",
            hero_text: "Distinctive design, lightweight code and a clear journey for businesses that want to grow without looking like everyone else.",
            btn_projects: "See projects and deliverables",
            btn_hire: "Request a diagnosis",
            btn_explore: "Explore project",
            hero_trust: "Work directly with the person who designs and develops every project.",
            hero_showcase_tag: "Original design",
            hero_showcase_note: "No generic templates",
            hero_showcase_stack: "Lightweight code",
            stat_years: "Years creating for the web",
            stat_projects: "Projects delivered",
            stat_vanilla: "Vanilla focused",
            stat_speed: "PageSpeed on an audited project",
            about_badge: "Behind the work",
            about_title: "Strategy, design and code with <span>one accountable partner.</span>",
            about_text: "I am André Abrão, a front-end developer specialized in fast, distinctive experiences. You work directly with me from diagnosis to launch, without handoffs or losing the project's original intent.",
            tag_vanilla: "Vanilla HTML5 / CSS3",
            tag_js: "Vanilla JavaScript",
            tag_android: "Android / Kotlin",
            tag_vitals: "Web Vitals",
            social_badge: "Trust",
            social_title: "What changes after a <span>great delivery.</span>",
            test_1_text: "André raised the technical standard of our landing pages and delivered a much faster experience than we had before.",
            test_2_text: "The delivery was organized, faithful to the design and extremely careful about mobile performance.",
            test_3_text: "Moving Detox Orange to a lighter page was a turning point. We reduced loading time and improved the experience of our mobile campaigns.",
            test_3_sub: "Health and wellness brand",
            method_badge: "How it works",
            method_title: "A clear process from diagnosis <span>to delivery.</span>",
            method_1_h: "Diagnosis and direction",
            method_1_p: "I understand the audience, offer and most important action before designing any screen.",
            method_2_h: "Design and development",
            method_2_p: "Content, interface and code are built together to keep the strategy intact.",
            method_3_h: "Optimization and launch",
            method_3_p: "I review responsiveness, speed and interactions before putting the experience live.",
            serv_badge: "How I can help",
            serv_title: "A complete delivery, <span>without noise.</span>",
            serv_intro: "From the first conversation to launch, strategy, interface and development move in the same direction.",
            serv_lp_title: "Premium landing pages and websites",
            serv_lp_desc: "For launches, services and brands that need to communicate value and guide visitors toward action.",
            serv_lp_item1: "Content strategy",
            serv_lp_item2: "Responsive design",
            serv_lp_item3: "WhatsApp and form integration",
            serv_opt_title: "Optimization and rebuilds",
            serv_opt_desc: "For slow, confusing or hard-to-maintain pages that no longer match the quality of the business.",
            serv_opt_item1: "Experience audit",
            serv_opt_item2: "Performance improvements",
            serv_opt_item3: "Interface refactoring",
            serv_app_title: "Mobile development",
            serv_app_desc: "Secure, fluid native Android applications that turn your idea into a product.",
            serv_b2b_title: "White label for agencies",
            serv_b2b_desc: "For agencies and designers that need a reliable partner to turn prototypes into production code.",
            serv_b2b_item1: "Design fidelity",
            serv_b2b_item2: "Organized code",
            serv_b2b_item3: "Production-ready delivery",
            secondary_capability: "I also build native Android experiences with Kotlin for projects that require a dedicated mobile solution.",
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
            projects_title: "Design with intention. <span>Delivery with context.</span>",
            projects_intro: "Every project begins with a business need and ends in a clear, responsive experience built to guide visitors forward.",
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
            faq_q1: "Do you create the design or only develop it?",
            faq_a1: "I can lead the complete project from visual strategy to code, or implement a prototype already approved by your team.",
            faq_q2: "How long does a delivery take?",
            faq_a2: "Timing depends on scope and content, but it is agreed before kickoff with clear validation stages.",
            faq_q3: "Will the page be ready for mobile and launch?",
            faq_a3: "Yes. Delivery includes responsiveness, optimization, the technical setup included in scope and launch support.",
            faq_q4: "Do you work with agencies?",
            faq_a4: "Yes. I can work white label, preserving the agency's identity and delivering a production-ready implementation.",
            contact_badge: "Your next project starts with clarity",
            contact_title: "Let's turn your idea into an experience <span>worth remembering.</span>",
            contact_text: "Tell me where your business is today and receive an initial direction for the project.",
            btn_contact_chat: "Discuss my project",
            tooltip_vanilla: "Core web technologies used without interface frameworks or libraries.",
            tooltip_js: "Native JavaScript with high performance and direct control over interactions.",
            tooltip_android: "Native applications developed with Kotlin, the recommended language for Android.",
            tooltip_vitals: "Metrics that measure speed, responsiveness and visual stability in real user experiences."
        }
    };

    const typingPhrases = {
        pt: [
            "atenção em clientes.",
            "visitas em clientes.",
            "ideias em resultados."
        ],
        en: [
            "attention into customers.",
            "visits into customers.",
            "ideas into results."
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
