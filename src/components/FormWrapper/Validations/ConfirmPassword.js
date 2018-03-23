export default password => confirmPassword =>
    password && confirmPassword !== password
        ? `Passwords don't match`
        : undefined;
