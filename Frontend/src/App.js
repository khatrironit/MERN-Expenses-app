import React from 'react';
import logo from './logo.svg';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import AddForm from './components/AddForm';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: 'white',
    background:'transparent',
  },
  borderBottom : {
    borderBottom : '1px solid #b07ff6',
    marginBottom : '8vh'
  },
  title:{
    color : 'white',paddingBottom:'0px',marginBottom:'0px',fontFamily:'sans-serif'
  },
  total : {
    color : 'white',paddingBottom:'0px',marginBottom:'0px',fontWeight : 'lighter'
  },
  price : {
    color : 'white',paddingBottom:'0px',marginBottom :'0px',marginTop:'12px',fontWeight : 'lighter'
  }
}));

function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <br /><br />
      <Grid container spacing={1} justify="center">

          <Grid item container  xs={11} className = {classes.borderBottom}>

              <Grid item lg = {3} xl = {3} md = {3} xs = {11} sm = {5} >
                <h1 className = {classes.title}>MY  EXPENSES</h1>
              </Grid>
              <Grid item lg xl md xs sm></Grid>
              <Grid item container lg = {3} xl = {3} md = {3} xs = {11} sm = {5} spacing={3} justify="center">
                <Grid item  >
                  <h2 className = {classes.total}>Total </h2>
                </Grid>
                <Grid item >
                  <h1 className = {classes.price}> 500</h1>
                </Grid>
              </Grid>

          </Grid>
          <Grid item container spacing={10} justify="center">
            <Grid item xs={4}>
              <Paper className={classes.paper}><AddForm /></Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper className={classes.paper}></Paper>
            </Grid>
          </Grid>
          
      </Grid>
    </div>
  );
}

export default App;
