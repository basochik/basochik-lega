<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Таймер до 17 марта 2025</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="timer-container">
    <div class="timer">
      <div class="time-block">
        <span class="time" id="days">00</span>
        <span class="label">Дней</span>
      </div>
      <div class="time-block">
        <span class="time" id="hours">00</span>
        <span class="label">Часов</span>
      </div>
      <div class="time-block">
        <span class="time" id="minutes">00</span>
        <span class="label">Минут</span>
      </div>
      <div class="time-block">
        <span class="time" id="seconds">00</span>
        <span class="label">Секунд</span>
      </div>
    </div>
  </div>

  <script>
    function updateTimer() {
      const targetDate = new Date("March 17, 2025 00:00:00").getTime();
      const currentDate = new Date().getTime();
      const timeLeft = targetDate - currentDate;

      if (timeLeft <= 0) {
        document.querySelector('.timer').innerHTML = "Время вышло!";
        clearInterval(timerInterval);
      } else {
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        document.getElementById('days').innerHTML = days < 10 ? '0' + days : days;
        document.getElementById('hours').innerHTML = hours < 10 ? '0' + hours : hours;
        document.getElementById('minutes').innerHTML = minutes < 10 ? '0' + minutes : minutes;
        document.getElementById('seconds').innerHTML = seconds < 10 ? '0' + seconds : seconds;
      }
    }

    const timerInterval = setInterval(updateTimer, 1000);
    updateTimer();
  </script>
</body>
</html>
CSS:
css
Копировать
/* Общие стили */
body {
  font-family: 'Arial', sans-serif;
  background-color: #f4f7fb;
  color: #333;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
}

.timer-container {
  text-align: center;
}

.timer {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  background: #ffffff;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

/* Стили для блоков времени */
.time-block {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.time {
  font-size: 48px;
  font-weight: bold;
  color: #3498db;
  transition: transform 0.3s ease-in-out;
}

.time:hover {
  transform: scale(1.2);
}

.label {
  font-size: 16px;
  color: #7f8c8d;
  margin-top: 5px;
  text-transform: uppercase;
}

/* Анимация для изменения времени */
@keyframes countdown {
  0% {
    transform: scale(1);
    opacity: 0;
  }
  100% {
    transform: scale(1.2);
    opacity: 1;
  }
}

.time {
  animation: countdown 0.5s ease-out;
}
