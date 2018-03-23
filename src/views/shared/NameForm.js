import React from "react";
import { Field } from "redux-form";
import required from "components/FormWrapper/Validations/Required";
import maxLength from "components/FormWrapper/Validations/MaxLength";
import StyledTextField from "components/StyledTextField/StyledTextField";

const firstNameMinLength = maxLength(50);
const LastNameMaxLength = maxLength(50);

const RegisterPrimaryName = () => [
    <Field
        key={0}
        name="FirstName"
        type="text"
        component={StyledTextField}
        label="First Name"
        validate={[required, firstNameMinLength]}
    />,
    <Field
        key={1}
        name="LastName"
        type="text"
        component={StyledTextField}
        label="Last Name"
        validate={[required, LastNameMaxLength]}
    />,
    <Field
        key={2}
        name="Handicap"
        type="text"
        component={StyledTextField}
        label="Handicap"
        validate={[required]}
    />
];

export default RegisterPrimaryName;
