import React from 'react';
import { Card, CardContent, Typography, Grid, Paper, makeStyles } from '@material-ui/core';
import './cart.css';

const useStyles = makeStyles({
    chart: {
        paddingLeft: 20,
    },
    confirmed: {
        backgroundColor: '#ED5127',
        color: '#fff',
    }, recovered: {
        backgroundColor: '#3C8104',
        color: '#fff',
    },
    deaths: {
        backgroundColor: '#000000',
        color: '#fff',
    }
});

function Cart(props) {
    const { data: { deaths, lastUpdate, recovered, confirmed } } = props;
    const classes = useStyles();
    if (!confirmed) {
        return 'loading ...';
    }
    return (
        <Grid className={classes.chart}>
            <Grid container xs={12} spacing={3} backgroud="red">
                <Grid item xs={4} >
                    <Paper >
                        <Card className={classes.confirmed}>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Confirmed : {confirmed.value}
                                </Typography>
                                <Typography variant="body2" color="red" component="p">
                                    Update date : {new Date(lastUpdate).toDateString()}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Paper>
                </Grid>
                <Grid item xs={4}>
                    <Paper>
                        <Card className={classes.recovered}>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Recovered : {recovered.value}
                                </Typography>
                                <Typography variant="body2" color="white" component="p">
                                    Update date : {new Date(lastUpdate).toDateString()}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Paper>
                </Grid>
                <Grid item xs={4}>
                    <Paper>
                        <Card className={classes.deaths}>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Deaths : {deaths.value}
                                </Typography>
                                <Typography variant="body2" color="white" component="p">
                                    Update date : {new Date(lastUpdate).toDateString()}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Paper>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default Cart;