import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({

    rootCard: {
        width: '90%',
        margin: '0 auto',
        marginTop: '20px'
    },

    toolbar: theme.mixins.toolbar,

    form: {
        marginBottom: '20px'
    },

    card: {
        maxWidth: '500px',
        cursor: 'pointer',
        background: '#f2f6f6',
    },

    cardHeader: {
        display: 'flex',
        justifyContent: 'space-between',
        borderBottom: '1px solid #b7e4c7',
    },

    icon: {
        width: '40px',
        height: '40px',
    },

    link: {
        textDecoration: 'none'
    },

    info: {
        fontWeight: '400',
        paddingBlock: '15px'
    }
}))