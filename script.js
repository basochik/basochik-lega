// Функция для обновления таймера
function updateTimer() {
    const today = new Date(); // Получаем текущую дату
    const currentYear = today.getFullYear(); // Текущий год
    const targetDate = new Date(currentYear, 2, 17); // 17 марта (месяц в JS от 0 до 11)

    // Если сегодня 17 марта, показываем "Сегодня"
    if (today.getDate() === 17 && today.getMonth() === 2) {
        document.getElementById("timer").textContent = "сиводня🎉";
        document.getElementById("timer-container").classList.add("green-bg"); // Добавляем зеленый фон
    } else {
        // Если 17 марта уже прошло, устанавливаем новый отсчет до следующего 17 марта
        if (today > targetDate) {
            targetDate.setFullYear(currentYear + 1); // Устанавливаем следующий год
        }

        const timeDifference = targetDate - today; // Разница между сегодняшней датой и 17 марта

        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24)); // Оставшиеся дни
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)); // Оставшиеся часы
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60)); // Оставшиеся минуты
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000); // Оставшиеся секунды

        // Выводим время без дефисов и без фразы "до 17 марта"
        document.getElementById("timer").textContent = `Осталось ${days} дней ${hours} часов ${minutes} минут ${seconds} секунд`;
        document.getElementById("timer-container").classList.remove("green-bg"); // Убираем зеленый фон
    }
}

// Обновляем таймер каждую секунду
setInterval(updateTimer, 1000);
updateTimer(); // Сразу вызываем один раз, чтобы таймер начал работать
