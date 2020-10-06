import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'
import ExpenseCard from './ExpenseCard'
export default class ExpenseList extends Component {
    render() {
        const {expenses} = this.props;
        return (
            <Grid container>
                {expenses.map((expense,index)=><ExpenseCard key = {index} data = {expense} />)}                
            </Grid>
        )
    }
}
