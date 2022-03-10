import React, { useState } from 'react'
import { useGetCryptosQuery } from '../../services/cryptoApi'
import millify from 'millify'
import { Card, CardContent, CardMedia, Grid, styled, Typography } from '@material-ui/core';
import useStyles from './styles'

const Cryptocurrencies = ( {simplified} ) => {
    const count = simplified ? 10 : 100;
    const { data: cryptosList, isFetching } = useGetCryptosQuery(count);
    const [cryptos, setCryptos] = useState(cryptosList ?.data ?.coins)
    const classes = useStyles()
    if(isFetching) return 'Loading...'
  return (
      <div className={classes.rootCard}>
        <Grid container spacing={4} justifyContent='center'>
            {cryptos?.map((crypto) => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={crypto.uuid}>
                    <Card className={classes.card}>
                        <div className={classes.cardHeader}>
                            <Typography variant='h5'>{crypto.rank}. {crypto.name}</Typography>
                            <CardMedia image={crypto.iconUrl} className={classes.icon} />
                        </div>
                        <CardContent className={classes.cardContent}>
                            <Typography variant='h6'>Price: {millify(crypto.price)}</Typography>
                            <Typography variant='h6'>Market Cap: {millify(crypto.marketCap)}</Typography>
                            <Typography variant='h6'>Daily Change: {crypto.change}%</Typography>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid>
      </div>
  )
}

export default Cryptocurrencies