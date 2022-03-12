import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
    icon: {
        marginRight: '10px',
    }, 

    title: {
        textDecoration: 'none',
        letterSpacing: '2px',
        color: 'inherit',
    },

    iconImage: {
        width: '40px',
        height: 'auto',
    }, 

    grow: {
        flexGrow: 1,
    }, 

    Link: {
        textDecoration: 'none',
        marginLeft: '40px',
        color: 'inherit',
        letterSpacing: '1px',
        [theme.breakpoints.down('xs')]: {
            display: 'none',
        }
    },

    mobileMenu: {
        [theme.breakpoints.up('sm')]: {
            display: 'none'
        }
    }


}))