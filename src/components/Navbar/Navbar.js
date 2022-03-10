import React from 'react'
import { AppBar, Toolbar, Typography, IconButton } from '@material-ui/core'
import useStyles from './styles'
import Logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const classes = useStyles();
  return (
    <div className={classes.root}>
        <AppBar position='fixed' className={classes.appBar}>
            <Toolbar>
                <IconButton className={classes.icon} color='inherit'>
                    <img src={Logo} alt='Crypto Icon' className={classes.iconImage} />
                </IconButton>
                <Typography variant='h5'>
                    Crypto Tracker
                </Typography>

                <div className={classes.grow} />

                <Typography variant='h6' component={Link} to='/cryptocurrencies' className={classes.Link}>
                    Cryptocurrencies
                </Typography>

                <Typography variant='h6' component={Link} to='/news' className={classes.Link}>
                    News
                </Typography>
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default Navbar