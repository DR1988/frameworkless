export interface iTodoState {
  todos: Array<iTodo>,
  currentFilter: string,
}

export interface iTodo {
  text: string,
  completed: boolean,
}

