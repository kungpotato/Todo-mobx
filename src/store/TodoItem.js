import { observable, action } from 'mobx'

class TodoItem {
  @observable
  title = ''

  @observable
  checked = false

  id = ''

  constructor({ title, checked, id }) {
    this.title = title
    this.checked = checked
    this.id = id
  }

  @action.bound
  toggleCheck() {
    this.checked = !this.checked
  }

  @action.bound
  editTitle(newTitle) {
    this.title = newTitle
  }
}

export default TodoItem
