import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
    detailContainer: {
        width: '90%',
        margin: '0 auto',
        marginTop: '50px'
    },

    mainTitle: {
        fontWeight: 700,
        color: '#4c269a',
    },

    statsHeading: {
        fontWeight: 700,
        color: '#4c269a',
    },

    toolbar: theme.mixins.toolbar,

    statsContainer: {
        marginBottom: '60px'
    },

    titleContainer: {
        textAlign: 'center',
        marginBottom: '100px',
    },

    coinStats: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottom: '1px solid #b7e4c7',
        padding: theme.spacing(2)
    },

    statsName: {
        display: 'flex',
        // alignItems: 'center'
    },

    icon: {
        marginRight: theme.spacing(2),
    },
    
    statsValue: {
        fontWeight: 700,
    },

    linkTitle: {
        fontWeight: 700,
        color: '#4c269a',
    },

    links: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: theme.spacing(3),
        borderBottom: '1px solid #b7e4c7',
    },

    linkTag: {
        textDecoration: 'none',
        fontWeight: 700,
        color: '#4c269a',
    },

    linkHeading: {
        fontWeight: 700,
        color: '#4c269a',
    },

    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },

    selectTime: {
        marginBottom: '50px',
    },

    chartSection: {
        marginBottom: '100px',
    }
}))