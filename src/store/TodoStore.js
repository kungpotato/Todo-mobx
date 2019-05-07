import { observable, configure, action, runInAction, computed } from 'mobx'
import uuid from 'uuid/v1'
import TodoItem from './TodoItem'

configure({ enforceActions: 'always' })

class TodoStore {
  @observable.shallow
  todoList = []

  @observable
  dialogToggle = false

  @observable
  textTitle = ''

  @observable
  dialogEdit = ''

  @observable
  editId = ''

  @observable
  colorBackGround = ''

  @computed
  get doingList() {
    return this.todoList.filter(each => each.checked === false)
  }

  @computed
  get doneList() {
    return this.todoList.filter(each => each.checked === true)
  }

  @action.bound
  handleChangeColor({ target: { value } }) {
    this.colorBackGround = value
  }

  @action.bound
  handleChangeTextTitle({ target: { value } }) {
    this.textTitle = value
  }

  @action.bound
  handleDialogEditChange({ target: { value } }) {
    this.dialogEdit = value
  }

  @action.bound
  toggleDialog(id) {
    this.dialogToggle = !this.dialogToggle
    this.editId = id
    const item = this.todoList.find(each => each.id === id)
    if (item) {
      this.dialogEdit = item.title
      this.colorBackGround = item.editBackGroundColor
    } else {
      console.error('notfound', id)
    }
  }

  checkItem = id => () => {
    const item = this.todoList.find(each => each.id === id)
    if (item) {
      item.toggleCheck()
    }
  }

  addItem = ({ title, checked }) => () => {
    runInAction(() => {
      this.todoList.push(new TodoItem({ title, checked, id: uuid() }))
      this.textTitle = ''
    })
  }

  @action.bound
  saveItem() {
    const item = this.todoList.find(each => each.id === this.editId)
    if (item) {
      item.editTitle(this.dialogEdit)
      item.editColor(this.colorBackGround)
    } else {
      console.error('item not found')
    }
    this.toggleDialog('')
  }

  @action.bound
  removeItem(id) {
    const item = this.todoList.find(each => each.id === id)
    if (item) {
      this.todoList.remove(item)
    } else {
      console.error('item not found')
    }
    this.toggleDialog('')
  }
}

export default TodoStore
