// Dados do Cardápio
const menuData = [
    { nome: "Steak Tartare", categoria: "pratos", preco: "R$ 68", desc: "Carne bovina Angus picada na faca." },
    { nome: "Confit de Canard", categoria: "pratos", preco: "R$ 94", desc: "Pato confitado com purê de baroa." },
    { nome: "Negroni", categoria: "bebidas", preco: "R$ 38", desc: "Gin, Vermute e Campari." },
    { nome: "Petit Gâteau", categoria: "sobremesas", preco: "R$ 32", desc: "Chocolate 70% e sorvete Bourbon." }
];

// Preloader
window.addEventListener('load', () => {
    document.getElementById('preloader').style.opacity = '0';
    setTimeout(() => document.getElementById('preloader').style.display = 'none', 1000);
});

// Cursor Customizado
const cursor = document.getElementById('custom-cursor');
document.addEventListener('mousemove', (e) => {
    cursor.style.transform = `translate(${e.clientX - 10}px, ${e.clientY - 10}px)`;
});

// Parallax Mouse
document.querySelector('.hero').addEventListener('mousemove', (e) => {
    const bg = document.querySelector('.hero-bg');
    let x = (window.innerWidth / 2 - e.pageX) / 45;
    let y = (window.innerHeight / 2 - e.pageY) / 45;
    bg.style.transform = `scale(1.1) translate(${x}px, ${y}px)`;
});

// Render Menu
function displayMenu(items) {
    const container = document.getElementById('menu-container');
    container.innerHTML = items.map(item => `
        <div class="menu-item">
            <div>
                <h3>${item.nome}</h3>
                <p style="color: #666; font-size: 0.85rem;">${item.desc}</p>
            </div>
            <span class="price">${item.preco}</span>
        </div>
    `).join('');
}

function filterMenu(categoria, event) {
    const buttons = document.querySelectorAll('.filter-buttons button');
    buttons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');

    const container = document.getElementById('menu-container');
    container.style.opacity = '0';

    setTimeout(() => {
        const filtered = categoria === 'todos' ? menuData : menuData.filter(i => i.categoria === categoria);
        displayMenu(filtered);
        container.style.opacity = '1';
    }, 300);
}

// Inicializar Carrossel Swiper
const swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    autoplay: { delay: 3000 },
    pagination: { el: ".swiper-pagination" },
});

// Scroll Reveal Config
const sr = ScrollReveal({
    origin: 'bottom',
    distance: '60px',
    duration: 1500,
    reset: false
});

sr.reveal('.reveal', { interval: 200 });
displayMenu(menuData);

// === INICIALIZAÇÃO DA GALERIA LIGHTBOX ===
const lightbox = GLightbox({
    touchNavigation: true,
    loop: true,
    autoplayVideos: true,
    descPosition: 'bottom' // Posiciona a descrição na parte inferior
});

// === FUNÇÃO DE FILTRO DA GALERIA ===
function filterGallery(categoria, event) {
    // 1. Atualizar o estado do botão ativo
    const buttons = document.querySelectorAll('#galeria .filter-buttons button');
    buttons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');

    // 2. Selecionar todos os itens da galeria
    const items = document.querySelectorAll('.gallery-item');
    
    // 3. Iterar sobre os itens e aplicar o filtro
    items.forEach(item => {
        item.style.transition = 'all 0.4s ease'; // Garante transição suave

        // Lógica de exibição: 'todos' ou categoria correspondente
        if (categoria === 'todos' || item.classList.contains(categoria)) {
            // Mostrar item
            item.style.display = 'block';
            setTimeout(() => {
                item.style.opacity = '1';
                item.style.transform = 'scale(1) translateY(0)';
            }, 10); // Pequeno delay para o display:block funcionar com a transição
        } else {
            // Esconder item
            item.style.opacity = '0';
            item.style.transform = 'scale(0.8) translateY(20px)';
            setTimeout(() => {
                item.style.display = 'none';
            }, 400); // Aguarda a transição de fade terminar
        }
    });
}