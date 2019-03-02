import React, {Component} from 'react';

import { reduxForm, Field } from 'redux-form';

import { FormInput } from '../formFields';

 class SigninForm extends Component {
   render() {
       const { className } = this.props;
       return (
           <div className='sign-in-form'>
               <form className={`${className} sign-in-form`} >
                   <Field className='sign-in-form__email'
                   name='email'
                   type='email'
                   title='Email'
                   placeholder='Email' 
                   component={FormInput}/>
                   <Field className='sign-in-form__password'
                   name='password'
                   type='password'
                   title='Password'
                   placeholder='Password' 
                   component={FormInput}/>
               </form>
           </div>
       );
   }
}

SigninForm = reduxForm({
    form: 'SigninForm'
})(SigninForm);

export default SigninForm;