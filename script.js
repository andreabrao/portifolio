(() => {
    "use strict";

    const translations = {
        pt: {
            nav_aria: "Navegação principal",
            hero_aria: "Interfaces com performance",
            nav_exp: "Experiência",
            nav_services: "Serviços",
            nav_projects: "Projetos",
            nav_contact: "Vamos conversar",
            hero_badge: "4 anos de mercado",
            hero_text: "Desenvolvedor Front-end especializado em transformar protótipos complexos em código elegante e escalável com HTML, CSS e JavaScript puro.",
            btn_projects: "Explorar portfólio",
            btn_hire: "Quero uma página mais rápida",
            btn_explore: "Explorar projeto",
            stat_years: "Anos de mercado",
            stat_projects: "Projetos entregues",
            stat_vanilla: "Foco em Vanilla",
            about_badge: "O especialista",
            about_title: "O que eu posso fazer por <span>você?</span>",
            about_text: "Sou o <strong>André Abrão</strong>, desenvolvedor focado em performance extrema e estética minimalista. Através do meu estúdio, ajudo negócios a crescer com código limpo e interfaces que carregam rapidamente.",
            tag_vanilla: "HTML5 / CSS3 Vanilla",
            tag_js: "JavaScript puro",
            tag_android: "Android / Kotlin",
            tag_vitals: "Web Vitals",
            social_badge: "Feedback",
            social_title: "Resultados de quem <span>confia</span>",
            test_1_text: "O André elevou o nível técnico das nossas landing pages. O foco em código Vanilla trouxe uma velocidade que nunca tínhamos alcançado com frameworks.",
            test_2_text: "Excelente profissional. A entrega do código é extremamente limpa e a performance no Google PageSpeed chegou aos 100 pontos.",
            test_3_text: "A transição para o código Vanilla na Detox Orange foi um divisor de águas. Reduzimos o tempo de carregamento e melhoramos a experiência das campanhas mobile.",
            test_3_sub: "Marca de saúde e bem-estar",
            method_badge: "Processo",
            method_title: "Processo <span>artesanal</span>",
            method_1_h: "Análise estrutural",
            method_1_p: "Estudo do protótipo com foco em acessibilidade, conteúdo e semântica.",
            method_2_h: "Desenvolvimento atômico",
            method_2_p: "Construção com tecnologias nativas da web e código fácil de manter.",
            method_3_h: "Otimização contínua",
            method_3_p: "Ajustes de carregamento, estabilidade visual e experiência real do usuário.",
            serv_badge: "Especialidades",
            serv_title: "Soluções <span>digitais</span>",
            serv_lp_title: "Landing Pages premium",
            serv_lp_desc: "Páginas focadas em conversão, carregamento rápido e uma mensagem comercial clara.",
            serv_app_title: "Desenvolvimento mobile",
            serv_app_desc: "Aplicativos Android nativos, seguros e fluidos para transformar sua ideia em produto.",
            serv_b2b_title: "White label para agências",
            serv_b2b_desc: "Sua agência cuida do relacionamento; eu entrego uma implementação confiável e performática.",
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
            speed_title: "Velocidade <span>incomparável</span>",
            projects_badge: "Curadoria",
            projects_title: "Projetos de <span>impacto</span>",
            faq_badge: "Dúvidas",
            faq_title: "Perguntas <span>frequentes</span>",
            faq_q1: "Qual é a vantagem do código Vanilla?",
            faq_a1: "Sites sem dependências pesadas podem carregar mais rápido, custam menos para manter e oferecem controle preciso sobre cada interação.",
            faq_q2: "Você entrega o design ou apenas o código?",
            faq_a2: "Atuo nas duas frentes: posso transformar um protótipo em código ou criar a interface do zero para o seu público-alvo.",
            faq_q3: "Como funciona o suporte pós-entrega?",
            faq_a3: "Ofereço acompanhamento para manter a performance estável e suporte técnico para os ajustes previstos no projeto.",
            contact_title: "Vamos cultivar o seu próximo <span>sucesso</span>?",
            btn_contact_chat: "Iniciar conversa",
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
            nav_contact: "Let's talk",
            hero_badge: "4 years in business",
            hero_text: "Front-end developer specialized in turning complex prototypes into elegant, scalable code with native HTML, CSS and JavaScript.",
            btn_projects: "Explore portfolio",
            btn_hire: "I want a faster website",
            btn_explore: "Explore project",
            stat_years: "Years in business",
            stat_projects: "Projects delivered",
            stat_vanilla: "Vanilla focused",
            about_badge: "The specialist",
            about_title: "What can I do for <span>you?</span>",
            about_text: "I am <strong>André Abrão</strong>, a developer focused on extreme performance and minimalist aesthetics. Through my studio, I help businesses grow with clean code and fast-loading interfaces.",
            tag_vanilla: "Vanilla HTML5 / CSS3",
            tag_js: "Vanilla JavaScript",
            tag_android: "Android / Kotlin",
            tag_vitals: "Web Vitals",
            social_badge: "Feedback",
            social_title: "Results from those who <span>trust</span>",
            test_1_text: "André raised the technical standard of our landing pages. His focus on Vanilla code delivered a level of speed we had never reached with frameworks.",
            test_2_text: "An outstanding professional. The delivered code is extremely clean, and the Google PageSpeed score reached 100 points.",
            test_3_text: "Moving Detox Orange to Vanilla code was a turning point. We reduced loading time and improved the experience of our mobile campaigns.",
            test_3_sub: "Health and wellness brand",
            method_badge: "Process",
            method_title: "A <span>handcrafted</span> process",
            method_1_h: "Structural analysis",
            method_1_p: "A careful study of the prototype, focused on accessibility, content and semantics.",
            method_2_h: "Atomic development",
            method_2_p: "Built with native web technologies and code that remains easy to maintain.",
            method_3_h: "Continuous optimization",
            method_3_p: "Adjustments for loading, visual stability and real user experience.",
            serv_badge: "Specialties",
            serv_title: "Digital <span>solutions</span>",
            serv_lp_title: "Premium landing pages",
            serv_lp_desc: "Pages focused on conversion, fast loading and a clear commercial message.",
            serv_app_title: "Mobile development",
            serv_app_desc: "Secure, fluid native Android applications that turn your idea into a product.",
            serv_b2b_title: "White label for agencies",
            serv_b2b_desc: "Your agency manages the relationship; I deliver a reliable, high-performance implementation.",
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
            speed_title: "Unmatched <span>speed</span>",
            projects_badge: "Curation",
            projects_title: "High-impact <span>projects</span>",
            faq_badge: "Questions",
            faq_title: "Frequently asked <span>questions</span>",
            faq_q1: "What is the advantage of Vanilla code?",
            faq_a1: "Sites without heavy dependencies can load faster, cost less to maintain and offer precise control over every interaction.",
            faq_q2: "Do you deliver the design or only the code?",
            faq_a2: "I handle both: I can turn a prototype into code or design the interface from scratch for your target audience.",
            faq_q3: "How does post-delivery support work?",
            faq_a3: "I provide follow-up support to keep performance stable and handle the technical adjustments included in the project.",
            contact_title: "Let's grow your next <span>success</span>?",
            btn_contact_chat: "Start a conversation",
            tooltip_vanilla: "Core web technologies used without interface frameworks or libraries.",
            tooltip_js: "Native JavaScript with high performance and direct control over interactions.",
            tooltip_android: "Native applications developed with Kotlin, the recommended language for Android.",
            tooltip_vitals: "Metrics that measure speed, responsiveness and visual stability in real user experiences."
        }
    };

    const typingPhrases = {
        pt: [
            "com Performance.",
            "Instantâneas.",
            "feitas com IA.",
            "Ultrarrápidas.",
            "com Código Puro.",
            "que Convertem."
        ],
        en: [
            "with Performance.",
            "Instantaneous.",
            "AI-powered.",
            "Ultra-fast.",
            "with Pure Code.",
            "that Convert."
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

    function createTypingController(element, reducedMotion) {
        let language = "pt";
        let phraseIndex = 0;
        let charIndex = 0;
        let deleting = false;
        let timer = null;

        function renderStaticPhrase() {
            element.textContent = typingPhrases[language][0];
        }

        function tick() {
            const phrase = typingPhrases[language][phraseIndex];
            charIndex += deleting ? -1 : 1;
            element.textContent = phrase.slice(0, Math.max(0, charIndex));

            let delay = deleting ? 40 : 105;
            if (!deleting && charIndex >= phrase.length) {
                deleting = true;
                delay = 2200;
            } else if (deleting && charIndex <= 0) {
                deleting = false;
                phraseIndex = (phraseIndex + 1) % typingPhrases[language].length;
                delay = 500;
            }

            timer = window.setTimeout(tick, delay);
        }

        return {
            setLanguage(nextLanguage) {
                language = nextLanguage;
                phraseIndex = 0;
                charIndex = 0;
                deleting = false;
                window.clearTimeout(timer);

                if (reducedMotion) {
                    renderStaticPhrase();
                } else {
                    tick();
                }
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
        const reducedMotion = false;
        const finePointer = window.matchMedia("(min-width: 1024px) and (pointer: fine)").matches;
        const langToggle = document.getElementById("lang-toggle");
        const themeToggle = document.getElementById("theme-toggle");
        const navToggle = document.getElementById("nav-toggle");
        const navMenu = document.getElementById("nav-menu");
        const navBar = document.querySelector(".nav-bar");
        const typingElement = document.getElementById("typing-text");
        const typingController = typingElement
            ? createTypingController(typingElement, reducedMotion)
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

        if (reducedMotion || !("IntersectionObserver" in window)) {
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

        if (finePointer && !reducedMotion) {
            const hero = document.querySelector(".hero");
            const heroTitle = hero?.querySelector("h1");
            const heroImage = hero?.querySelector(".hero-image-wrapper");
            let parallaxFrame = null;

            hero?.addEventListener("mousemove", (event) => {
                window.cancelAnimationFrame(parallaxFrame);
                parallaxFrame = window.requestAnimationFrame(() => {
                    const x = (event.clientX - window.innerWidth / 2) / 55;
                    const y = (event.clientY - window.innerHeight / 2) / 55;
                    if (heroTitle) heroTitle.style.translate = `${x}px ${y}px`;
                    if (heroImage) heroImage.style.translate = `${-x * 0.45}px ${-y * 0.45}px`;
                });
            });

            hero?.addEventListener("mouseleave", () => {
                if (heroTitle) heroTitle.style.translate = "";
                if (heroImage) heroImage.style.translate = "";
            });

            const cursor = document.getElementById("magnetic-cursor");
            const cursorDot = document.getElementById("magnetic-cursor-dot");

            document.addEventListener("mousemove", (event) => {
                if (cursor) {
                    cursor.style.left = `${event.clientX}px`;
                    cursor.style.top = `${event.clientY}px`;
                }
                if (cursorDot) {
                    cursorDot.style.left = `${event.clientX}px`;
                    cursorDot.style.top = `${event.clientY}px`;
                }
            });

            document.querySelectorAll("a, button, .service-card, .project-card, .nav-logo").forEach((element) => {
                element.addEventListener("mouseenter", () => document.body.classList.add("cursor-active"));
                element.addEventListener("mouseleave", () => {
                    document.body.classList.remove("cursor-active");
                    element.style.translate = "";
                });
                element.addEventListener("mousemove", (event) => {
                    const rect = element.getBoundingClientRect();
                    const x = (event.clientX - rect.left - rect.width / 2) * 0.08;
                    const y = (event.clientY - rect.top - rect.height / 2) * 0.08;
                    element.style.translate = `${x}px ${y}px`;
                });
            });
        }

        document.querySelectorAll("[data-project-container][data-project-url]").forEach((button) => {
            button.addEventListener("click", () => {
                loadProject(button.dataset.projectContainer, button.dataset.projectUrl);
            });
        });

        setLanguage(currentLanguage);
    });
})();
