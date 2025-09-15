function displayNumbers(
  callback: (num: number) => void,
  delayMs: number
): void {
  let count = 1;

  setInterval(() => {
    callback(count);
    count++;
  }, delayMs);
}
function printNumber(num: number): void {
  console.log(`Số thứ tự: ${num}`);
}

displayNumbers(printNumber, 1000);