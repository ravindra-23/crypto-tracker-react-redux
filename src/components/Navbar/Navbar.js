import React, { useState } from 'react'
import { AppBar, Toolbar, Typography, IconButton, Menu, MenuItem, createTheme, ThemeProvider } from '@material-ui/core'
import useStyles from './styles'
import Logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'
import MenuIcon from '@material-ui/icons/Menu';

const Navbar = () => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState(null)
    const open = Boolean(anchorEl);
    console.log(anchorEl)

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const theme = createTheme();
    theme.typography.h5 = {
        fontSize: '1.5rem',
        [theme.breakpoints.down('sm')]: {
            fontSize: '1rem',
        },
    }
  return (
    <div className={classes.root}>
        <AppBar position='fixed' className={classes.appBar}>
            <Toolbar>
                <IconButton 
                    className={classes.icon} 
                    color='inherit'
                >
                    <img src={Logo} alt='Crypto Icon' className={classes.iconImage} />
                </IconButton>
                <ThemeProvider theme={theme}>
                    <Typography variant='h5' component={Link} to='/' className={classes.title}>
                        Crypto Tracker
                    </Typography>
                </ThemeProvider>

                <div className={classes.grow} />

                <Typography variant='body1' component={Link} to='/cryptocurrencies' className={classes.Link}>
                    Cryptocurrencies
                </Typography>

                <Typography variant='body1' component={Link} to='/news' className={classes.Link}>
                    News
                </Typography>

                <div className={classes.mobileMenu}>
                    <IconButton color='inherit' onClick={handleClick}>
                        <MenuIcon />
                    </IconButton>
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                    >
                        <MenuItem onClick={handleClose} component={Link} to='/cryptocurrencies'>Cryptocurrencies</MenuItem>
                        <MenuItem onClick={handleClose} component={Link} to='/news'>News</MenuItem>
                    </Menu>
                </div>
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default Navbar