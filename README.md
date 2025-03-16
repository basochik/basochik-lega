<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Таймер обратного отсчета</title>
  <style>
    .timer {
      font-size: 30px;
      font-family: Arial, sans-serif;
    }
  </style>
</head>
<body>

  <div class="timer"></div>

  <script>
    // Функция для обновления таймера
    function updateTimer() {
      const targetDate = new Date("March 17, 2025 00:00:00").getTime(); // Дата целевого события
      const currentDate = new Date().getTime(); // Текущее время

      // Рассчитываем оставшееся время
      const timeLeft = targetDate - currentDate;

      if (timeLeft <= 0) {
        document.querySelector('.timer').innerHTML = "Время вышло!";
        clearInterval(timerInterval); // Останавливаем таймер
      } else {
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        // Обновляем содержимое блока
        document.querySelector('.timer').innerHTML = `${days} дней ${hours} часов ${minutes} минут ${seconds} секунд`;
      }
    }

    // Обновляем таймер каждую секунду
    const timerInterval = setInterval(updateTimer, 1000);

    // Запускаем первоначальное обновление таймера
    updateTimer();
  </script>

</body>
</html>
