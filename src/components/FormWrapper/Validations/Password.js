export default value => {
    if (value) {
        if (value.length < 8) {
            return "Must be 8 characters or more";
        }

        // if (!/\d/i.test(value)) {
        //     return "Must contain one number";
        // }

        // if (!/[A-Z]/.test(value)) {
        //     return "Must contain one upper-case character";
        // }

        // if (!/[a-z]/.test(value)) {
        //     return "Must contain one lower-case character";
        // }

        // if (!/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/i.test(value)) {
        //     return "Must contain one special character";
        // }
    }

    return undefined;
};
