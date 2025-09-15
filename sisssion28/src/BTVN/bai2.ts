type callback = () => void;
function delayedCallback(callBack:callback,delayMs: number): void {
  setTimeout(() => {
    callBack();
  }, delayMs);
}

function printFunction() {
  console.log("2 giây đã trôi qua");
}

delayedCallback(printFunction, 2000);           