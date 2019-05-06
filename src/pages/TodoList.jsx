import React from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import { withStyles } from '@material-ui/core/styles'
import TodoBox from '../components/TodoBox'

const styles = theme => ({
  toolbar: {
    backgroundColor: theme.palette.primary.main
  }
})

const TodoList = () => {
  return (
    <div>
      <Grid container>
        <Grid container item xs={12} justify="center">
          <Grid item xs={4}>
            <TextField id="standard-name" label="" margin="normal" fullWidth />
          </Grid>
          <Grid item xs={4}>
            <Button variant="contained">ADD</Button>
          </Grid>
        </Grid>
        <Grid item xs={6}>
          <TodoBox
            ListTitle="Doing"
            TodoData={[{ checked: false, title: 'rtyhrt' }]}
          />
        </Grid>
        <Grid item xs={6}>
          <TodoBox
            ListTitle="Done"
            TodoData={[{ checked: true, title: 'rtyhrt' }]}
          />
        </Grid>
      </Grid>
    </div>
  )
}

export default withStyles(styles)(TodoList)
