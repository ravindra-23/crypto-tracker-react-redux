import React from 'react'
import { useParams } from 'react-router-dom'
import millify from 'millify'
import Loader from '../Loader/Loader'
import HTMLReactParser from 'html-react-parser'
import { useGetCryptoDetailsQuery, useGetCryptoHistoryQuery } from '../../services/cryptoApi'
import useStyles from './styles'
import { Grid, Typography } from '@material-ui/core'
import {  MonetizationOnOutlined, FormatListNumberedOutlined, OfflineBoltOutlined, VerticalAlignTopOutlined, TrendingUpOutlined, CheckOutlined, HighlightOffOutlined, ErrorOutlineOutlined, AccountBalanceOutlined } from '@material-ui/icons'
import Linechart from '../Line-Chart/Linechart'

const Cryptodetails = () => {
    const classes = useStyles();
    const { coinId } = useParams();
    const { data, isFetching } = useGetCryptoDetailsQuery(coinId)
    const { data: coinHistory } = useGetCryptoHistoryQuery({ coinId })
    const cryptoDetails = data?.data?.coin;

    if(isFetching) return <Loader />

    const stats = [
        { title: 'Price to USD', value: `$ ${cryptoDetails?.price && millify(cryptoDetails?.price)}`, icon: <MonetizationOnOutlined /> },
        { title: 'Rank', value: cryptoDetails?.rank, icon: <FormatListNumberedOutlined /> },
        { title: '24h Volume', value: `$ ${cryptoDetails?.volume && millify(cryptoDetails?.volume)}`, icon: <OfflineBoltOutlined /> },
        { title: 'Market Cap', value: `$ ${cryptoDetails?.marketCap && millify(cryptoDetails?.marketCap)}`, icon: <MonetizationOnOutlined /> },
        { title: 'All-time-high(daily avg.)', value: `$ ${cryptoDetails?.allTimeHigh?.price && millify(cryptoDetails?.allTimeHigh?.price)}`, icon: <VerticalAlignTopOutlined /> },
    ];

    const genericStats = [
        { title: 'Number Of Markets', value: cryptoDetails?.numberOfMarkets, icon: <TrendingUpOutlined /> },
        { title: 'Number Of Exchanges', value: cryptoDetails?.numberOfExchanges, icon: <AccountBalanceOutlined /> },
        { title: 'Aprroved Supply', value: cryptoDetails?.supply?.confirmed ? <CheckOutlined /> : <HighlightOffOutlined />, icon: <ErrorOutlineOutlined /> },
        { title: 'Total Supply', value: `$ ${cryptoDetails?.supply?.total && millify(cryptoDetails?.supply?.total)}`, icon: <ErrorOutlineOutlined /> },
        { title: 'Circulating Supply', value: `$ ${cryptoDetails?.supply?.circulating && millify(cryptoDetails?.supply?.circulating)}`, icon: <ErrorOutlineOutlined /> },
    ];


  return (
    <div className={classes.detailContainer}>
        <div className={classes.toolbar} />
        <div className={classes.titleContainer}>
            <Typography variant='h4' gutterBottom className={classes.mainTitle}>
                {data?.data?.coin.name} ({data?.data?.coin.symbol}) Price
            </Typography>
            <Typography paragraph>
                {cryptoDetails?.name} live price in US Dollar (USD). View value statistics, market cap and supply.
            </Typography>
        </div>

        <div className={classes.chartSection}>
            <div className={classes.chart}>
                <Linechart coinHistory={coinHistory} currentPrice={millify(cryptoDetails?.price)} coinName={cryptoDetails?.name} />
            </div>
        </div>

        <div className={classes.statsContainer}>
            <Grid container spacing={8}>
                <Grid item xs={12} lg={6} md={8}>
                    <div className={classes.coinValueHeader}>
                        <Typography variant='h5' gutterBottom className={classes.statsHeading}>
                            {cryptoDetails?.name} Value Statistics
                        </Typography>
                        <Typography paragraph gutterBottom>
                            An overview showing the statistics of {cryptoDetails?.name}, such as the base and quote currency, the rank, and trading volume.
                        </Typography>
                    </div>
                        {stats.map(({ title, value, icon }) => (
                            <div className={classes.coinStats}>
                                <div className={classes.statsName}>
                                    <Typography className={classes.icon}>{icon}</Typography>
                                    <Typography className={classes.title}>{title}</Typography>
                                </div>
                                <Typography className={classes.statsValue}>{value}</Typography>
                            </div>
                        ))}
                </Grid>

                <Grid item xs={12} lg={6} md={8}>
                    <div className={classes.coinValueHeader}>
                        <Typography variant='h5' gutterBottom className={classes.statsHeading}>
                            Other Stats Info
                        </Typography>
                        <Typography paragraph gutterBottom>
                            An overview showing the statistics of {cryptoDetails?.name}, such as the base and quote currency, the rank, and trading volume.
                        </Typography>
                    </div>
                        {genericStats.map(({ title, value, icon }) => (
                            <div className={classes.coinStats}>
                                <div className={classes.statsName}>
                                    <Typography className={classes.icon}>{icon}</Typography>
                                    <Typography className={classes.title}>{title}</Typography>
                                </div>
                                <Typography className={classes.statsValue}>{value}</Typography>
                            </div>
                        ))}
                </Grid>
            </Grid>
        </div>

        <div className={classes.coinLinks}>
            <Grid container spacing={8}>
                <Grid item xs={12} lg={6} md={8}>
                    <Typography variant='h5' className={classes.linkTitle}>
                        What is {cryptoDetails?.name}?
                    </Typography>
                    {HTMLReactParser(cryptoDetails?.description)}
                </Grid>

                <Grid item xs={12} lg={6} md={8}>
                    <div className={classes.linksSection}>
                        <Typography variant='h5' gutterBottom className={classes.linkHeading}>{cryptoDetails?.name} Links</Typography>
                        {cryptoDetails.links?.map((link) => (
                            <div className={classes.links}>
                                <Typography variant='h5' className={classes.linkType}>{link.type}</Typography>
                                <a href={link.url} target="_blank" rel="noreferrer" className={classes.linkTag}>{link.name}</a>
                            </div>
                        ))}
                    </div>
                </Grid>
            </Grid>
        </div>
    </div>
  )
}

export default Cryptodetails