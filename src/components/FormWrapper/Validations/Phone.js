export default value =>
    value && !/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/i.test(value)
        ? "Invalid phone number, must be 10 digits"
        : undefined;
