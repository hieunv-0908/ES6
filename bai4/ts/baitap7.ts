function processInput(input: string | number | boolean): void {
  if (typeof input === "string") {
    if (/^\d+$/.test(input)) {
      const num = parseInt(input);
      console.log(num * num);
    } else {
      const letterCount = (input.match(/[a-zA-Z]/g) || []).length;
      console.log(`${letterCount} ký tự chữ cái`);
    }
  } else if (typeof input === "number") {
    if (input < 2 || !Number.isInteger(input)) {
      console.log("Không phải số nguyên tố");
      return;
    }
    for (let i = 2; i <= Math.sqrt(input); i++) {
      if (input % i === 0) {
        console.log("Không phải số nguyên tố");
        return;
      }
    }
    console.log("Là số nguyên tố");
  } else if (typeof input === "boolean") {
    if (input) {
      console.log("Giá trị là true - tiến hành xử lý");
    } else {
      console.log("Giá trị là false - dừng xử lý");
    }
  }
}

