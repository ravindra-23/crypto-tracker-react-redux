import React, { useState } from 'react'
import { Avatar, Card, CardContent, CardMedia, FormControl, Grid, InputLabel, MenuItem, Select, Typography } from '@material-ui/core'
import { useGetCryptoNewsQuery } from '../../services/cryptoNewsApi'
import Loader from '../Loader/Loader'
import useStyles from './styles'
import moment from 'moment'
import { useGetCryptosQuery } from '../../services/cryptoApi'

const demoImage = 'https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News';

const News = ( { simplified } ) => {
  const { data } = useGetCryptosQuery(100);
  const [newsCategory, setNewsCategory] = useState('Crryptocurrency')
  const classes = useStyles()
  const { data: cryptoNews } = useGetCryptoNewsQuery({ newsCategory, count: simplified ? 6 : 12 })
  console.log(cryptoNews)
  if (!cryptoNews?.value) return <Loader />;
  return (
    <div className={classes.rootNews}>
      <Grid container spacing={4} justifyContent='center'>
        <Grid item xs={12}>
          {simplified &&  (
            <FormControl autoWidth className={classes.formControl} variant='outlined'>
              <InputLabel>Cryptocurrency</InputLabel>
              <Select
                className={classes.selectCategory}
                onChange={(event) => setNewsCategory(event.target.value)}
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
              >
                <MenuItem value='Cryptocurrency'>Cryptocurrency</MenuItem>
                {data?.data?.coins?.map((currency) => <MenuItem value={currency.name}>{currency.name}</MenuItem>)}
              </Select>
            </FormControl>
          )}
        </Grid>
        {cryptoNews?.value.map((news, i) => (
          <Grid item xs={12} sm={6} md={4} lg={4} key={i}>
            <Card className={classes.newsCard}>
              <CardContent className={classes.newsHeader}>
                <Typography variant='h6' className={classes.newsHeading}>{news.name}</Typography>
                <CardMedia image={news?.image?.thumbnail?.contentUrl || demoImage} className={classes.thumbnail} />
              </CardContent>
              <CardContent className={classes.newsContent}>
                <Typography variant='body1'>{news.description.length > 100 ? `${news.description.substring(0, 100)}...` : news.description}</Typography>
              </CardContent>
              <CardContent className={classes.newsProvider}>
                <div className={classes.providerInfo}>
                  <Avatar className={classes.avatar} src={news.provider[0]?.image?.thumbnail?.contentUrl || demoImage} />
                  <Typography variant='h6'>{news.provider[0]?.name}</Typography>
                </div>
                <Typography paragraph className={classes.time}>{moment(news.datePublished).startOf('ss').fromNow()}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

export default News