const caller = (counter) => {
  if (counter === 0) {
    return console.log('end');
  }
  return caller(counter - 1);
};

caller(10000);
