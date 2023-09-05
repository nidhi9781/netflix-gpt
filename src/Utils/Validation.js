export const checkEmailAndPwdValidation = (email, pwd) => {

    const isEmailValid  = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/.test(email);
    const isPwdValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(pwd); 

    if(!isEmailValid) return "Email Id is not valid";
    if(!isPwdValid) return "Password is not valid";

    return null;

}