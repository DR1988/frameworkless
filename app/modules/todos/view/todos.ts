import { iTodo } from '../schemas'

const getTodoElement = (todo: iTodo) => {
  const {
    text,
    completed
  } = todo

  return `
      <li ${completed ? 'class="completed"' : ''}>
        <div class="view">
          <input 
            ${completed ? 'checked' : ''}
            class="toggle" 
            type="checkbox">
          <label>${text}</label>
          <button class="destroy">remove</button>
        </div>
        <input class="edit" value="${text}">
      </li>`
}

export default (targetElement: Node, { todos }: { todos: iTodo[] }): HTMLElement => {
  const newTodoList = <HTMLElement>targetElement.cloneNode(true)
  const todosElements = todos
    .map(getTodoElement)
    .join('')
  newTodoList.innerHTML = todosElements
  return newTodoList
}