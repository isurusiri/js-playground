# Vue Basics

- VueJS apps are created by calling the `createApp` function.

```
const app = Vue.createApp();
```

- The `createApp` function accepts an object as an argument containing a predefined set of properties.
- One such property is a function named `data`.
- The `data` function holds the model of the application and return those values.
- JavaScript application is binded with the view using `mount` function of the app.
- A valid CSS query selector for the HTML block is required as an argument when calling the `mount` function.

```
app.mount('#user-goal');
```
