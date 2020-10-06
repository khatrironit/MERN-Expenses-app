import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';

export default class AddForm extends Component {

    render() {
        return (
            <Grid container justify = 'center'>
                <Grid item>
                    <input className = 'input' type = 'text' placeholder = 'Title'></input>
                </Grid>
            </Grid>
        )
    }
}
