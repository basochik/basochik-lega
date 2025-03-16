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
    <h1 class="heading">ДО НДЯ РОДЖЕНИЯ BASOK</h1> <!-- Добавленная надпись -->
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
