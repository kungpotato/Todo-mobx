import React from 'react'
import { Provider } from 'mobx-react'
import TodoRoute from './Route'
import TodoStore from './store/TodoStore'

const store = new TodoStore()

const App = () => (
  <Provider store={store}>
    <TodoRoute />
  </Provider>
)

export default App
