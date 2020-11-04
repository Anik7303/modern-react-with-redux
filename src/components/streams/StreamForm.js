import React from "react";
import { Field, reduxForm } from "redux-form";

const renderError = ({ touched, error }) =>
    touched && error ? (
        <div className="ui error tiny message">
            <p>{error}</p>
        </div>
    ) : null;

const renderInput = ({ input, label, meta }) => (
    <div className={`field required ${meta.touched && meta.error ? "error" : ""}`}>
        <label>{label}</label>
        <input {...input} autoComplete="off" />
        {renderError(meta)}
    </div>
);

const renderTextArea = ({ input, meta, label }) => (
    <div className={`field required ${meta.touched && meta.error ? "error" : ""}`}>
        <label>{label}</label>
        <textarea {...input} />
        {renderError(meta)}
    </div>
);

const StreamForm = (props) => {
    const { handleSubmit } = props;

    return (
        <form className="ui form error" onSubmit={handleSubmit(props.onSubmit)}>
            <Field name="title" component={renderInput} label="Enter Title" />
            <Field name="description" component={renderTextArea} label="Enter Description" />
            <button className="ui button primary">Submit</button>
        </form>
    );
};

const validate = (formValues) => {
    const errors = {};
    if (!formValues.title) {
        errors.title = "You must enter a title";
    }
    if (!formValues.description) {
        errors.description = "You must enter a description";
    }

    return errors;
};

const config = {
    form: "StreamForm",
    validate,
};

export default reduxForm(config)(StreamForm);
