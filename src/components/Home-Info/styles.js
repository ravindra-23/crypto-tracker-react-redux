import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
    Home: {
        marginTop: '100px',
    },

    title: {
        marginLeft: '40px',
        marginBottom: '20px'
    },
    
    listItem: {
        display: 'flex',
        justifyContent: 'space-around',
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
        marginTop: '50px'
    },

    topNews: {
        marginTop: '50px'
    },

}))