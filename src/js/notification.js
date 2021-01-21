/**
 * - Показываем и скрываем добавляя/удаляя класс
 * - Скрываем через определенное время
 * - Скрываем при клике
 * - Не забываем чистить таймер
 */

const refs = {
  notification: document.querySelector(".js-notification"),
};
let timeoutID = null;

refs.notification.addEventListener("click", notificationClickHandler);

showNotification();

function notificationClickHandler() {
  clearTimeout(timeoutID);
  hideNotification();
}

function showNotification() {
  refs.notification.classList.add("is-visible");
  timeoutID = setTimeout(() => {
    console.log("exit");
    hideNotification();
  }, 3000);
}

function hideNotification() {
  refs.notification.classList.remove("is-visible");
}
