import React, { Component } from 'react';

import PageTitle from '../pageTitle';
import PaymentForm from './paymentForm';

import { connect } from 'react-redux';
import * as actions from '../../actions';

class Payment extends Component {

    componentDidMount() {
        this.props.setHeaderLinks([]);
        this.props.setHeaderLinks([]);
    }

    onSubmit = (fields) => {
        console.log(fields);
    }

    render() {
        return (
            <div className='payment'>
                <PageTitle className='payment__title' title='Payment Information' />
                <PaymentForm onSubmit={this.onSubmit} className='payment__form' />
            </div>
        );
    }
}

Payment = connect(null, actions)(Payment);

export default Payment;