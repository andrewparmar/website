---
title: Promises
date: 2025-1-21
---
## Promises in JavaScript

Promises are a way to handle asynchronous operations in JavaScript. They represent a value that may not be available yet, but will be at some point in the future.

## Use it to your advantage
Promises always take in a resolve[r] and reject[er] function.

```javascript
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // Randomly succeed or fail
        const random = Math.random();
        if (random > 0.5) {
            resolve(random);
        } else {
            reject(random);
        }
    }, 2000);
});
```

In this example, the promise will resolve with a random number between 0 and 1. In either success or failure, the random number is passed into `resolve` or `reject`. The key piece then is that some output is returned to the caller, and the caller can then use `.then` or `.catch`, respectively, to handle the success or failure of the promise.

```javascript
promise
    .then(result => { console.log('Success:', result); })
    .catch(error => { console.error('Error:', error); });
```
