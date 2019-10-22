// App View Function with Smaller View Functions
import todosView from './todos'
import counterView from './counter'
import filtersView from './filters'

export default (targetElement: Node, state: any) => {
  const element = <Element>targetElement.cloneNode(true)

  const list = element
    .querySelector('.todo-list')
  const counter = element
    .querySelector('.todo-count')
  const filters = element
    .querySelector('.filters')

  list.replaceWith(todosView(list, state))
  counter.replaceWith(counterView(counter, state))
  filters.replaceWith(filtersView(filters, state))

  return element
}