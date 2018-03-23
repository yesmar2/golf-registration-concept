import React, { Component } from "react";
import { withStyles } from "material-ui/styles";
import UITextField from "material-ui/TextField";
import "./TextField.css";

const styles = theme => ({
    textFieldRoot: {
        "&:before": { backgroundColor: "rgba(256,256,256, 0.4)" },
        "&:hover:not(.MuiInput-disabled-23):before": {
            backgroundColor: "rgba(256,256,256, 0.8)"
        },
        "&:after": { backgroundColor: "rgb(0, 184, 148)" }
    },
    textFieldInput: {
        color: "#ececec"
    },
    textFieldFormLabel: {
        color: "rgba(256,256,256, .7)"
    }
});

class TextField extends Component {
    handleChange = name => event => {
        this.setState({
            [name]: event.target.value
        });
    };

    render() {
        const {
            classes,
            input,
            label,
            inline,
            width,
            select,
            children
        } = this.props;

        const customStyles = {
            width: width ? width : ""
        };

        return (
            <div
                className={inline ? "input-inline" : "input-line"}
                style={customStyles}
            >
                <UITextField
                    {...input}
                    label={label}
                    select={select}
                    fullWidth={true}
                    InputProps={{
                        classes: {
                            root: classes.textFieldRoot,
                            input: classes.textFieldInput
                        }
                    }}
                    InputLabelProps={{
                        className: classes.textFieldFormLabel
                    }}
                >
                    {children}
                </UITextField>
            </div>
        );
    }
}

export default withStyles(styles)(TextField);
