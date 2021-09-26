export function validationFields(items) {
    let errors={};
    const { email, password } = items;
    const regex_email = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;

    if (!regex_email.test(email.trim())) errors.email = "Не правильний формат електронної пошти!";

  
    if(password.trim()=='')
    {
        errors={
            ...errors,
            password: "Поле пароль пуста"
        }
    }

    return errors;
}