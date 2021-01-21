/*
 * Метод setInterval()
 */

const logger = (time) => console.log(`Лог каждые ${time}ms - ${Date.now()}`);

/* setInterval(logger, 2000, 2000); */
/*
 * Очистка интервала с clearInterval()
 */

let subCounter = 0;
let hasSubscribed = false;

const intervalID = setInterval(() => {
  if (subCounter === 3) {
    clearInterval(intervalID);
    console.log("interupt interval");
    return;
  }
  console.log(subCounter);
  console.log("Subscribe please!");
  subCounter += 1;
}, 1000);
