import React from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

import './FormWrapper.css';

let FormWrapper = (props) => {
  const { handleSubmit, goToPrevPage, buttonTitle, change, error } = props;

  const CustomComponent = props.formComponent;

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-wrapper">
        {props.formTitle && <h2>{props.formTitle}</h2>}
        <CustomComponent formId={props.formId} change={change} initialValues={props.initialValues} />
        {error && <div className="error">{error}</div>}
        <div className="form-button-wrapper">
          {goToPrevPage && (
            <a onClick={goToPrevPage} className="button prev-step-button">
              <i className="material-icons">arrow_back</i>
            </a>
          )}
          <button type="submit" className="button">
            {buttonTitle ? buttonTitle : 'Save Changes'}
          </button>
        </div>
      </div>
    </form>
  );
};

FormWrapper = reduxForm({
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
})(FormWrapper);

FormWrapper = connect((state, props) => {
  return {
    form: props.formId,
    initialValues: props.initialValues,
  };
})(FormWrapper);

export default FormWrapper;
