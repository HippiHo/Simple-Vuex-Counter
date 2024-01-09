// store.ts
import { createStore } from 'vuex'

// define your typings for the store state
export interface State {
  count: number
}

const store = createStore<State>({
  state() {
    return {
      count: 0
    }
  },
  mutations: {
    increment(state: State) {
      state.count++
    },
    addNumber(state: State, number: number) {
      state.count = state.count + number
    },
    reset(state: State) {
      state.count = 0
    }
  },
  actions: {
    megaIncrement(context: any, message: string) {
      alert(message)
      context.commit('addNumber', 100)
      context.commit('increment')
    }
  },
  getters: {
    doubleCount(state: State) {
      return state.count * 2
    }
  }
})

export default store
