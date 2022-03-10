import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import useStyles from './styles'
import { useGetCryptosQuery } from '../../services/cryptoApi'
import millify from 'millify'
import {Cryptocurrencies, News} from '../index'

const HomeInfo = () => {
    const classes = useStyles()
    const { data, isFetching } = useGetCryptosQuery();
    const globalStats = data?.data?.stats
    if(isFetching) return 'Loading...'
    console.log(globalStats)

    console.log(data)
  return (
    <div className={classes.Home}>
        <div className={classes.global}>
            <Grid container spacing={2} justifyContent='center'>
                <Grid item xs={12}>
                    <Typography variant='h4' className={classes.title} gutterBottom>Global Crypto Stats</Typography>
                </Grid>

                <Grid item xs={6} className={classes.listItem}>
                    <div className={classes.list}>
                        <Typography variant='subtitle1'>Total Cryptocurrencies</Typography>
                        <Typography variant='h4'>{globalStats.total.toLocaleString()}</Typography>
                    </div>
                    <div className={classes.list}>
                        <Typography variant='subtitle1'>Total Exchanges</Typography>
                        <Typography variant='h4'>{globalStats.totalExchanges}</Typography>
                    </div>
                    <div className={classes.list}>
                        <Typography variant='subtitle1'>Total Market Cap</Typography>
                        <Typography variant='h4'>${millify(globalStats.totalMarketCap)}</Typography>
                    </div>
                </Grid>
                <Grid item xs={6} className={classes.listItem}>
                    <div className={classes.list}>
                        <Typography variant='subtitle1'>Total 24h Volume</Typography>
                        <Typography variant='h4'>${millify(globalStats.total24hVolume)}</Typography>
                    </div>
                    <div className={classes.list}>
                        <Typography variant='subtitle1'>Total Coins</Typography>
                        <Typography variant='h4'>{globalStats.totalCoins.toLocaleString()}</Typography>
                    </div>
                    <div className={classes.list}>
                        <Typography variant='subtitle1'>Total Markets</Typography>
                        <Typography variant='h4'>{globalStats.totalMarkets.toLocaleString()}</Typography>
                    </div>
                </Grid>
            </Grid>
        </div>

        <div className={classes.topCurrency}>
            <Grid container spacing={4}>
                <Grid item xs={12}>
                    <Typography variant='h4' className={classes.title} gutterBottom>Top 10 Cryptos</Typography>
                </Grid>
                <Cryptocurrencies simplified />
            </Grid>
        </div>

        <div className={classes.topNews}>
            <Grid container spacing={4}>
                <Grid item xs={12}>
                    <Typography variant='h4' className={classes.title} gutterBottom>Latest Crypto News</Typography>
                </Grid>
                <News simplified />
            </Grid>
        </div>
    </div>
  )
}

export default HomeInfo