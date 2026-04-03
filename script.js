// --- ЛОГИКА МУЗЫКИ И ПОЧИТЫ ---
const bgMusic = document.getElementById('bgMusic');
const pochitaToast = document.getElementById('pochitaToast');
const muteBtn = document.getElementById('muteBtn');
const keepMusicBtn = document.getElementById('keepMusicBtn');

// Устанавливаем громкость (чтобы по ушам не било)
bgMusic.volume = 0.4;

// Пытаемся запустить музыку сразу. Если браузер блочит — запустим по первому клику.
let musicStarted = false;
function startMusic() {
    if (!musicStarted) {
        bgMusic.play().catch(e => console.log("Браузер ждет взаимодействия пользователя..."));
        musicStarted = true;
    }
}

// Запуск по клику/скроллу
document.body.addEventListener('click', startMusic, { once: true });
document.body.addEventListener('scroll', startMusic, { once: true });

// Через 4 секунды после открытия сайта показываем Почиту
setTimeout(() => {
    pochitaToast.classList.add('show');
}, 4000);

// Кнопка "Вырубай"
muteBtn.addEventListener('click', () => {
    bgMusic.pause();
    pochitaToast.classList.remove('show'); // Прячем Почиту
});

// Кнопка "Оставь"
keepMusicBtn.addEventListener('click', () => {
    startMusic(); // Точно запускаем музыку, если еще не играла
    pochitaToast.classList.remove('show'); // Прячем Почиту
});

// --- ПЕРЕВОДЫ ---
const translations = {
    ru: {
        nav_home: "Главная", nav_works: "Работы", nav_about: "Правила",
        hero_title: "Создаю 3D-миры, которые <span>разрывают</span> шаблоны",
        hero_desc: "Привет, я Щавик. Мой мотор — Blender. Специализируюсь на 3D-анимации, динамике и жесткой эстетике.",
        hero_btn: "Смотреть работы", portfolio_title: "Мои проекты",
        card_1_title: "Анимация персонажа", card_desc: "Blender / Cycles",
        about_title: "Условия работы & Заказы",
        rule1_title: "1. Четкое ТЗ:", rule1_desc: "Работаю только при наличии понятного технического задания.",
        rule2_title: "2. Предоплата:", rule2_desc: "Работа начинается только после внесения предоплаты 50%.",
        footer_title: "Связь со мной",
        
        // Переводы Почиты
        pochita_msg: "Гав! Выключить музыку?",
        pochita_yes: "Да, вырубай",
        pochita_no: "Оставь"
    },
    ua: {
        nav_home: "Головна", nav_works: "Роботи", nav_about: "Правила",
        hero_title: "Створюю 3D-світи, що <span>розривають</span> шаблони",
        hero_desc: "Привіт, я Щавик. Мій мотор — Blender. Спеціалізуюся на 3D-анімації, динаміці та жорсткій естетиці.",
        hero_btn: "Дивитись роботи", portfolio_title: "Мої проєкти",
        card_1_title: "Анімація персонажа", card_desc: "Blender / Cycles",
        about_title: "Умови роботи & Замовлення",
        rule1_title: "1. Чітке ТЗ:", rule1_desc: "Працюю лише за наявності зрозумілого технічного завдання.",
        rule2_title: "2. Передоплата:", rule2_desc: "Робота починається тільки після внесення передоплати 50%.",
        footer_title: "Зв'язок зі мною",
        
        // Переводы Почиты
        pochita_msg: "Гав! Вимкнути музику?",
        pochita_yes: "Так, вимикай",
        pochita_no: "Залиш"
    },
    en: {
        nav_home: "Home", nav_works: "Works", nav_about: "Rules",
        hero_title: "Creating 3D worlds that <span>tear up</span> templates",
        hero_desc: "Hi, I'm Shavik. My engine is Blender. Specializing in 3D animation, dynamics, and hardcore aesthetics.",
        hero_btn: "View Works", portfolio_title: "My Projects",
        card_1_title: "Character Animation", card_desc: "Blender / Cycles",
        about_title: "Terms of Service",
        rule1_title: "1. Clear Brief:", rule1_desc: "I work only with a clear technical task.",
        rule2_title: "2. Prepayment:", rule2_desc: "Work begins only after a 50% prepayment.",
        footer_title: "Contact Me",
        
        // Переводы Почиты
        pochita_msg: "Woof! Turn off the music?",
        pochita_yes: "Yes, mute it",
        pochita_no: "Keep it playing"
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