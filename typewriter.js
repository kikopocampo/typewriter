const sentence = "Hello from Lighthouse Labs!";
  let delay = 1000;
  setTimeout(() => {
    process.stdout.write("\n");
  }, delay + (100 * sentence.length));
  for(const char of sentence) {
    setTimeout(() => {
      process.stdout.write(char);
    }, delay);
    delay += 100;
  };

 

