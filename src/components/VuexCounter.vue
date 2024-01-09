<script setup lang="ts">
import store from '../storage'

const callIncrement = () => {
  store.commit('increment')
}

const callMegaIncrement = () => {
  store.dispatch('megaIncrement', 'Mega increment!!!')
}

const callReset = () => {
  store.commit('reset')
}

</script>

<template>
  <div class="counter-container">
    <h2>
      The counter is:
    </h2>
    <div class="counter-number">{{ store.state.count }}</div>
    <div class="counter-buttons-container">
      <button @click="callIncrement">Add 1</button>
      <button @click="callMegaIncrement">Add 100 + 1</button>
      <button @click="callReset">Reset</button>
    </div>
    <p>The double amount would be: {{ store.getters.doubleCount }}</p>
  </div>
</template>

<style scoped>

.counter-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
}

.counter-number {
  padding: 20px;
  border: black solid 2px;
  border-radius: 8px;
  font-weight: bold;
  font-size: 2rem;
  width: 80%;
  text-align: center;
  margin-bottom: 12px;
}

.counter-buttons-container {
  width: 80%;
  display: flex;
}

.counter-buttons-container button {
  flex-grow: 1;
  padding: 12px;
  background-color: lightgreen;
  font-weight: bold;
  font-size: 1rem;
  border-radius: 8px;
  margin-bottom: 12px;
  cursor: pointer;
}

.counter-buttons-container button:hover {
  background-color: lightsalmon;
}

@media (min-width: 1024px) {

  .counter-container h1,
  .counter-container h3 {
    text-align: left;
  }
}
</style>
../storage/store