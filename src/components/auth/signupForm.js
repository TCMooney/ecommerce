import React, { Component } from 'react';

import { reduxForm, Field } from 'redux-form';

import { FormInput, FormButton } from '../formFields';
import Details from '../details';

import history from '../../history';

class SignupForm extends Component {
    render() {
        const { className, handleSubmit } = this.props;
        const links = [
            {
                _id: 0,
                title: 'Not registered? Create account here',
                onClick: () => history.push('/signup')
            },
            {
                _id: 1,
                title: 'Forgot account email?',
                onClick: () => console.log('forgot email')
            },
            {
                _id: 2,
                title: 'Forgot password?',
                onClick: () => console.log('forgot password')
            }
        ]
        return (
            <form onSubmit={handleSubmit} className={`${className} sign-up-form`} >
                <Field className='sign-up-form__name'
                    name='name'
                    type='name'
                    title='Name'
                    placeholder='Name'
                    component={FormInput} />
                <Field className='sign-up-form__email'
                    name='email'
                    type='email'
                    title='Email'
                    placeholder='Email'
                    component={FormInput} />
                <Field className='sign-up-form__password'
                    name='password'
                    type='password'
                    title='Password'
                    placeholder='Password'
                    component={FormInput} />
                <Field className='sign-up-form__confirm-password'
                    name='confirm'
                    type='password'
                    title='Confirm Password'
                    placeholder='Confirm Password'
                    component={FormInput} />
                <div className='sign-up-form__line'></div>
                <Field className='sign-up-form__login'
                    onClick={() => console.log('trying to submit')}
                    name='login'
                    type='submit'
                    title='Login'
                    component={FormButton} />
                <Field className='sign-up-form__back'
                    onClick={() => console.log('trying to submit')}
                    name='back'
                    type='button'
                    title='Back'
                    short={true}
                    component={FormButton} />
                <Details className='sign-in-form__details' title='QuickLinks' links={links} />
            </form>
        );
    }
}

SignupForm = reduxForm({
    form: 'SignupForm'
})(SignupForm);

export default SignupForm;