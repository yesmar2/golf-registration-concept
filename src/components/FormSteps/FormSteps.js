import React from "react";

import "./FormSteps.css";

const FormSteps = props => {
    return (
        <div className="form-step-wrapper">
            {props.forms.map((form, index) => {
                let stepStatus = null;
                let stepNumber = index + 1;

                if (props.currentStep === stepNumber) {
                    stepStatus = "current";
                } else if (props.currentStep > stepNumber) {
                    stepStatus = "completed";
                    stepNumber = <i className="material-icons">check</i>;
                } else {
                    stepStatus = "incomplete";
                }

                return [
                    <div key={0} className={`form-step ${stepStatus}`}>
                        {stepNumber}
                    </div>,
                    index + 1 !== props.forms.length && (
                        <div
                            key={1}
                            className={`form-step-filler ${stepStatus}`}
                        />
                    )
                ];
            })}
        </div>
    );
};

export default FormSteps;
