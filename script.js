const bgMusic = document.getElementById('bgMusic');
const pochitaToast = document.getElementById('pochitaToast');
const muteBtn = document.getElementById('muteBtn');
const keepMusicBtn = document.getElementById('keepMusicBtn');

bgMusic.volume = 0.4;

let musicStarted = false;
function startMusic() {
    if (!musicStarted) {
        bgMusic.play().catch(e => console.log("Браузер ждет взаимодействия пользователя..."));
        musicStarted = true;
    }
}

document.body.addEventListener('click', startMusic, { once: true });
document.body.addEventListener('scroll', startMusic, { once: true });

setTimeout(() => {
    pochitaToast.classList.add('show');
}, 8000);

muteBtn.addEventListener('click', () => {
    bgMusic.pause();
    pochitaToast.classList.remove('show'); 
});

keepMusicBtn.addEventListener('click', () => {
    startMusic(); 
    pochitaToast.classList.remove('show'); 
});

const translations = {
    ru: {
        nav_home: "Главная", nav_works: "Работы", nav_about: "Правила",
        hero_title: "Создаю 3D-миры, которые <span>разрывают</span> шаблоны",
        hero_desc: "Привет, я Щавик. Мой мотор — Blender. Специализируюсь на 3D-анимации, динамике и жесткой эстетике.",
        hero_btn: "Смотреть работы", portfolio_title: "Мои проекты",
        
        // Переводы карточек проектов
        card_1_title: "Анимация походки", card_1_desc: "Работа с весом и динамикой",
        card_2_title: "Анимация рук и захват", card_2_desc: "Взаимодействие с объектами",
        card_3_title: "Sci-Fi Робот", card_3_desc: "Механика ползания и риггинг",
        card_4_title: "Сцена и камера", card_4_desc: "Блокинг и пролет камеры",

        about_title: "Условия работы & Заказы",
        rule1_title: "1. Четкое ТЗ:", rule1_desc: "Работаю только при наличии понятного технического задания.",
        rule2_title: "2. Предоплата:", rule2_desc: "Работа начинается только после внесения предоплаты 50%.",
        footer_title: "Связь со мной",
        pochita_msg: "Гав! Выключить музыку?", pochita_yes: "Да, вырубай", pochita_no: "Оставь"
    },
    ua: {
        nav_home: "Головна", nav_works: "Роботи", nav_about: "Правила",
        hero_title: "Створюю 3D-світи, що <span>розривають</span> шаблони",
        hero_desc: "Привіт, я Щавик. Мій мотор — Blender. Спеціалізуюся на 3D-анімації, динаміці та жорсткій естетиці.",
        hero_btn: "Дивитись роботи", portfolio_title: "Мої проєкти",
        
        // Переводы карточек проектов
        card_1_title: "Анімація ходи", card_1_desc: "Робота з вагою та динамікою",
        card_2_title: "Анімація рук та захоплення", card_2_desc: "Взаємодія з об'єктами",
        card_3_title: "Sci-Fi Робот", card_3_desc: "Механіка повзання та ріггінг",
        card_4_title: "Сцена та камера", card_4_desc: "Блокінг та проліт камери",

        about_title: "Умови роботи & Замовлення",
        rule1_title: "1. Чітке ТЗ:", rule1_desc: "Працюю лише за наявності зрозумілого технічного завдання.",
        rule2_title: "2. Передоплата:", rule2_desc: "Робота починається тільки після внесення передоплати 50%.",
        footer_title: "Зв'язок зі мною",
        pochita_msg: "Гав! Вимкнути музику?", pochita_yes: "Так, вимикай", pochita_no: "Залиш"
    },
    en: {
        nav_home: "Home", nav_works: "Works", nav_about: "Rules",
        hero_title: "Creating 3D worlds that <span>tear up</span> templates",
        hero_desc: "Hi, I'm Shavik. My engine is Blender. Specializing in 3D animation, dynamics, and hardcore aesthetics.",
        hero_btn: "View Works", portfolio_title: "My Projects",
        
        // Переводы карточек проектов
        card_1_title: "Walk Cycle Animation", card_1_desc: "Weight shift and dynamic movement",
        card_2_title: "Hand Animation & Grab", card_2_desc: "Object interaction",
        card_3_title: "Sci-Fi Robot", card_3_desc: "Crawl mechanics and rigging",
        card_4_title: "Scene & Camera", card_4_desc: "Blocking and camera fly-through",

        about_title: "Terms of Service",
        rule1_title: "1. Clear Brief:", rule1_desc: "I work only with a clear technical task.",
        rule2_title: "2. Prepayment:", rule2_desc: "Work begins only after a 50% prepayment.",
        footer_title: "Contact Me",
        pochita_msg: "Woof! Turn off the music?", pochita_yes: "Yes, mute it", pochita_no: "Keep it playing"
    }
};

function setLang(lang) {
    const elements = document.querySelectorAll('[data-lang]');
    elements.forEach(el => {
        const key = el.getAttribute('data-lang');
        if (translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });
}