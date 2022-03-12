import React, { useState, useEffect } from 'react'
import { useGetCryptosQuery } from '../../services/cryptoApi'
import millify from 'millify'
import { Card, CardContent, CardMedia, Grid, TextField, Typography } from '@material-ui/core';
import useStyles from './styles'
import { Link } from 'react-router-dom';
import Loader from '../Loader/Loader'

const Cryptocurrencies = ( {simplified} ) => {
    const count = simplified ? 10 : 100;
    const { data: cryptosList, isFetching } = useGetCryptosQuery(count);
    const [cryptos, setCryptos] = useState();
    const [search, setSearch] = useState('');
    const classes = useStyles()

    useEffect(() => {
        setCryptos(cryptosList?.data?.coins);
    
        const filteredData = cryptosList?.data?.coins.filter((item) => item.name.toLowerCase().includes(search));
    
        setCryptos(filteredData);
      }, [cryptosList, search]);

    if(isFetching) return <Loader />
  return (
      <div className={classes.rootCard}>
        <div className={classes.toolbar} />
        {!simplified && (
            <form className={classes.form}>
                <TextField 
                    label='Search' 
                    variant='outlined'
                    onChange={(e) => setSearch(e.target.value.toLowerCase())}
                />
            </form>
        )}
        <Grid container spacing={4} justifyContent='center'>
            {cryptos?.map((crypto) => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={crypto.uuid} component={Link} to={`/crypto/${crypto.uuid}`} className={classes.link}>
                    <Card className={classes.card}>
                        <CardContent className={classes.cardHeader}>
                            <Typography variant='h5'>{crypto.rank}. {crypto.name}</Typography>
                            <CardMedia image={crypto.iconUrl} className={classes.icon} />
                        </CardContent>
                        <CardContent className={classes.cardContent}>
                            <Typography variant='body1' className={classes.info}>Price: {millify(crypto.price)}</Typography>
                            <Typography variant='body1' className={classes.info}>Market Cap: {millify(crypto.marketCap)}</Typography>
                            <Typography variant='body1' className={classes.info}>Daily Change: {crypto.change}%</Typography>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid>
      </div>
  )
}

export default Cryptocurrencies