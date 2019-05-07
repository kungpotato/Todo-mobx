import React from 'react'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Checkbox from '@material-ui/core/Checkbox'
import Button from '@material-ui/core/Button'

const TodoItem = ({ TodoChecked, handleChange, title, handleEdit, id }) => (
  <ListItem>
    <Checkbox checked={TodoChecked} onChange={handleChange(id)} value="" />
    <ListItemText primary={title} />
    <Button onClick={() => handleEdit(id)}>Edit</Button>
  </ListItem>
)

export default TodoItem
