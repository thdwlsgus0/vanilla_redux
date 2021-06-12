import { createStore } from "redux";
import { divToggle, counter, btnIncrease, btnDecrease } from "./dom.js";
import { reducer } from "./reducer.js";
import { toggleSwitch, increase, decrease } from "./action.js";
const store = createStore(reducer);

const render = () => {
  const state = store.getState();
  if (state.toggle) {
    divToggle.classList.add("active");
  } else {
    divToggle.classList.remove("active");
  }
  counter.innerText = state.counter;
};

render();

store.subscribe(render);

divToggle.addEventListener("click", (e) => {
  store.dispatch(toggleSwitch());
});

btnIncrease.addEventListener("click", (e) => {
  store.dispatch(increase());
});

btnDecrease.addEventListener("click", (e) => {
  store.dispatch(decrease());
});
