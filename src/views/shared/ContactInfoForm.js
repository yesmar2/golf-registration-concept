import React from "react";
import { Field } from "redux-form";
import StyledTextField from "components/StyledTextField/StyledTextField";
import required from "components/FormWrapper/Validations/Required";
import Email from "components/FormWrapper/Validations/Email";
import Phone from "components/FormWrapper/Validations/Phone";

const ContactInfoForm = () => [
    <Field
        key={0}
        name="HomePhone"
        type="text"
        component={StyledTextField}
        componentType="phone"
        label="Home Phone"
        validate={[required, Phone]}
    />,
    <Field
        key={1}
        name="MobilePhone"
        type="text"
        component={StyledTextField}
        componentType="phone"
        label="Mobile Phone"
        validate={[required, Phone]}
    />,
    <Field
        key={2}
        name="Email"
        type="text"
        component={StyledTextField}
        label="Email"
        validate={[required, Email]}
    />
];

export default ContactInfoForm;
