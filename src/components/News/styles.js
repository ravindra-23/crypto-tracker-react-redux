import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
    rootNews: {
        width: '90%',
        margin: '0 auto',
    },

    toolbar: theme.mixins.toolbar,

    newsCard: {
        padding: theme.spacing(1),
        backgroundColor: '#f2f6f6',
    },

    newsHeader: {
        display: 'flex',
        justifyContent: 'space-between',
    },

    newsHeading: {
        width: '70%',
    },

    thumbnail: {
        width: '100px',
        height: '80px',
    },

    newsProvider: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        [theme.breakpoints.down('xs')]: {
            flexDirection: 'column',
            alignItems: 'start'
        }
    },

    providerInfo: {
        display: 'flex',
        alignItems: 'center'
    },

    avatar: {
        marginRight: theme.spacing(2),
    },

    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },

      selectCategory: {
        width: 170
    },

    newsUrl: {
        textDecoration: 'none',
        fontWeight: 700,
        color: '#4c269a'
    }
}))