const output = document.querySelector("#output");
const btn = document.querySelector("#btn");
const inputNumber = document.querySelector('input[type="number"]');

const wait = function (time, result, type = "", value = "") {
  return new Promise(function (resolve, _) {
    setTimeout(function () {
      if (type == "+") resolve(result + value);
      else if (type == "-") resolve(result - value);
      else if (type == "*") resolve(result * value);
      else if (type == "/") {
        if (value == 0) throw new Error("cannot divide by zero");
        resolve(result / value);
      }
      resolve(result);
    }, time * 1000);
  });
};

btn.addEventListener("click", function () {
  try {
    wait(2, parseInt(inputNumber.value))
      .then((result) => {
        const html = `Result: ${result}`;
        output.insertAdjacentHTML("afterbegin", html);
        return wait(1, result, "*", 2);
      })
      .then((result) => {
        output.removeChild(output.firstChild);
        const html = `Result: ${result}`;
        output.insertAdjacentHTML("afterbegin", html);
        return wait(1, result, "-", 3);
      })
      .then((result) => {
        output.removeChild(output.firstChild);
        const html = `Result: ${result}`;
        output.insertAdjacentHTML("afterbegin", html);
        return wait(1, result, "/", 2);
      })
      .then((result) => {
        output.removeChild(output.firstChild);
        const html = `Result: ${result}`;
        output.insertAdjacentHTML("afterbegin", html);
        return wait(1, result, "+", 10);
      })
      .then((result) => {
        output.removeChild(output.firstChild);
        const html = `Final Result: ${result}`;
        output.insertAdjacentHTML("afterbegin", html);
      });
  } catch (error) {
    console.error(error);
  }
});
