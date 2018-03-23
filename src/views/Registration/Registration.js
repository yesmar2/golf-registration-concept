import React, { Component } from "react";
import MidContainer from "components/MidContainer/MidContainer";
import NameForm from "views/shared/NameForm";
import AddressForm from "views/shared/AddressForm";
import ContactInfoForm from "views/shared/ContactInfoForm";
import CredentialsForm from "views/shared/CredentialsForm";
import History from "components/History/History";

class Registration extends Component {
    constructor(props) {
        super(props);

        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(values) {
        History.push({
            pathname: "/registration-successful"
        });
    }

    render() {
        const forms = [
            {
                formComponent: NameForm,
                formTitle: "Name"
            },
            {
                formComponent: AddressForm,
                formTitle: "Address"
            },
            {
                formComponent: ContactInfoForm,
                formTitle: "Contact Info"
            },
            {
                formComponent: CredentialsForm,
                formTitle: "Credentials"
            }
        ];

        return (
            <main>
                <MidContainer
                    forms={forms}
                    formId="registration"
                    title="Registration"
                    isWizard={true}
                    onSubmit={this.onSubmit}
                />
            </main>
        );
    }
}

export default Registration;
