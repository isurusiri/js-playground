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

- As long as the data function is returning an object with properties, those properties can be interpolated in the HTML code.
- Interpolation in HTML code is done using `{{ <PROPERTY> }}` syntax.
- Interpolation will only be working inside the HTML block that has been mounted in the Vue app.

```
<section id="user-goal">
  <h2>My Course Goal</h2>
  <p>{{ courseGoal }}</p>
</section>
```
