langs = ['ru', 'en-usa', 'de', 'kz']
langsData = {
    'ru': {
        "lang": "Россия",

        "ph_your_name": "Ваше имя",
        "ph_your_phone": "Ваш номер",
        "ph_payment_type": "Модель оплаты",
        "ph_comment": "Комментарий..",
        "leave_request": "ОСТАВИТЬ ЗАЯВКУ",


        "news": "Новости",
        "search": "Поиск",
        "partners": "Партнеры",
        "contact": "Связаться",

        "main_text_1": "Выставка <br> <span>Retro</span> Cars - <br>2022",
        "main_text_2": "Машины <br> <span>Retro</span> из <br>30-90 годов",
        "main_text_3": "Топ 1 <br> <span>Retro</span> выставка<br>в мире",
        "about_us": "О НАС",
        "more": "ПОДРОБНЕЕ",
        "ph_search": "Поиск",
        "news_text": "Свежие <span>новости</span>",
        "more2": "Подробнее",
        "partners_text": "Наши <span>партнеры</span>",
        "buy_ticket": "КУПИТЬ БИЛЕТ",
        "contact_form": "Обратная связь",
    },
    'en-usa': {
        "lang": "USA",
       
        "ph_your_name": "Your name",
        "ph_your_phone": "Your Number",
        "ph_payment_type": "Payment model",
        "ph_comment": "Comment.",
        "leave_request": "Leave a request",


        "news": "News",
        "search": "Search",
        "partners": "Partners",
        "contact": "Contact",

        "main_text_1": "Exhibition <br> <span>Retro</span> Cars - <br>2022",
        "main_text_2": "<br> <span>Retro</span> cars from <br>30-90s",
        "main_text_3": "Top 1 <br> <span>Retro</span> exhibition<br>in the world",
        "about_us": "ABOUT US",
        "more": "MORE",
        "ph_search": "Search",
        "news_text": "Latest <span>news</span>",
        "more2": "More",
        "partners_text": "Our <span>partners</span>",
        "buy_ticket": "BUY A TICKET",
        "contact_form": "Feedback",
    },
    'de': {
        
        "lang": "Deutschland",

        "ph_your_name": "Ihr Name",
        "ph_your_phone": "Ihre Nummer",
        "ph_payment_type": "Zahlungsmodell",
        "ph_comment": "Kommentar.",
        "leave_request": "Eine Anfrage hinterlassen",




        "news": "Neuigkeiten",
        "search": "Suche",
        "partners": "Partner",
        "contact": "Kontakt",

        "main_text_1": "Ausstellung <br> <span>Retro</span> Autos - <br>2022",
        "main_text_2": "<span>Retro</span> Autos <br>aus den 30er - <br>bis 90er Jahren",
        "main_text_3": "Top 1 <br> <span>Retro</span> Ausstellung<br>der Welt",
        "about_us": "ÜBER UNS",
        "more": "MEHR",
        "ph_search": "Suchen",
        "news_text": "Neueste <span>Nachrichten</span>",
        "more2": "Mehr",
        "partners_text": "Unsere <span>Partner</span>",
        "buy_ticket": "EIN TICKET KAUFEN",
        "contact_form": "Feedback",
    },
    'kz': {
        "lang": "Казахстан",

        "ph_your_name": "Сіздің атыңыз",
        "ph_your_phone": "Сіздің нөміріңіз",
        "ph_payment_type": "Төлем үлгісі",
        "ph_comment": "Түсініктеме..",
        "leave_request": "Сұраныс қалдыру",





        "news": "Жаңалық",
        "search": "Іздеу",
        "partners": "Әріптестер",
        "contact": "Байланыс",

        "main_text_1": "Көрме <br> <span>Ретро</span> Көліктер - <br>2022",
        "main_text_2": "<br> <span>Ретро</span> <br>30-90 жылдардағы <br>көліктер",
        "main_text_3": "Әлемдегі ең үздік 1 <br> <span>Ретро</span> көрме<br>",
        "about_us": "БІЗ ТУРАЛЫ",
        "more": "КӨБІРЕК",
        "ph_search": "Іздеу",
        "news_text": "Соңғы <span>жаңалық</span>",
        "more2": "Көбірек",
        "partners_text": "Біздің <span>серіктестер</span>",
        "buy_ticket": "БИЛЕТ САТЫП АЛ",
        "contact_form": "Кері байланыс",

    },
}


var language;
function getLanguage() {
    (localStorage.getItem('language') == null) ? setLanguage('kz') : false;
    language = langsData[localStorage.getItem('language')]
}

function setLanguage(lang) {
    localStorage.setItem('language', lang);
    // var list = document.getElementsByClassName("list-langs");
    // list.forEach(el => {
    //     el.style.display = "none";
    // });
    applyLang();
}


function applyLang() {
    $(document).ready(function () {
        getLanguage();
        //clear langs
        langs.forEach(el => {
            if ($('.selected-lang').hasClass(el)) {
                $('.selected-lang').removeClass(el);
            }
        });
        $('.selected-lang').addClass(localStorage.getItem('language'));
        for (const [key, value] of Object.entries(language)) {
            if (key == 'title') {
                document.title = value;
            } else if (key == 'ph_your_name' || key == 'ph_your_phone'
                || key == 'ph_payment_type' || key == 'ph_comment'
                || key == 'ph_search') {
                document.querySelectorAll(`#${key}`).forEach(el => {
                    el.placeholder = value
                })
            } else if (key == 'main_text') {
                document.getElementById(key).innerHTML = value;
            } else if (!!document.getElementById(`${key}`)) {
                document.querySelectorAll(`#${key}`).forEach(el => {
                    el.innerHTML = value
                })
            }
        }
    });
}
applyLang();