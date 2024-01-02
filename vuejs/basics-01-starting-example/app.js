const app = Vue.createApp({
  data() {
    return {
      name: "Isuru",
      age: 32,
      ranNo: 0,
      imgUrl:
        "https://cdn.vuetifyjs.com/docs/images/logos/vuetify-logo-light-atom.svg",
    };
  },
  methods: {
    getAgeInFiveYears() {
      return this.age + 5;
    },
    getRandomNumber() {
      this.ranNo = Math.random();

      return this.ranNo;
    },
  },
});

app.mount("#assignment");
