/*
 * Метод setTimeout()
 */

const log = () => {
  console.log("Лог при вызове callback-функции через 3 секунды");
};

/*
 * Асинхронность кода
 */

/* console.log("before call setTimeout");
setTimeout(log, 3000);
console.log("after call setTimmeout"); */

/* Очитска таймаута с ClearTimeot */

const logger = (time) => {
  console.log(`Лог через ${time}ms, потму что не отменили тайиаут `);
};

const timerId = setTimeout(logger, 2000, 2000);

const shouldCancelTimer = Math.random() > 0.3;

console.log(shouldCancelTimer);
if (shouldCancelTimer) {
  clearTimeout(timerId);
}
