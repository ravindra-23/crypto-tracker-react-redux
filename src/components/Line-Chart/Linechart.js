import { Typography } from '@material-ui/core';
import React from 'react'
import { Line } from 'react-chartjs-2'
import useStyles from './styles'

const Linechart = ({ coinHistory, currentPrice, coinName }) => {
    const classes = useStyles();
    const coinPrice = [];
    const coinTimestamp = [];

    for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
        coinPrice.push(coinHistory?.data?.history[i].price);
    }

    for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
        coinTimestamp.push(new Date(coinHistory?.data?.history[i].timestamp * 1000).toLocaleDateString());
    }

    const data = {
        labels: coinTimestamp,
        datasets: [
        {
            label: 'Price In USD',
            data: coinPrice,
            fill: false,
            backgroundColor: '#0071bd',
            borderColor: '#0071bd',
        },
        ],
    };

    const options = {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      };

  return (
    <>
        <div className={classes.chartHeader}>
            <Typography variant='h5' className={classes.title}>{coinName} Price Chart </Typography>
            <div className={classes.priceSection}>
                <Typography variant='h6' className={classes.priceChange}>Change: {coinHistory?.data?.change}%</Typography>
                <Typography variant='h6' className={classes.priceCurrent}>Current {coinName} Price: $ {currentPrice}</Typography>
            </div>
        </div>
        <Line data={data} options={options} />
    </>
  )
}

export default Linechart