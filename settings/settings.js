var Settings = {
    port: process.env.PORT || 3000, //выбор порта. Если не задается системой жестко, то 3000 "||" - оператор ИЛИ в JS если что =)
    serverResponse: "***\n### Добро пожаловать на сервер Webdev Courses!\n### СТАТУС СЕРВЕРА: OK. ПОРТ: ",
    dbResponse: "### СОСТОЯНИЕ БАЗЫ ДАННЫХ: ВРОДЕ БЫ ПОДКЛЮЧЕНА.\n***",
    MOTD: "\nНе забываем запускать nodemon и читать вики проекта на гитхабе", // Указывайте здесь сообщения дня, если есть что передать другим разработчикам.
    database: "mongodb://webdevcourses:1234567890@ds019882.mlab.com:19882/web-dev-courses",
    secret: "i am gonna hash my strings up"
};

module.exports = Settings;