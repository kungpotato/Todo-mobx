import React from 'react'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Checkbox from '@material-ui/core/Checkbox'
import Button from '@material-ui/core/Button'

const TodoItem = ({ TodoChecked, handleChange, title, handleEdit }) => (
  <ListItem>
    <Checkbox checked={TodoChecked} onChange={handleChange} value="" />
    <ListItemText primary={title} />
    <Button onClick={handleEdit}>Edit</Button>
  </ListItem>
)

export default TodoItem
