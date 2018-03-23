import React, { Component } from "react";
import { withStyles } from "material-ui/styles";
import TextField from "material-ui/TextField";
import Input, { InputLabel } from "material-ui/Input";
import { FormControl } from "material-ui/Form";
import IconButton from "material-ui/IconButton";
import Camera from "mdi-material-ui/Camera";
import { DatePicker } from "material-ui-pickers";
import { InputAdornment } from "material-ui/Input";
import MaskedInput from "react-text-mask";
import MenuItem from "material-ui/Menu/MenuItem";
import "./StyledTextField.css";

class TextMaskPhone extends Component {
    render() {
        return (
            <MaskedInput
                {...this.props}
                mask={[
                    "(",
                    /[1-9]/,
                    /\d/,
                    /\d/,
                    ")",
                    " ",
                    /\d/,
                    /\d/,
                    /\d/,
                    "-",
                    /\d/,
                    /\d/,
                    /\d/,
                    /\d/
                ]}
                placeholderChar={"\u2000"}
            />
        );
    }
}

const styles = theme => ({
    textFieldRoot: {
        "align-items": "flex-start",
        "&:before": { backgroundColor: "rgba(256,256,256, 0.4)" },
        "&:hover:not(.MuiInput-disabled-23):before": {
            backgroundColor: "rgba(256,256,256, 0.8)"
        },
        "&:after": { backgroundColor: "rgb(0, 184, 148)" }
    },
    textFieldInput: {
        color: "#ececec",
        width: "100%"
    },
    textFieldFormLabel: {
        color: "rgba(256,256,256, .7)"
    },
    helperTextError: {
        color: "rgb(216, 67, 21)"
    },
    textFieldError: {
        "&:after": { backgroundColor: "rgb(216, 67, 21)" }
    },
    menu: {
        width: 200,
        color: "black"
    }
});

let imageUpload = null;

class StyledTextField extends Component {
    constructor(props) {
        super(props);

        this._uploadImage = this._uploadImage.bind(this);

        this.state = {
            file: "",
            imagePreviewUrl: ""
        };
    }

    _uploadImage(e) {
        e.preventDefault();
        imageUpload.click();
    }

    _changeFileName(e) {
        e.preventDefault();
        let reader = new FileReader();
        var file = e.target.files[0];

        reader.onloadend = () => {
            this.setState({
                file: file.name,
                imagePreviewUrl: reader.result
            });
        };

        if (file !== undefined) {
            reader.readAsDataURL(file);
        }
    }

    render() {
        const {
            classes,
            input,
            componentType,
            label,
            inline,
            width,
            options,
            disabled,
            type,
            meta: { touched, error }
        } = this.props;

        const IconTag = this.props.icon;

        const customStyles = {
            width: width ? width : ""
        };

        let formComponent = null;

        switch (componentType) {
            case "datePicker": {
                formComponent = (
                    <DatePicker
                        {...input}
                        fullWidth={true}
                        label={label}
                        clearable
                        invalidLabel=""
                        error={touched && error ? true : false}
                        helperText={touched && error ? error : ""}
                        InputProps={{
                            classes: {
                                root: classes.textFieldRoot,
                                input: classes.textFieldInput,
                                error: classes.textFieldError
                            },
                            endAdornment: this.props.icon && (
                                <InputAdornment
                                    position="end"
                                    style={{ margin: "0" }}
                                >
                                    <IconTag
                                        style={{
                                            color: "rgba(256,256,256, .7)"
                                        }}
                                    />
                                </InputAdornment>
                            )
                        }}
                        InputLabelProps={{
                            className: classes.textFieldFormLabel
                        }}
                        FormHelperTextProps={{
                            classes: {
                                error: classes.helperTextError
                            }
                        }}
                        format="MMMM Do YYYY"
                    />
                );

                break;
            }

            case "select": {
                formComponent = (
                    <TextField
                        select
                        {...input}
                        label={label}
                        fullWidth={true}
                        error={touched && error ? true : false}
                        helperText={touched && error ? error : ""}
                        disabled={disabled}
                        InputProps={{
                            classes: {
                                root: classes.textFieldRoot,
                                input: classes.textFieldInput,
                                error: classes.textFieldError
                            },
                            endAdornment: this.props.icon && (
                                <InputAdornment
                                    position="end"
                                    style={{ margin: "0" }}
                                >
                                    <IconTag
                                        style={{
                                            color: "rgba(256,256,256, .7)"
                                        }}
                                    />
                                </InputAdornment>
                            )
                        }}
                        InputLabelProps={{
                            className: classes.textFieldFormLabel
                        }}
                        FormHelperTextProps={{
                            classes: {
                                error: classes.helperTextError
                            }
                        }}
                        SelectProps={{
                            MenuProps: {
                                className: classes.menu
                            }
                        }}
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        {options.map(option => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                );
                break;
            }

            case "upload": {
                var uploadClasses = `${classes.textFieldInput} ${
                    classes.textFieldRoot
                }`;
                formComponent = (
                    <FormControl fullWidth={true}>
                        <InputLabel className={classes.textFieldFormLabel}>
                            {label}
                        </InputLabel>
                        <Input
                            type="button"
                            value={this.state.file}
                            readOnly
                            className={uploadClasses}
                            onClick={this._uploadImage}
                            endAdornment={
                                this.props.icon && (
                                    <InputAdornment position="end" style={{}}>
                                        <IconButton
                                            style={{
                                                color: "rgba(256,256,256, .7)",
                                                width: "24px"
                                            }}
                                        >
                                            {<Camera />}
                                        </IconButton>
                                    </InputAdornment>
                                )
                            }
                        />
                        <input
                            type="file"
                            accept="image/*"
                            ref={input => (imageUpload = input)}
                            id="image-upload"
                            style={{ display: "none" }}
                            onChange={e => this._changeFileName(e)}
                        />
                    </FormControl>
                );
                break;
            }

            default: {
                let inputComponent = null;

                if (componentType === "phone") {
                    inputComponent = TextMaskPhone;
                }

                formComponent = (
                    <TextField
                        {...input}
                        type={type}
                        label={label}
                        fullWidth={true}
                        error={touched && error ? true : false}
                        helperText={touched && error ? error : ""}
                        InputProps={{
                            classes: {
                                root: classes.textFieldRoot,
                                input: classes.textFieldInput,
                                error: classes.textFieldError
                            },
                            inputComponent: inputComponent,
                            endAdornment: this.props.icon && (
                                <InputAdornment
                                    position="end"
                                    style={{ margin: "0" }}
                                >
                                    <IconTag
                                        style={{
                                            color: "rgba(256,256,256, .7)"
                                        }}
                                    />
                                </InputAdornment>
                            )
                        }}
                        InputLabelProps={{
                            className: classes.textFieldFormLabel
                        }}
                        FormHelperTextProps={{
                            classes: {
                                error: classes.helperTextError
                            }
                        }}
                    />
                );
                break;
            }
        }

        return (
            <div
                className={inline ? "input-inline" : "input-line"}
                style={customStyles}
            >
                {formComponent}
            </div>
        );
    }
}

export default withStyles(styles)(StyledTextField);
