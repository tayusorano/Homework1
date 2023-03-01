const test = [
    {
        "q": "Каков твой стиль? Сила, магия или хитрость?",
        "a": {
            "varv": "Сила! И ничего лишнего.",
            "vols": "Магия лучше других двух, поэтому я выберу ее.",
            "plut": "Я выбираю хитрость. Прямой подход не безопасен.",
            "palad": "Сила и магия! Кто сказал, что маги должны быть хлюпиками?",
            "kold": "Хитрость и магия - вот подход думающего человека.",
            "voin": "Сила и хитрость. Может я крепкий и ловкий, ясно?",
        }
    },
    {
        "q": "Каков наилучший способ улучшить себя и стать великим?",
        "a": {
            "monc": "Трудолюбие и дисциплина.",
            "char": "Быть от природы талантливым в чем-то и просто усиливать этот талант.",
            "druid": "Наблюдение и созерцание окружающего мира. Пусть он вдохновляет и учит меня.",
            "kold": "Окружить себя полезными людьми и использовать их в своих целях.",
            "jrec": "Следовать советам и примеру тех, кто лучше меня.",
            "varv": "Опыт. Пробовать как можно больше разных вещей. Чтобы научиться справляться с болью, нужно получить синяк.",
        }

    },
    {
        "q": "На какой дистанции вы предпочитаете сражаться?",
        "a": {
            "palad": "На близкой. Я - первая линия обороны для моих друзей и воплощение страха для моих врагов.",
            "plut": "Ближе к средней. Я сражаюсь вблизи, но предпочитаю маневрировать на поле боя, а не принимать удары.",
            "monc": "Средняя. Прямо посередине, где я могу вклиниться туда, где я больше всего нужен.",
            "jrec": "От средней до дальней. Я предпочитаю держаться подальше от ближнего боя, но быть достаточно близко, чтобы поддержать своих союзников.",
            "vols": "Дальняя. Лучше перестраховаться, другие лучше переносят удары, чем я.",
            "bard": "Любая. Ставьте меня куда хотите, я эффективен на любой дистанции.",
        }

    },
    {
        "q": "Какое оружие вы предпочитаете?",
        "a": {
            "monc": "Мое тело - мое главное оружие.",
            "plut": "Легкое оружие, такое как кинжалы и короткие мечи - быстро и легко скрывается.",
            "voin": "Универсальное оружие, такое как длинные мечи и копья. Можно использовать разными способами, даже бросать в противника или использовать в паре со щитом или другим оружием.",
            "druid": "Природа дает мне силы справиться с любым врагом.",
            "sled": "Оружие дальнего боя, например, лук, арбалет или гранаты. ",
            "varv": "Тяжелое двуручное оружие. Самое большое, что у тебя есть.",
        }

    },
    {
        "q": "Вы дополняете свое боевое мастерство…",
        "a": {
            "voin": "Продвинутой техникой боя.",
            "char": "Необузданной магией стихий.",
            "kold": "Проклятьями и порчей... Что-то в этом роде.",
            "jrec": "Молитвами и божественными способностями.",
            "varv": "ЯРРОООСТЬ!!!",
            "bard": "Боевое мастерство? Может быть вы имели в виду актерское?",
        }

    },
    {
        "q": "Что является лучшим источником силы?",
        "a": {
            "char": "Наследие моей крови. Этого не отнять.",
            "sled": "Активный ум и наблюдательность. Стремление к изучению противника и способность предугадывать его действия являются ключевыми факторами.",
            "palad": "Непоколебимый дух. Способность придерживаться своих убеждений и не сдаваться перед лицом трудностей - вот что делает человека великим.",
            "vols": "Магия арканов. Овладейте арканой, и сама ткань вселенной согнется под вашими пальцами.",
            "kold": "Боги, духи, демоны... силы, превосходящие возможности простых смертных, хранящиеся в тайне существами, обладающими огромной властью.",
            "druid": "Природа. Власть дать дыхание жизни и отнять его. Это жестокость и доброта, огонь и вода. Природа - это все.",
        }

    },
    {
        "q": "Как вы относитесь к животным?",
        "a": {
            "varv": "Вкуснятина.",
            "sled": "Большие звери - достойная добыча.",
            "kold": "Вызывать магических существ для помощи в бою довольно полезно, если вы об этом спрашиваете.",
            "char": "Я никогда не любил животных.",
            "druid": "Мир природы завораживает.",
            "monc": "Нейтрально.",
        }

    },
    {
        "q": "Как много магии вы готовы изучить?",
        "a": {
            "vols": "Я бы посвятил свою жизнь академическому изучению сверхъестественного и тайного.",
            "char": "Я бы посвятил свою жизнь освоению выбранного мной вида магии, но я не думаю, что академическое обучение - это путь к познанию сути магии.",
            "jrec": "Магия таит в себе потенциал огромной силы, но в целом она слишком широка. Я бы сосредоточился на более узкой области магии и овладел ею. ",
            "bard": "Магия должна быть важной частью моих навыков, но я не могу сосредоточиться исключительно на ней.",
            "plut": "Я бы освоил только то немногое, что действительно сочеталось с остальными моими навыками, в качестве дополнения.",
            "voin": "Мне не нужно полагаться на магию, у меня достаточно собственных навыков.",
        }

    },
    {
        "q": "Насколько вы хороши в социальных ситуациях?",
        "a": {
            "bard": "Отлично! Я легко лавирую в социальных сетях, и у людей обычно очень быстро складывается мнение обо мне.",
            "palad": "Справляюсь. Я не самый популярный человек, но у меня есть определенный магнетизм.",
            "jrec": "Среднее. Больше сказать нечего.",
            "sled": "Я по натуре одиночка, и это отталкивает некоторых людей.",
            "druid": "Животные любят меня! О, вы имеете в виду с людьми…",
            "monc": "Не очень хорошо. Я либо неловкий, либо могу показаться резким.",
        }

    },
    {
        "q": "Что бы вы назвали своим главным достоинством?",
        "a": {
            "voin": "Сила. Я очень силен физически.",
            "plut": "Ловкость. Я шустрый, проворный и точный.",
            "palad": "Телосложение. Я очень крепкий и всегда здоров.",
            "vols": "Интеллект. Я обладаю стремлением к обучению, способностью к получению большого количества знаний и развитым логическим мышлением.",
            "sled": "Мудрость. Я восприимчив и проницателен. Мало что ускользает от моего внимания, и все вещи являются частью общей картины.",
            "bard": "Харизма. Я симпатичен и/или обладаю волевой, уверенной в себе личностью.",
        }

    },
];