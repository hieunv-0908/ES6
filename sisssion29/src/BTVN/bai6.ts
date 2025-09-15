function task1(callback: () => void): void {
  setTimeout(() => {
    console.log("Task 1 được thực thi");
    callback();
  }, 1000); 
}

function task2(callback: () => void): void {
  setTimeout(() => {
    console.log("Task 2 được thực thi");
    callback();
  }, 1500); 
}

function task3(): void {
  setTimeout(() => {
    console.log("Task 3 được thực thi");
  }, 2000);
}


task1(() => {
  task2(() => {
    task3();
  });
});