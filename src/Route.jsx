import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
// import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import TodoList from './pages/TodoList'
import Home from './pages/Home'

const drawerWidth = 240
const pages = [
  {
    name: 'Home',
    component: Home,
    path: '/',
    exact: true
  },
  {
    name: 'Todo List',
    component: TodoList,
    path: '/todo',
    exact: false
  }
]

const styles = theme => ({
  root: {
    display: 'flex'
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3
  }
})

const TodoRoute = ({ classes }) => (
  <Router>
    <div className={classes.root}>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper
        }}
        anchor="left"
      >
        <div className={classes.toolbar} />
        <List>
          {pages.map(({ name, path }) => (
            <React.Fragment key={path}>
              <ListItem button component={Link} to={path}>
                <ListItemText primary={name} />
              </ListItem>
              <Divider />
            </React.Fragment>
          ))}
        </List>
      </Drawer>
      <main className={classes.content}>
        {pages.map(page => (
          <Route key={page.path} {...page} />
        ))}
      </main>
    </div>
  </Router>
)

export default withStyles(styles)(TodoRoute)
