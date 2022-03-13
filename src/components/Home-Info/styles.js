import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
    Home: {
        marginTop: '100px',
        width: '90%',
        margin: '0 auto',
    },

    title: {
        fontWeight: 700,
        color: '#4c269a',
        textAlign: 'center',
    },

    global: {
        marginTop: '50px',
    },
    
    listItem: {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
            textAlign: 'center'
        },
    },

    list: {
        marginBottom: '50px'
    },

    card: {
        padding: '20px',
    },

    cardHeader: {
        display: 'flex',
        justifyContent: 'space-between'
    },

    image: {
        width: '50px',
        backgroundColor: 'inherit'
    },

    topCurrency: {
        marginTop: '50px',
    },

    topNews: {
        marginTop: '50px'
    },

}))