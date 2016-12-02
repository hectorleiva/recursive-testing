## Recursive Test
### This is a series of tests using recursive tail call functions and promises.
#### Which one will survive the best when performing thousands of calls?

Two Javascript files exist within this repo to test the limitations of recursive call.

One uses a standard recursive function call method, while the other one performs a recursive function call method but using promises instead.

The example will illustrate that the recursive function in `series-test-tail-call` will most likely work, but if the argument for `counter()` changes to a larger amount, the stack will overflow.

On the other hand, the `series-test-promise` will never increase the stack size. I'm not entirely sure why it won't, but it has everything to do with how the promise hands off the original promise down.

Since the stack never increases in `series-test-promise`, the value can be 20,000,000,000 and the script will continue running without any problems, it will take a long time to complete, but it will indeed complete it.
