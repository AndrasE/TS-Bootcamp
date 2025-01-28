const numbers = new Array<number>();

numbers.push(1);

const promise = new Promise<string>((resolve, reject) => {
  setTimeout(() => {
    resolve("This is done");
  }, 2000);
});
