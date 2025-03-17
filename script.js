// Функция для обновления таймера
function countdownToMarch17() {
    const targetDate = new Date('2025-03-17T00:00:00'); // 17 марта 2025 года
    const currentDate = new Date();

    // Проверка, наступил ли 17 марта
    if (currentDate >= targetDate) {
        // Если сегодня 17 марта или позже, помечаем как "Сегодня"
        document.getElementById("timer").innerHTML = "<p>сиводня</p>";
        document.getElementById("timer").classList.add("green");
    } else {
        // Разница во времени
        const timeDifference = targetDate - currentDate;

        // Вычисление оставшегося времени
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        // Обновление таймера
        document.getElementById("countdown").innerHTML = `Осталось: ${days} дней, ${hours} часов, ${minutes} минут, ${seconds} секунд`;
        document.getElementById("timer").classList.remove("green"); // Убираем зеленый фон
    }

    // Обновление каждую секунду
    setTimeout(countdownToMarch17, 1000);
}

// Запуск таймера
countdownToMarch17();
