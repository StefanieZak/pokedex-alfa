import Vue from "vue";
import "@/styles/main.scss";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

Vue.filter("weightHeightPokemon", (valor) => {
  valor = valor / 10;
  return valor;
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#root");
