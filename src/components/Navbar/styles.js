import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
    icon: {
        marginRight: theme.spacing(2),
        backgroundColor: 'inherit',
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
        color: 'inherit'
    }
}))