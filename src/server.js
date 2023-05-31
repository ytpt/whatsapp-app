const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Обработка POST-запросов на URL-адресе вебхука
app.post("/webhook", (req, res) => {
    const message = req.body; // Получение данных сообщения из тела запроса
    console.log("Получено новое сообщение:", message);

    // Дополнительная обработка сообщения по вашему усмотрению

    res.sendStatus(200); // Отправка успешного ответа серверу Green API
});

// Запуск сервера на определенном порту
const port = 3000; // Замените на желаемый порт
app.listen(port, () => {
    console.log('Сервер запущен и слушает порт', port);
});