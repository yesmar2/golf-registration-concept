export default max => value =>
    value && value.length > max
        ? `Must be ${max} characters or less`
        : undefined;
