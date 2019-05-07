import React, { Component } from 'react'
import Dialog from '@material-ui/core/Dialog'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import { observer } from 'mobx-react'
import { observable, action } from 'mobx'
import { ChromePicker } from 'react-color'

const style = {
  dialogStyle: {
    width: '600px',
    minHeight: '100px'
  },
  ButtonStyle: {
    marginLeft: '12px'
  },
  removeButtonStyle: {
    marginLeft: '12px',
    backgroundColor: '#f45942',
    color: '#fff'
  }
}

@observer
class DialogEdit extends Component {
  @observable
  colorBG = ''

  @observable
  dialogOpen = false

  @action
  handleChangeComplete = ({ hex }) => {
    const { handleChangeColor } = this.props
    handleChangeColor({ target: { value: hex } })
    this.colorBG = hex
  }

  @action.bound
  toggleDialog() {
    const { colorBackGround } = this.props
    this.dialogOpen = !this.dialogOpen
    if (this.dialogOpen) {
      this.colorBG = colorBackGround
    } else {
      this.colorBG = ''
    }
  }

  render() {
    const {
      open,
      saveItem,
      removeItem,
      closeDialog,
      handleChange,
      title,
      colorBackGround,
      handleChangeColor
    } = this.props
    return (
      <React.Fragment>
        <Dialog open={this.dialogOpen}>
          <Button onClick={this.toggleDialog}>close</Button>
          <ChromePicker
            color={this.colorBG}
            onChangeComplete={this.handleChangeComplete}
          />
        </Dialog>
        <Dialog open={open}>
          <Paper style={style.dialogStyle}>
            <Grid container style={{ padding: '24px' }}>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  label="Title"
                  value={title}
                  onChange={handleChange}
                />
                <TextField
                  onClick={this.toggleDialog}
                  fullWidth
                  label="color code"
                  value={colorBackGround}
                  onChange={handleChangeColor}
                />
              </Grid>
              <Grid item xs={6}>
                <Button
                  variant="contained"
                  color="primary"
                  style={style.ButtonStyle}
                  onClick={saveItem}
                >
                  Save
                </Button>
                <Button
                  variant="contained"
                  style={style.removeButtonStyle}
                  onClick={removeItem}
                >
                  Remove
                </Button>
                <Button
                  variant="contained"
                  style={style.ButtonStyle}
                  onClick={closeDialog}
                >
                  Close
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </Dialog>
      </React.Fragment>
    )
  }
}

export default DialogEdit
