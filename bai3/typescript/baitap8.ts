function add(a: number | string, b: number | string): number | string {
  const numA = Number(a);
  const numB = Number(b);
  if (isNaN(numA) || isNaN(numB)) return "Dữ liệu không hợp lệ";
  return numA + numB;
}

function subtract(a: number | string, b: number | string): number | string {
  const numA = Number(a);
  const numB = Number(b);
  if (isNaN(numA) || isNaN(numB)) return "Dữ liệu không hợp lệ";
  return numA - numB;
}

function multiply(a: number | string, b: number | string): number | string {
  const numA = Number(a);
  const numB = Number(b);
  if (isNaN(numA) || isNaN(numB)) return "Dữ liệu không hợp lệ";
  return numA * numB;
}

function divide(a: number | string, b: number | string): number | string {
  const numA = Number(a);
  const numB = Number(b);
  if (isNaN(numA) || isNaN(numB)) return "Dữ liệu không hợp lệ";
  if (numB === 0) return "Không thể chia cho 0";
  return numA / numB;
}
