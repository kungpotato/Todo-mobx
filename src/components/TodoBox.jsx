import React from 'react'
import Paper from '@material-ui/core/Paper'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import List from '@material-ui/core/List'
import { withStyles } from '@material-ui/core/styles'
import TodoItem from './TodoItem'

const styles = theme => ({
  toolbar: {
    backgroundColor: theme.palette.primary.main
  }
})

const TodoBox = ({
  classes,
  ListTitle,
  TodoData,
  handleChange,
  handleEdit
}) => (
  <Paper style={{ margin: '24px' }}>
    <Toolbar className={classes.toolbar}>
      <Typography variant="h5" style={{ color: '#fff' }}>
        {ListTitle}
      </Typography>
    </Toolbar>
    <List>
      {TodoData.map(({ title, checked }) => (
        <TodoItem
          TodoChecked={checked}
          title={title}
          handleChange={handleChange}
          handleEdit={handleEdit}
        />
      ))}
    </List>
  </Paper>
)

export default withStyles(styles)(TodoBox)
