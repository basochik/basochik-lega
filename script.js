<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Таймер до 17 марта</title>
    <style>
        #timer {
            font-size: 24px;
            padding: 10px;
        }
        .green-bg {
            background-color: green;
            color: white;
        }
    </style>
</head>
<body>
    <div id="timer"></div>

    <script>
        function updateTimer() {
            const today = new Date();
            const currentYear = today.getFullYear();
            const targetDate = new Date(currentYear, 2, 17); // 17 марта (месяц в JS от 0 до 11)

            // Если сегодня 17 марта, показываем "сегодня"
            if (today.getDate() === 17 && today.getMonth() === 2) {
                document.getElementById("timer").textContent = "Сегодня";
                document.getElementById("timer").classList.add("green-bg");
            } else {
                // Если это не 17 марта, то отсчитываем до 17 марта
                const timeDifference = targetDate - today;
                if (timeDifference <= 0) {
                    // Если дата прошла, устанавливаем новый отсчет до следующего 17 марта
                    targetDate.setFullYear(currentYear + 1);
                }

                const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
                const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

                document.getElementById("timer").textContent = `${days} дней ${hours} часов ${minutes} минут ${seconds} секунд до 17 марта`;
                document.getElementById("timer").classList.remove("green-bg");
            }
        }

        setInterval(updateTimer, 1000); // Обновляем каждую секунду
        updateTimer(); // Вызовем один раз, чтобы сразу показать результат
    </script>
</body>
</html>
