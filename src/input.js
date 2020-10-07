import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: { 
    '& > *': {
      margin: theme.spacing(1),
    
    },
  },
  pu:{
    marginTop:'60px',
    width:'96%', 
    height:'50px',
  },
  put:{
    marginTop:'30px',
    marginBottom:'20px',
    width:'96%'      
}
}));

export default function BasicTextFields() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField  label="Enter Name" className={classes.put} />
      <TextField  label="Enter Password" className={classes.put} />
      <Button variant="contained" color="primary" className={classes.pu}>
        Login
      </Button>
    </form>
  );
}
