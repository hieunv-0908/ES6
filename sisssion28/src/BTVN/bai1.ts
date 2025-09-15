function calculate(
  a: number,
  b: number,
  callback: (result: number) => void
): void {
  const sum = a + b;
  callback(sum);
}
function printResult(result: number): void {
  console.log("Kết quả là:", result);
}

calculate(8, 12, printResult);