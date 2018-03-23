import React from 'react';
import { connect } from 'react-redux';
import { Field, formValueSelector } from 'redux-form';
import StyledTextField from 'components/StyledTextField/StyledTextField';
import required from 'components/FormWrapper/Validations/Required';
import password from 'components/FormWrapper/Validations/Password';
import confirmPassword from 'components/FormWrapper/Validations/ConfirmPassword';

let ChangePasswordForm = (props) => {
  const confirmPasswordValidation = confirmPassword(props.passwordValue);

  return [
    <Field
      key={0}
      name="OldPassword"
      type="password"
      component={StyledTextField}
      label="Old Password"
    />,
    <Field
      key={1}
      name="NewPassword"
      type="password"
      component={StyledTextField}
      label="New Password"
      validate={[required, password, confirmPasswordValidation]}
    />,

    <Field
      key={2}
      name="NewPasswordComp"
      type="password"
      component={StyledTextField}
      label="Confirm"
      validate={[required, confirmPasswordValidation]}
    />,
  ];
};

ChangePasswordForm = connect((state, props) => {
  const selector = formValueSelector(props.formId);

  const passwordValue = selector(state, 'Password');

  return {
    passwordValue,
  };
})(ChangePasswordForm);

export default ChangePasswordForm;
