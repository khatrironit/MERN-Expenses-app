import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';

export default class AddForm extends Component {
    constructor(){
        super()
        this.state = {
            title : "",
            amount : "",
            note : "",
            date : "",
            errorMessage : ""
        }
    }
    onChangeHandler = (e,key)=>{
        this.setState({[key] : e.target.value});
    }
    onFocus = (e,key) =>{
        
    }
    addExpense = () => {
        console.log(this.state)
        const {title, amount, note, date} = this.state;
        if(title === "" || amount === "" || note === "" || date === ""){
            this.setState({errorMessage : "All Fields Are Mandatory."})
        }
    }
    render() {
        return (
            <Grid container justify = 'center'spacing={3}>
                <Grid item xs = {10}>
                    {this.state.errorMessage === ""?"":<p className = "error"><small>{this.state.errorMessage}</small></p>}
                </Grid>
                <Grid item xs = {10}>
                    <input className = 'input' type = 'text' placeholder = 'Title' onFocus = {(e)=>this.onFocus(e,"title")} onChange = {(e)=>this.onChangeHandler(e,"title")}></input>
                </Grid>
                <Grid item xs = {10}>
                    <input className = 'input' type = 'number' placeholder = 'Amount' onFocus = {(e)=>this.onFocus(e,"amount")} onChange = {(e)=>this.onChangeHandler(e,"amount")}></input>
                </Grid>
                <Grid item xs = {10}>
                    <input className = 'input' type = 'text' placeholder = 'Note' onFocus = {(e)=>this.onFocus(e,"note")} onChange = {(e)=>this.onChangeHandler(e,"note")}></input>
                </Grid>
                <Grid item xs = {10}>
                    <input className = 'input' type = 'text' placeholder = 'Date' onFocus = {(e)=>this.onFocus(e,"date")} onChange = {(e)=>this.onChangeHandler(e,"date")}></input>
                </Grid>
                <Grid item xs = {10}></Grid>
                {/* <Grid item xs = {10}></Grid> */}
                <Grid item xs = {10}>
                    <button className = "addbutton" onClick = {this.addExpense}><big>+ </big> &nbsp;&nbsp;&nbsp;&nbsp;Add Expense</button>
                </Grid>
            </Grid>
        )
    }
}
