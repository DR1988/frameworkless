import getTodos from './getTodos'
import todosView from './view/todos'
import counterView from './view/counter'
import filtersView from './view/filters'

import registry from './registry'

import { iTodoState } from './schemas'

registry.add('todos', todosView)
registry.add('counter', counterView)
registry.add('filters', filtersView)

const state: iTodoState = {
  todos: getTodos(),
  currentFilter: 'All'
}

window.requestAnimationFrame(() => {
  const main = document.querySelector('.todoapp')
  const newMain = registry.renderRoot(main, state)
  main.replaceWith(newMain)
})

const interval = window.setInterval(() => {
  state.todos = getTodos()
  render()
}, 5000)

const render = () => {
  window.requestAnimationFrame(() => {
    const main = document.querySelector('.todoapp')
    const newMain = registry.renderRoot(main, state)
    main.replaceWith(newMain)
  })
}

render()