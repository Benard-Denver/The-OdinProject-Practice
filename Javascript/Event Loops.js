// - JS engine uses a call stack to manage execution contexts.
// - The call stack uses a data structure that works based on the LIFO(last in, first out) principle
// - synchrous means the engine has one call stack. Can do one thing at a time.
// - When executing script, the engine executes code from top to bottom, line by line

// - asynchronous means the engine can execute other tasks while waiting for another task to be completed.
// - e.g. 1. Request data from a remote server
// 2. Display a spinner
// 3. When the data is available, display on the webpage


// - a function that takes long time to complete is called a blocking function.
// - an example of a blocking function is a function that callsa an API from a remote server.

// - a big loop that simulates the blocking function:
function task(message) {
    // emulate time consuming task
    let n = 10000000000;
    while (n>0){
        n--;
    }
    console.log(message);
}
console.log('Start script...');
task("Call an API");
console.log("Done!")

// To prevent a blocking function from blocking other activities, you can put it in a call  back function for execution later:;
console.log("Start a script...");

setTimeout(() => {
    task("Download a file.");
}, 1000);

console.log("Done!");


console.log('Hi!');

setTimeout(() => {
    console.log('Execute immediately.')
}, 0);

console.log('Bye!');