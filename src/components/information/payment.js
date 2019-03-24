import React, { Component } from 'react';

import PageTitle from '../pageTitle';

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
            <div className='sign-in'>
                <PageTitle className='sign-in__title' title='Payment Information' />
                {/* <SigninForm onSubmit={this.onSubmit} className='sign-in__form' /> */}
            </div>
        );
    }
}

Payment = connect(null, actions)(Payment);

export default Payment;