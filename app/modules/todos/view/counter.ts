import { iTodo } from '../schemas'

const getTodoCount = (todos: iTodo[] ) => {
  const notCompleted = todos
    .filter(todo => !todo.completed)

  const { length } = notCompleted
  if (length === 1) {
    return '1 Item left'
  }

  return `${length} Items left`
}

export default (targetElement: Node, { todos }: { todos: iTodo[] }): HTMLElement => {
  const newCounter = <HTMLElement>targetElement.cloneNode(true)
  newCounter.textContent = getTodoCount(todos)
  return newCounter
}