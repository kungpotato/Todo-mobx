import React from 'react'
import Dialog from '@material-ui/core/Dialog'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'

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
const DialogEdit = ({
  open,
  saveItem,
  removeItem,
  closeDialog,
  handleChange,
  title,
  colorBackGround,
  handleChangeColor
}) => (
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
)

export default DialogEdit
