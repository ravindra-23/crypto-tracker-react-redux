import React from 'react'
import { makeStyles } from '@material-ui/core';
import { CircularProgress } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
      marginLeft: theme.spacing(4)
    },
  }));

const Loader = () => {
    const classes = useStyles();
  return (
    <div className={classes.root}>
        <CircularProgress />
    </div>
  )
}

export default Loader