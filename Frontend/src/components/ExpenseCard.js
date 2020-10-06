import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper';

export default class ExpenseCard extends Component {
    render() {
        const { data } = this.props
        return (
            <Grid item container xs = {11} spacing={0} justify="center">
                <Grid item xs = {1}></Grid>
                <Grid item xs = {9}>
                    <Paper className = "card-paper">
                        <Grid Container spacing={1}>
                            <Grid item xs = {12} ><p className = "pd-mg-0 card-date">{data.date}</p></Grid>
                            <Grid item container xs = {12} spacing={0}>
                                <Grid item xs = {4} ><h3 className = "pd-mg-0 card-title">{data.title}</h3></Grid>
                                <Grid item xs></Grid>
                                <Grid item xs = {4}><h3 className = "pd-mg-0 card-amount">Rs {data.amount}</h3></Grid>
                            </Grid>
                            <Grid item xs = {12}><p className = "pd-mg-0 card-note"><strong>NOTE : </strong>{data.note}</p></Grid>
                        </Grid>
                    </Paper>
                </Grid>
                <Grid item xs = {1}></Grid>
            </Grid>
        )
    }
}
