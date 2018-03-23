import React from 'react';
import { connect } from 'react-redux';
import { Field, formValueSelector } from 'redux-form';
import StyledTextField from 'components/StyledTextField/StyledTextField';
import required from 'components/FormWrapper/Validations/Required';
import minLength from 'components/FormWrapper/Validations/MinLength';
import maxLength from 'components/FormWrapper/Validations/MaxLength';
import password from 'components/FormWrapper/Validations/Password';
import confirmPassword from 'components/FormWrapper/Validations/ConfirmPassword';

const usernameMinLength = minLength(4);
const usernameMaxLength = maxLength(50);

let CredentialsForm = (props) => {
  const confirmPasswordValidation = confirmPassword(props.passwordValue);

  return [
    <Field
      key={0}
      name="Username"
      type="text"
      component={StyledTextField}
      label="Username"
      validate={[required, usernameMinLength, usernameMaxLength]}
    />,
    <Field
      key={1}
      name="Password"
      type="password"
      component={StyledTextField}
      label="Password"
      validate={[required, password, confirmPasswordValidation]}
    />,

    <Field
      key={2}
      name="confirm"
      type="password"
      component={StyledTextField}
      label="Confirm"
      validate={[required, confirmPasswordValidation]}
    />,
  ];
};

CredentialsForm = connect((state, props) => {
  const selector = formValueSelector(props.formId);

  const passwordValue = selector(state, 'Password');

  return {
    passwordValue,
  };
})(CredentialsForm);

export default CredentialsForm;
