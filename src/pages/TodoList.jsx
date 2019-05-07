import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import { withStyles } from '@material-ui/core/styles'
import { observer, inject } from 'mobx-react'
import TodoBox from '../components/TodoBox'
import DialogEdit from '../components/DialogEdit'

const styles = theme => ({
  toolbar: {
    backgroundColor: theme.palette.primary.main
  }
})

@inject('store')
@observer
class TodoList extends Component {
  render() {
    const { store } = this.props
    return (
      <div>
        <DialogEdit
          open={store.dialogToggle}
          saveItem={store.saveItem}
          handleChange={store.handleDialogEditChange}
          handleChangeColor={store.handleChangeColor}
          removeItem={() => store.removeItem(store.editId)}
          closeDialog={() => store.toggleDialog('')}
          title={store.dialogEdit}
          colorBackGround={store.colorBackGround}
        />
        <Grid container>
          <Grid container item xs={12} justify="center">
            <Grid item xs={4}>
              <TextField
                id="standard-name"
                label=""
                margin="normal"
                fullWidth
                value={store.textTitle}
                onChange={store.handleChangeTextTitle}
              />
            </Grid>
            <Grid item xs={4}>
              <Button
                variant="contained"
                onClick={store.addItem({
                  title: store.textTitle,
                  checked: false
                })}
              >
                ADD
              </Button>
            </Grid>
          </Grid>
          <Grid item xs={6}>
            <TodoBox
              ListTitle="Doing"
              TodoData={store.doingList}
              handleChange={store.checkItem}
              handleEdit={store.toggleDialog}
            />
          </Grid>
          <Grid item xs={6}>
            <TodoBox
              ListTitle="Done"
              TodoData={store.doneList}
              handleChange={store.checkItem}
              handleEdit={store.toggleDialog}
            />
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default withStyles(styles)(TodoList)
