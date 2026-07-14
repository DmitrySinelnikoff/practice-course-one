/**
 * Напишите функцию, которая определяет какому дню недели соответствует эта дата?
 */
function getWeekDay(day, month, year) {
  const date = new Date(year, month - 1, day);
  const weekDays = [
    "воскресенье",
    "понедельник",
    "вторник",
    "среда",
    "четверг",
    "пятница",
    "суббота"
  ];

  return weekDays[date.getDay()];
}

/**
 * Напишите функцию, которая определяет - високосный это был год, или нет?
 * 
 * Просто записал логическое выражение, которое проверяет условия високосного года:
 * - Год делится на 4 без остатка
 * - Год не делится на 100 без остатка, или делится на 400 без остатка
 */
function isLeapYear(year) {
  const divisibleBy4 = year % 4 === 0;
  const divisibleBy100 = year % 100 === 0;
  const divisibleBy400 = year % 400 === 0;

  return (divisibleBy4 && !divisibleBy100) || divisibleBy400;
}

/**
 * Напишите функцию, которая определяет сколько сейчас лет пользователю
 */
function getAge(day, month, year) {
  const today = new Date();
  let age = today.getFullYear() - year;
  const birthdayThisYear = new Date(today.getFullYear(), month - 1, day);

  if (today < birthdayThisYear) {
    age--;
  }

  return age;
}

/**
 * Реализуйте вывод в консоль даты рождения пользователя в формате дд мм гггг,
 * где цифры прорисованы звёздочками (*), как на электронном табло
 * 
 * Делал максимально просто, массив с цифрами, которые выводятся в виде звёздочек, и функция,
 * которая формирует массив строк для вывода в консоль
 */
function getStarDate(dateText) {
  const numbers = {
    "0": [" *** ", "*   *", "*   *", "*   *", " *** "],
    "1": ["  *  ", " **  ", "  *  ", "  *  ", " *** "],
    "2": [" *** ", "*   *", "   * ", "  *  ", "*****"],
    "3": [" *** ", "*   *", "  ** ", "*   *", " *** "],
    "4": ["*   *", "*   *", "*****", "    *", "    *"],
    "5": ["*****", "*    ", "**** ", "    *", "**** "],
    "6": [" *** ", "*    ", "**** ", "*   *", " *** "],
    "7": ["*****", "    *", "   * ", "  *  ", " *   "],
    "8": [" *** ", "*   *", " *** ", "*   *", " *** "],
    "9": [" *** ", "*   *", " ****", "    *", " *** "],
    " ": ["     ", "     ", "     ", "     ", "     "]
  };
  const result = [];

  for (let row = 0; row < 5; row++) {
    let line = "";

    for (let i = 0; i < dateText.length; i++) {
      line += numbers[dateText[i]][row] + " ";
    }

    result.push(line);
  }

  return result;
}

/**
 * Вывел все в консоль и на страницу, чтобы было видно результат
 */
function showResult() {
  const day = Number(document.getElementById("day").value);
  const month = Number(document.getElementById("month").value);
  const year = Number(document.getElementById("year").value);

  if (!day || !month || !year) {
    alert("Заполните день, месяц и год.");
    return;
  }

  const dayText = String(day).padStart(2, "0");
  const monthText = String(month).padStart(2, "0");
  const yearText = String(year).padStart(4, "0");
  const dateText = dayText + " " + monthText + " " + yearText;
  const starDate = getStarDate(dateText);

  document.getElementById("result").innerHTML =
    "Дата рождения: " + dateText + "<br>" +
    "День недели: " + getWeekDay(day, month, year) + "<br>" +
    "Високосный год: " + (isLeapYear(year) ? "да" : "нет") + "<br>" +
    "Возраст: " + getAge(day, month, year);

  document.getElementById("stars").textContent = starDate.join("\n");

  console.log("Дата рождения:", dateText);
  console.log("День недели:", getWeekDay(day, month, year));
  console.log("Високосный год:", isLeapYear(year) ? "да" : "нет");
  console.log("Возраст:", getAge(day, month, year));
  console.log("Дата рождения звёздочками:");

  for (let i = 0; i < starDate.length; i++) {
    console.log(starDate[i]);
  }
}

document.getElementById("button").addEventListener("click", showResult); // событие нажатия кнопки
