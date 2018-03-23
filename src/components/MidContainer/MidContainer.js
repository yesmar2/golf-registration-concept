import React from "react";
import { Route } from "react-router-dom";
import AnimatedWizard from "components/AnimatedWizard/AnimatedWizard";

import "./MidContainer.css";

const MidContainer = props => {
    const { forms, title, onSubmit, formId } = props;

    return (
        <div className="mid-container wizard">
            <Route
                render={({ location }) => (
                    <AnimatedWizard
                        location={location}
                        forms={forms}
                        formId={formId}
                        title={title}
                        onSubmit={onSubmit}
                    />
                )}
            />
        </div>
    );
};

export default MidContainer;
