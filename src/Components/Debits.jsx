import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import DisplayDebit from "./DisplayDebit";
import AccountBalance from "./AccountBalance"

class Debits extends Component {
    constructor(props) {
        super(props);

        this.state = {
            display: false,
            addDebit: false,
            debitAmount: this.props.amount,
            debit: this.props.debits
        }
        this.formDescription = React.createRef();
        this.formAmount = React.createRef();
        this.formDate = React.createRef();
    }

    handleSubmit = () => {
        Number(this.formAmount.current.value);
        let num = parseFloat(this.formAmount.current.value)
        let obj = {
            id: this.formDescription.current.value + this.formAmount.current.value + this.formDate.current.value + Math.random() * 100,
            description: this.formDescription.current.value,
            amount: num,
            date: this.formDate.current.value
        }
        let arr = this.props.debits;
        arr.push(obj);
        this.setState({
            debitAmount : this.state.debitAmount + num,
            debit: arr
        })
    }

    
    viewBalance = () => {
        this.setState({
            display : !this.state.display,
        })
    }

    handleCancel = () => {
        this.setState({
            addDebit: false
        })
    }

    render() {
        return (
            <div id="debits-page">
                <Link to="/">Home Page</Link>

                <h1>Debits Page</h1>
                <button onClick={this.viewBalance}>View Balance</button>
                <button onClick={e => this.setState({ addDebit: !this.state.addDebit })}>Add Debit</button>
                {this.state.display && <AccountBalance accountBalance={this.state.debitAmount} />}
                {this.state.addDebit &&
                    <div id="debit-form">
                        <form>
                            <label id="debit-desription">
                                Description:
                        <input type="text" name="formDescription" placeholder={"Starbucks"} ref={this.formDescription} />
                            </label>
                            <label id="debit-desription">
                                Amount:
                        <input type="number" name="formAmount" placeholder={100.15} ref={this.formAmount} />
                            </label>
                            <label id="debit-desription">
                                Date:
                        <input type="text" name="formDate" placeholder={"2021-01-12"} ref={this.formDate} />
                            </label>

                        </form>
                        <button onClick={this.handleSubmit}>Submit</button>
                        <button onClick={this.handleCancel}>Cancel</button>
                    </div>
                }

                {
                    this.state.debit.map((item) => {
                        return (
                            <DisplayDebit key={item.id} description={item.description} amount={item.amount} date={item.date} />
                        )
                    })
                }
                
            </div>

        );
    }
}

export default Debits;