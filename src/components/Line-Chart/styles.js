import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
    chartHeader: {
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: '20px',
    },

    title: {
        fontWeight: 700,
        color: '#4c269a',
    },

    priceSection: {
        display: 'flex',
    },

    priceChange: {
        marginRight: '40px'
    }
}))