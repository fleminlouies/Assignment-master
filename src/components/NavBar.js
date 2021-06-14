import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    container: {
      marginLeft: "auto",
    },
    NavBar:{
      background:"#211F21",
      borderRadius:0
    },
    login:{
      background:"#93227F",
      borderRadius: 30 ,
      padding: "15px 30px",
      margin: "10px 0px"
    }
  }));

export default function NavBar() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
        <AppBar position="static" className={classes.NavBar}>
          <Toolbar>
            <div className={classes.container}>
              <Button color="inherit"  className={classes.login}>Login</Button>
              <Button color="inherit">Sing up</Button>
            </div>
          </Toolbar>
        </AppBar>
      </div>
    )
}
