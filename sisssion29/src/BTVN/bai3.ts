function processArray(
  arr: number[],
  callback: (element: number, index: number) => void
): void {
  arr.forEach((element, index) => {
    setTimeout(() => {
      callback(element, index);
    }, index * 1000);
  });
}

const numbers = [1, 2, 3, 4, 5];

function printElement(element: number, index: number): void {
  console.log(`Phần tử thứ: ${element}`);
}

processArray(numbers, printElement);