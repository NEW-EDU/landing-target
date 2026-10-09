import type { Lang } from "@/lib/i18n/config";

export type PolicySection = {
  id: string;
  title: string;
  description?: string;
  items?: string[];
  note?: string;
};

export type PolicyContent = {
  title: string;
  intro: string;
  sections: PolicySection[];
};

export type PolicyUiContent = {
  tocLabel: string;
  backLabel: string;
  privacyKeywords: string;
  termsKeywords: string;
};

export const privacyPolicyUz: PolicyContent = {
  title: "Tikoncha Maxfiylik Siyosati",
  intro:
    "Tikoncha loyihasi foydalanuvchilarning shaxsiy hayoti daxlsizligini hurmat qiladi va ma'lumotlar xavfsizligini ta'minlashni o'zining ustuvor vazifasi deb biladi. Ushbu Maxfiylik Siyosati Tikoncha ilovasi va platformasidan foydalanish jarayonida qanday ma'lumotlar yig'ilishi, ulardan qanday foydalanilishi va qanday himoyalanishi haqida ma'lumot beradi.",
  sections: [
    {
      id: "data-collection",
      title: "1. Qanday ma'lumotlar yig'iladi",
      description: "Tikoncha ilovasi quyidagi turdagi ma'lumotlardan foydalanishi mumkin:",
      items: [
        "Ilova funksiyalarini to'g'ri ishlashi uchun zarur bo'lgan texnik ma'lumotlar",
        "Ilovalardan foydalanish bo'yicha umumiy statistika (vaqt va faollik kesimida)",
        "Hududga bog'liq funksiyalarni ta'minlash uchun joylashuvga oid ma'lumotlar",
        "Sozlamalar va cheklovlar bilan bog'liq ma'lumotlar",
      ],
      note: "Tikoncha shaxsiy suhbatlar, xabarlar, media fayllar yoki foydalanuvchi kontentini o'qimaydi va saqlamaydi.",
    },
    {
      id: "data-usage",
      title: "2. Ma'lumotlardan foydalanish maqsadi",
      description: "Yig'ilgan ma'lumotlar quyidagi maqsadlarda ishlatiladi:",
      items: [
        "Ilova funksiyalarini to'g'ri va barqaror ishlashini ta'minlash",
        "Chalg'ituvchi omillardan himoya qilishga yordam berish",
        "Ota-onalarga farzand uchun belgilangan cheklovlar va statistikani qulay ko'rinishda taqdim etish",
        "Xavfsizlik va ilova barqarorligini ta'minlash",
      ],
      note: "Ma'lumotlar foydalanuvchilarni kuzatish yoki baholash maqsadida ishlatilmaydi.",
    },
    {
      id: "parental-control",
      title: "3. Ota-ona nazorati",
      description:
        "Tikoncha ilovasi ota-ona yoki qonuniy vakil roziligi asosida ishlaydi. Barcha muhim sozlamalar va ruxsatlar faqat ota-ona yoki mas'ul shaxs tomonidan boshqariladi. Farzandning hisobdan chiqishi yoki muhim sozlamalarni o'zgartirishga urinishlari haqida ota-onaga xabarnoma yuborilishi mumkin.",
    },
    {
      id: "data-protection",
      title: "4. Ma'lumotlarni saqlash va himoyalash",
      description: "Tikoncha foydalanuvchi ma'lumotlarini:",
      items: [
        "Maxfiy tarzda saqlaydi",
        "Uchinchi shaxslarga sotmaydi va ulashmaydi",
        "Faqat ilova funksiyalari doirasida ishlatadi",
      ],
      note: "Texnik va tashkiliy choralar orqali ma'lumotlarning ruxsatsiz kirish, yo'qotish yoki noto'g'ri ishlatilishining oldi olinadi.",
    },
    {
      id: "third-party",
      title: "5. Uchinchi tomon xizmatlari",
      description:
        "Ilova ayrim funksiyalar uchun uchinchi tomon texnologiyalaridan foydalanishi mumkin (masalan, xatoliklarni aniqlash yoki texnik barqarorlik). Ushbu xizmatlar faqat zarur bo'lgan texnik ma'lumotlardan foydalanadi va ular ham maxfiylik talablariga rioya qiladi.",
    },
    {
      id: "user-rights",
      title: "6. Foydalanuvchi huquqlari",
      description: "Ota-onalar va foydalanuvchilar:",
      items: [
        "Ma'lumotlardan foydalanish haqida ma'lumot olish",
        "Sozlamalarni o'zgartirish yoki cheklash",
        "Hisobni o'chirish yoki ilovadan foydalanishni to'xtatish huquqiga ega",
      ],
    },
    {
      id: "ios-app",
      title: "7. iPhone (iOS) uchun Tikoncha ilovasi",
      description:
        "iPhone'da Tikoncha Apple'ning Ekran vaqti (Screen Time, Family Controls) tizimidan foydalanadi. Qaysi ilova va saytlardan qancha vaqt foydalanilgani iOS tomonidan qurilmaning o'zida qayta ishlanadi — Apple bu ma'lumotni Tikoncha'ga bermaydi va biz har bir ilova bo'yicha foydalanish ma'lumotini olmaymiz. Bundan tashqari:",
      items: [
        "Biz yig'adigan ma'lumotlar: telefon raqami (kirish uchun), ism, yosh, maktab va sinf (ixtiyoriy), profil surati (ixtiyoriy), vazifalar va tangalar, ota-ona belgilagan qoidalar, qurilma ro'yxati va bildirishnoma tokeni.",
        "Ekran vaqti: serverga faqat kunlik umumiy ko'rsatkich (“bugun kamida N daqiqa”) yuboriladi — bog'langan ota-ona ko'rishi uchun.",
        "Joylashuv: faqat joylashuv (maktab hududi) qoidasi yoqilgan bo'lsa ishlatiladi — tanlangan hudud ichida ilovalar yopilishi uchun; oxirgi ma'lum joylashuv bog'langan ota-onaga ko'rsatilishi mumkin. Reklama uchun ishlatilmaydi va sotilmaydi.",
        "Tikonchagram (Telegram): xabarlar qurilma va Telegram serverlari o'rtasida to'g'ridan-to'g'ri, Telegram maxfiylik siyosati asosida almashinadi. Tikoncha serverlari xabarlaringizni va Telegram hisobingiz ma'lumotlarini olmaydi va saqlamaydi; Telegram'ning rasmiy kutubxonasi keshni faqat qurilmada saqlaydi.",
        "Toza (Instagram va YouTube): rasmiy saytlar ilova ichida qisqa videolar lentasisiz ko'rsatiladi. Nimani ko'rganingiz, login va parollaringiz yig'ilmaydi.",
        "Veb himoya: bloklangan saytlar ro'yxati qurilmaning o'zida qo'llaniladi; brauzer tarixi yig'ilmaydi.",
        "Hisobni o'chirish: ilovada — Profil → “Akkauntni o'chirish” (ota-ona PIN kodi o'rnatilgan bo'lsa, u so'raladi) yoki tikoncha.uz/delete sahifasida telefon raqami va SMS kod orqali. Hisob va unga bog'liq ma'lumotlar serverlarimizdan o'chiriladi.",
      ],
      note: "Biz reklama ko'rsatmaymiz, ma'lumotlarni sotmaymiz va foydalanuvchilarni boshqa kompaniyalarning ilova va saytlarida kuzatmaymiz.",
    },
    {
      id: "policy-changes",
      title: "8. Maxfiylik siyosatidagi o'zgarishlar",
      description:
        "Tikoncha ushbu Maxfiylik Siyosatini vaqti-vaqti bilan yangilashi mumkin. O'zgarishlar rasmiy platformalarda e'lon qilinadi va kuchga kirgan kundan boshlab amal qiladi.",
    },
    {
      id: "contact",
      title: "9. Aloqa",
      description:
        "Agar Maxfiylik Siyosati bo'yicha savollaringiz bo'lsa, biz bilan bog'laning: info@tikoncha.uz, +998 97 270 70 07 yoki Telegram: t.me/tikoncha_newedu.",
    },
  ],
};

export const privacyPolicyRu: PolicyContent = {
  title: "Политика конфиденциальности Tikoncha",
  intro:
    "Проект Tikoncha уважает неприкосновенность личной жизни пользователей и считает защиту данных приоритетной задачей. Эта Политика конфиденциальности объясняет, какие данные собираются при использовании приложения и платформы Tikoncha, как они используются и как защищаются.",
  sections: [
    {
      id: "data-collection",
      title: "1. Какие данные мы собираем",
      description: "Приложение Tikoncha может использовать следующие типы данных:",
      items: [
        "Технические данные, необходимые для корректной работы функций приложения",
        "Общая статистика использования приложений (время и активность)",
        "Данные о местоположении для функций, зависящих от региона",
        "Данные, связанные с настройками и ограничениями",
      ],
      note: "Tikoncha не читает и не хранит личные переписки, сообщения, медиафайлы и пользовательский контент.",
    },
    {
      id: "data-usage",
      title: "2. Для чего используются данные",
      description: "Собранные данные используются для следующих целей:",
      items: [
        "Обеспечение корректной и стабильной работы приложения",
        "Помощь в защите от отвлекающих факторов",
        "Предоставление родителям ограничений и статистики по ребенку в удобном формате",
        "Обеспечение безопасности и стабильности приложения",
      ],
      note: "Данные не используются для слежки за пользователями или их оценки.",
    },
    {
      id: "parental-control",
      title: "3. Родительский контроль",
      description:
        "Приложение Tikoncha работает на основании согласия родителя или законного представителя. Все важные настройки и разрешения управляются только родителем или ответственным лицом. При выходе ребенка из аккаунта или попытке изменить важные настройки родителю может отправляться уведомление.",
    },
    {
      id: "data-protection",
      title: "4. Хранение и защита данных",
      description: "Tikoncha обрабатывает данные пользователей следующим образом:",
      items: [
        "Хранит данные конфиденциально",
        "Не продает и не передает данные третьим лицам",
        "Использует данные только в рамках функций приложения",
      ],
      note: "Технические и организационные меры предотвращают несанкционированный доступ, потерю и некорректное использование данных.",
    },
    {
      id: "third-party",
      title: "5. Сервисы третьих сторон",
      description:
        "Для некоторых функций приложение может использовать сторонние технологии (например, для обнаружения ошибок или обеспечения технической стабильности). Эти сервисы используют только необходимые технические данные и также соблюдают требования конфиденциальности.",
    },
    {
      id: "user-rights",
      title: "6. Права пользователей",
      description: "Родители и пользователи имеют право:",
      items: [
        "Получать информацию об использовании данных",
        "Изменять или ограничивать настройки",
        "Удалить аккаунт или прекратить использование приложения",
      ],
    },
    {
      id: "ios-app",
      title: "7. Приложение Tikoncha для iPhone (iOS)",
      description:
        "На iPhone Tikoncha использует системный фреймворк Apple «Экранное время» (Screen Time, Family Controls). Какие приложения и сайты используются и сколько времени, обрабатывает сама iOS на устройстве — Apple не передает эти данные Tikoncha, и мы не получаем статистику по отдельным приложениям. Кроме того:",
      items: [
        "Какие данные мы собираем: номер телефона (для входа), имя, возраст, школа и класс (по желанию), фото профиля (по желанию), задания и монеты, правила, заданные родителем, регистрация устройства и токен уведомлений.",
        "Экранное время: на сервер отправляются только общие дневные итоги («сегодня не менее N минут»), чтобы их видел привязанный родитель.",
        "Местоположение: используется, только если включено правило по местоположению (школьная зона), — чтобы приложения закрывались внутри выбранной зоны; последнее известное местоположение может показываться привязанному родителю. Не используется для рекламы и не продается.",
        "Tikonchagram (Telegram): сообщения передаются напрямую между устройством и серверами Telegram согласно политике конфиденциальности Telegram. Серверы Tikoncha не получают и не хранят ваши сообщения и данные входа в Telegram; официальная библиотека Telegram хранит кэш только на устройстве.",
        "Toza (Instagram и YouTube): официальные сайты открываются внутри приложения без ленты коротких видео. Мы не собираем, что вы смотрите, ваши логины и пароли.",
        "Веб-защита: списки заблокированных сайтов применяются на самом устройстве; историю браузера мы не собираем.",
        "Удаление аккаунта: в приложении — Профиль → «Удалить аккаунт» (если задан PIN-код родителя, он потребуется) или на странице tikoncha.uz/delete по номеру телефона и SMS-коду. Аккаунт и связанные с ним данные удаляются с наших серверов.",
      ],
      note: "Мы не показываем рекламу, не продаем данные и не отслеживаем пользователей в приложениях и на сайтах других компаний.",
    },
    {
      id: "policy-changes",
      title: "8. Изменения политики конфиденциальности",
      description:
        "Tikoncha может периодически обновлять эту Политику конфиденциальности. Изменения публикуются на официальных площадках и вступают в силу с даты публикации.",
    },
    {
      id: "contact",
      title: "9. Контакты",
      description:
        "Если у вас есть вопросы по Политике конфиденциальности, свяжитесь с нами: info@tikoncha.uz, +998 97 270 70 07 или Telegram: t.me/tikoncha_newedu.",
    },
  ],
};

export const privacyPolicyEn: PolicyContent = {
  title: "Tikoncha Privacy Policy",
  intro:
    "The Tikoncha project respects user privacy and treats data security as a top priority. This Privacy Policy explains what data is collected while using the Tikoncha app and platform, how it is used, and how it is protected.",
  sections: [
    {
      id: "data-collection",
      title: "1. What data is collected",
      description: "The Tikoncha app may use the following categories of data:",
      items: [
        "Technical data required for app features to work properly",
        "General app usage statistics (time and activity)",
        "Location-related data to support region-based features",
        "Data related to settings and restrictions",
      ],
      note: "Tikoncha does not read or store private chats, messages, media files, or user content.",
    },
    {
      id: "data-usage",
      title: "2. Purpose of data usage",
      description: "Collected data is used for the following purposes:",
      items: [
        "Ensuring app features work correctly and reliably",
        "Helping protect children from distracting factors",
        "Providing parents with restrictions and child statistics in a clear format",
        "Maintaining application security and stability",
      ],
      note: "Data is not used to surveil users or score/evaluate them.",
    },
    {
      id: "parental-control",
      title: "3. Parental control",
      description:
        "Tikoncha works based on the consent of a parent or legal guardian. All critical settings and permissions are managed only by the parent or responsible adult. Parents may receive notifications if a child logs out or attempts to change important settings.",
    },
    {
      id: "data-protection",
      title: "4. Data storage and protection",
      description: "Tikoncha handles user data as follows:",
      items: [
        "Stores data confidentially",
        "Does not sell or share data with third parties",
        "Uses data only within app functionality scope",
      ],
      note: "Technical and organizational safeguards are applied to prevent unauthorized access, loss, or misuse of data.",
    },
    {
      id: "third-party",
      title: "5. Third-party services",
      description:
        "The app may rely on third-party technologies for certain features (for example, error monitoring or technical stability). These services process only necessary technical data and follow privacy requirements.",
    },
    {
      id: "user-rights",
      title: "6. User rights",
      description: "Parents and users have the right to:",
      items: [
        "Request information about how data is used",
        "Change or limit settings",
        "Delete the account or stop using the app",
      ],
    },
    {
      id: "ios-app",
      title: "7. Tikoncha app for iPhone (iOS)",
      description:
        "On iPhone, Tikoncha uses Apple's Screen Time framework (Family Controls). Which apps and websites are used, and for how long, is processed by iOS on the device itself — Apple does not give this data to Tikoncha, and we do not receive per-app usage. In addition:",
      items: [
        "What we collect: phone number (for sign-in), name, age, school and class (optional), profile photo (optional), tasks and coins, the rules a parent sets, and the device registration with its notification token.",
        "Screen time: only coarse daily totals (“at least N minutes today”) are sent to our server so that a linked parent can see them.",
        "Location: used only if a location (school zone) rule is turned on, so that apps lock inside the chosen area; the last known location may be shown to the linked parent. It is never used for advertising and never sold.",
        "Tikonchagram (Telegram): messages travel directly between the device and Telegram's servers under Telegram's privacy policy. Tikoncha's servers do not receive or store your messages or your Telegram login; Telegram's official library keeps its cache only on the device.",
        "Toza (Instagram and YouTube): the official websites are shown inside the app with short-video feeds hidden. We do not collect what you watch, your logins or passwords.",
        "Web protection: blocked-site lists are applied on the device itself; we do not collect browsing history.",
        "Deleting your account: in the app — Profile → “Delete account” (the parent PIN is required if one is set), or at tikoncha.uz/delete with your phone number and SMS code. The account and its linked data are deleted from our servers.",
      ],
      note: "We do not show ads, do not sell data and do not track users across other companies' apps or websites.",
    },
    {
      id: "policy-changes",
      title: "8. Privacy policy updates",
      description:
        "Tikoncha may update this Privacy Policy from time to time. Updates are announced on official channels and become effective from the published date.",
    },
    {
      id: "contact",
      title: "9. Contact",
      description:
        "If you have questions about this Privacy Policy, contact us: info@tikoncha.uz, +998 97 270 70 07 or Telegram: t.me/tikoncha_newedu.",
    },
  ],
};

export const termsPolicyUz: PolicyContent = {
  title: "Tikoncha Ota-ona: Foydalanish shartlari",
  intro:
    "Ushbu Foydalanish shartlari Tikoncha xizmatlaridan foydalanish tartibini belgilaydi. Ilovani ishlatishda siz ushbu shartlarga rozilik bildirasiz.",
  sections: [
    {
      id: "collection",
      title: "1. Biz qanday ma'lumotlarni to'playmiz?",
      description: "Xizmat sifatini ta'minlash uchun quyidagi ma'lumotlardan foydalanamiz:",
      items: [
        "Hisob ma'lumotlari: Ro'yxatdan o'tish uchun kiritilgan ism, telefon raqam yoki elektron pochta manzili.",
        "Farzand qurilmasi ma'lumotlari: “Tikoncha O'quvchi” ilovasi o'rnatilgan qurilmaning modeli, o'rnatilgan ilovalar ro'yxati, ilovalardan foydalanish vaqti va statistikasi.",
        "Joylashuv (Geolokatsiya): Agar siz ushbu funksiyani yoqsangiz, farzandingizning joylashuvi haqidagi ma'lumotlar real vaqt rejimida yig'iladi.",
        "Texnik ma'lumotlar: IP-manzil, qurilma IDsi, operatsion tizim versiyasi va xatoliklar haqidagi hisobotlar (Crash logs).",
        "Biz NIMALARNI O'QIMAYMIZ: Biz hech qachon farzandingizning SMS xabarlarini, ijtimoiy tarmoqdagi yozishmalarini, fotosuratlarini yoki brauzer tarixini (faqat bloklangan saytlar ro'yxatidan tashqari) o'qimaymiz va saqlamaymiz.",
      ],
    },
    {
      id: "usage",
      title: "2. Ma'lumotlardan qanday foydalanamiz?",
      description: "Yig'ilgan ma'lumotlar quyidagi maqsadlarda ishlatiladi:",
      items: [
        "Farzandingiz qurilmasini masofadan boshqarish va cheklovlar o'rnatish uchun.",
        "Statistika va hisobotlarni taqdim etish uchun.",
        "Xavfsizlik bildirishnomalarini yuborish uchun (masalan, ilova o'chirilganda yoki geozonadan chiqqanda).",
        "Ilova ishlashini yaxshilash va texnik xatolarni tuzatish uchun.",
      ],
    },
    {
      id: "payments",
      title: "3. To'lovlar va obuna",
      description: "Tikoncha ilovasi Premium funksiyalar uchun obuna xizmatini taklif qilishi mumkin.",
      items: [
        "To'lovni qayta ishlash: Biz to'g'ridan-to'g'ri sizning bank kartangiz ma'lumotlarini saqlamaymiz. Barcha to'lovlar Google Play Billing, App Store yoki sertifikatlangan mahalliy to'lov tizimlari (Payme, Click va h.k.) orqali amalga oshiriladi.",
        "Avtomatik yangilanish: Obunalar tanlangan davr (oylik/yillik) tugagach, avtomatik ravishda yangilanadi. Siz istalgan vaqtda do'kon (Google Play / App Store) sozlamalari orqali obunani bekor qilishingiz mumkin.",
        "To'lovlar tarixi: Biz faqat to'lovning muvaffaqiyatli amalga oshgani va obuna muddati haqidagi ma'lumotni saqlaymiz.",
      ],
    },
    {
      id: "sharing",
      title: "4. Ma'lumotlarni uchinchi shaxslarga berish",
      description: "Biz sizning shaxsiy ma'lumotlaringizni uchinchi shaxslarga bermaymiz.",
      items: ["Biz sizning shaxsiy ma'lumotlaringizni reklama kompaniyalariga sotmaymiz va uchinchi shaxslarga bermaymiz."],
    },
    {
      id: "security",
      title: "5. Xavfsizlik",
      description: "Ma'lumotlaringizni himoya qilish uchun zamonaviy shifrlash standartlaridan (SSL/TLS) foydalanamiz.",
      items: ["Serverlarimiz himoyalangan va ularga kirish qat'iy cheklangan."],
    },
  ],
};

export const termsPolicyRu: PolicyContent = {
  title: "Tikoncha Родитель: Условия использования",
  intro:
    "Настоящие Условия использования определяют правила работы с сервисами Tikoncha. Используя приложение, вы подтверждаете согласие с этими условиями.",
  sections: [
    {
      id: "collection",
      title: "1. Какие данные мы собираем?",
      description: "Для обеспечения качества сервиса мы используем следующие данные:",
      items: [
        "Данные аккаунта: имя, номер телефона или электронная почта, указанные при регистрации.",
        "Данные устройства ребенка: модель устройства с установленным приложением «Tikoncha O'quvchi», список установленных приложений, время и статистика их использования.",
        "Геолокация: если вы включили эту функцию, данные о местоположении ребенка собираются в режиме реального времени.",
        "Технические данные: IP-адрес, ID устройства, версия ОС и отчеты об ошибках (crash logs).",
        "Что мы НЕ читаем: мы никогда не читаем и не храним SMS ребенка, переписки в соцсетях, фотографии и историю браузера (кроме списка заблокированных сайтов).",
      ],
    },
    {
      id: "usage",
      title: "2. Как мы используем данные?",
      description: "Собранные данные используются для следующих целей:",
      items: [
        "Удаленное управление устройством ребенка и настройка ограничений.",
        "Формирование статистики и отчетов.",
        "Отправка уведомлений о безопасности (например, при удалении приложения или выходе из геозоны).",
        "Улучшение работы приложения и исправление технических ошибок.",
      ],
    },
    {
      id: "payments",
      title: "3. Платежи и подписка",
      description: "Приложение Tikoncha может предлагать подписку на Premium-функции.",
      items: [
        "Обработка платежей: мы не храним данные вашей банковской карты напрямую. Все платежи проходят через Google Play Billing, App Store или сертифицированные локальные платежные системы (Payme, Click и др.).",
        "Автопродление: подписка автоматически продлевается после окончания выбранного периода (месяц/год). Вы можете отменить подписку в любой момент через настройки магазина (Google Play / App Store).",
        "История платежей: мы храним только факт успешной оплаты и срок действия подписки.",
      ],
    },
    {
      id: "sharing",
      title: "4. Передача данных третьим лицам",
      description: "Мы не передаем ваши персональные данные третьим лицам.",
      items: ["Мы не продаем персональные данные рекламным компаниям и не передаем их третьим сторонам."],
    },
    {
      id: "security",
      title: "5. Безопасность",
      description: "Для защиты данных мы используем современные стандарты шифрования (SSL/TLS).",
      items: ["Наши серверы защищены, а доступ к ним строго ограничен."],
    },
  ],
};

export const termsPolicyEn: PolicyContent = {
  title: "Tikoncha Parent: Terms of Use",
  intro:
    "These Terms of Use define the rules for using Tikoncha services. By using the app, you agree to these terms.",
  sections: [
    {
      id: "collection",
      title: "1. What data do we collect?",
      description: "To provide service quality, we use the following data:",
      items: [
        "Account data: name, phone number, or email entered during registration.",
        "Child device data: model of the device with the “Tikoncha O'quvchi” app, installed app list, app usage time, and usage statistics.",
        "Location (Geolocation): if enabled, your child's location data is collected in real time.",
        "Technical data: IP address, device ID, OS version, and crash logs.",
        "What we do NOT read: we never read or store your child's SMS, social media chats, photos, or browser history (except blocked-site lists).",
      ],
    },
    {
      id: "usage",
      title: "2. How do we use data?",
      description: "Collected data is used for the following purposes:",
      items: [
        "Remote management of the child device and applying restrictions.",
        "Providing statistics and reports.",
        "Sending safety notifications (for example, when the app is removed or when leaving a geofence).",
        "Improving app performance and fixing technical issues.",
      ],
    },
    {
      id: "payments",
      title: "3. Payments and subscription",
      description: "The Tikoncha app may offer subscriptions for Premium features.",
      items: [
        "Payment processing: we do not store your bank card details directly. All payments are processed through Google Play Billing, App Store, or certified local payment systems (Payme, Click, etc.).",
        "Auto-renewal: subscriptions renew automatically after the selected billing period (monthly/yearly). You can cancel at any time through store settings (Google Play / App Store).",
        "Payment history: we only store payment success status and subscription validity period.",
      ],
    },
    {
      id: "sharing",
      title: "4. Sharing data with third parties",
      description: "We do not provide your personal data to third parties.",
      items: ["We do not sell personal data to advertising companies and do not share it with third parties."],
    },
    {
      id: "security",
      title: "5. Security",
      description: "We use modern encryption standards (SSL/TLS) to protect your data.",
      items: ["Our servers are protected and access is strictly restricted."],
    },
  ],
};

const privacyPolicyByLang: Record<Lang, PolicyContent> = {
  uz: privacyPolicyUz,
  ru: privacyPolicyRu,
  en: privacyPolicyEn,
};

const termsPolicyByLang: Record<Lang, PolicyContent> = {
  uz: termsPolicyUz,
  ru: termsPolicyRu,
  en: termsPolicyEn,
};

const policyUiByLang: Record<Lang, PolicyUiContent> = {
  uz: {
    tocLabel: "Mundarija",
    backLabel: "Bosh sahifaga qaytish",
    privacyKeywords: "tikoncha maxfiylik siyosati, maxfiylik siyosati, ota-ona nazorati maxfiylik",
    termsKeywords: "tikoncha foydalanish shartlari, tikoncha ota-ona siyosati, to'lovlar va obuna",
  },
  ru: {
    tocLabel: "Содержание",
    backLabel: "Вернуться на главную",
    privacyKeywords:
      "политика конфиденциальности tikoncha, конфиденциальность родительского контроля, защита данных tikoncha",
    termsKeywords: "условия использования tikoncha, подписка tikoncha, платежи tikoncha",
  },
  en: {
    tocLabel: "Contents",
    backLabel: "Back to home",
    privacyKeywords: "tikoncha privacy policy, parental control privacy, tikoncha data protection",
    termsKeywords: "tikoncha terms of use, tikoncha subscription, tikoncha payments",
  },
};

export const getPrivacyPolicyByLang = (lang: Lang): PolicyContent => privacyPolicyByLang[lang];

export const getTermsPolicyByLang = (lang: Lang): PolicyContent => termsPolicyByLang[lang];

export const getPolicyUiByLang = (lang: Lang): PolicyUiContent => policyUiByLang[lang];
