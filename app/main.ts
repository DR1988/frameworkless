// const wlc = require('./welcome')
import './styles/style.css'

import './modules/todos/todo.controller.ts'

if (module.hot) {
  module.hot.accept('./modules/todos/todo.controller.ts', function () {
  })
}