// Функция для обновления таймера
function countdownToMarch17() {
    const targetDate = new Date('2025-03-17T00:00:00'); // 17 марта 2025 года
    const currentDate = new Date();

    // Проверка, наступил ли 17 марта
    if (currentDate >= targetDate) {
        const nextTargetDate = new Date(targetDate.getFullYear() + 1, 2, 17); // Следующий 17 марта
        targetDate.setFullYear(currentDate.getFullYear());
    }

    // Разница во времени
    const timeDifference = targetDate - currentDate;

    if (timeDifference <= 0) {
        // Если пришел 17 марта, показываем сообщение "Сегодня"
        document.getElementById("timer").innerHTML = "<p>Сегодня</p>";
        document.getElementById("timer").classList.add("green");
    } else {
        // Вычисление оставшегося времени
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        // Обновление таймера
        document.getElementById("countdown").innerHTML = `Осталось: ${days} дней, ${hours} часов, ${minutes} минут, ${seconds} секунд`;
        document.getElementById("timer").classList.remove("green"); // Убираем зеленый фон
    }

    // Обновление каждый день (86400000 миллисекунд = 1 день)
    setTimeout(countdownToMarch17, 86400000);
}

// Запуск таймера
countdownToMarch17();
