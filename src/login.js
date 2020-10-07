import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import BasicTextFields from './input'


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16),
    },
  },
  re:{
      fontSize:'40px',
      color:'black',
    textAlign:'center',
    
  },
  box:{
      height:'400px',
      width:'30%',
      margin: '0 auto',
      marginTop: '50px',
  },
}));

export default function SimplePaper() {
  const classes = useStyles();

  return (
    <div className={classes.root}>

      <Paper elevation={3} className={classes.box}>
          <div className={classes.re}><b>Registration</b></div>
      <BasicTextFields/>
</Paper>      
    </div>
  );
}
