export function validationFields(items) {
    let errors={};
    const { email, fio, password, confirmPassword } = items;
    const regex_email = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;

    if (!regex_email.test(email.trim())) errors.email = "Не правильний формат електронної пошти!";

    if(fio.trim()=='')
    {
        errors={
            ...errors,
            fio: "Поле ПІБ пуста"
        }
    }

    if(password.trim()=='')
    {
        errors={
            ...errors,
            password: "Поле пароль пуста"
        }
    }
    if (confirmPassword !== password) errors.confirmPassword = "Повтор паролю не співпадає!";

    return errors;
}