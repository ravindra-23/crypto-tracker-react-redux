import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({

    rootCard: {
        width: '90%',
        margin: '0 auto',
        marginTop: '20px'
    },

    toolbar: theme.mixins.toolbar,

    card: {
        maxWidth: '400px',
        cursor: 'pointer',
    },

    cardHeader: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: '20px',
        borderBottom: '1px solid black',
    },

    icon: {
        width: '40px',
        height: '40px',
    },

    link: {
        textDecoration: 'none'
    }
}))