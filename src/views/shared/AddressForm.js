import React from 'react';
import { Field } from 'redux-form';
import StyledTextField from 'components/StyledTextField/StyledTextField';
import required from 'components/FormWrapper/Validations/Required';
import minLength from 'components/FormWrapper/Validations/MinLength';
import maxLength from 'components/FormWrapper/Validations/MaxLength';

const Address = () => {
  const steet1MaxLength = maxLength(50);
  const steet2MaxLength = maxLength(50);
  const cityMaxLength = maxLength(50);
  const stateMaxLength = maxLength(50);
  const postalCodeMinLength = minLength(5);
  const postalCodeMaxLength = maxLength(10);
  const countryMaxLength = maxLength(50);

  return [
    <Field
      key={0}
      name="Street"
      type="text"
      component={StyledTextField}
      label="Street 1"
      validate={[required, steet1MaxLength]}
    />,
    <Field
      key={1}
      name="Street2"
      type="text"
      component={StyledTextField}
      label="Street 2 (optional)"
      validate={steet2MaxLength}
    />,
    <Field
      key={2}
      name="City"
      type="text"
      component={StyledTextField}
      label="City"
      validate={[required, cityMaxLength]}
    />,
    <div className="input-line" key={3}>
      <Field
        name="State"
        component={StyledTextField}
        label="State/Province"
        inline={true}
        width="200px"
        validate={[required, stateMaxLength]}
      />
      <Field
        name="PostalCode"
        type="text"
        component={StyledTextField}
        label="Postal Code"
        inline={true}
        validate={[required, postalCodeMinLength, postalCodeMaxLength]}
      />
    </div>,

    <Field
      key={4}
      name="Country"
      type="text"
      component={StyledTextField}
      label="Country"
      validate={[required, countryMaxLength]}
    />,
  ];
};

export default Address;
