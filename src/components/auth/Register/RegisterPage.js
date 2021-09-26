import React, { Component } from 'react'
import InputTextField from '../../common/InptTextField';
import { validationFields } from './validation';

export class RegisterPage extends Component {
    state = {
        email: '',
        password: '',
        confirmPassword: '',
        fio: '',
        isValidation: false,
        errors: {
            email: ""
        }
    }

    onSubmitHandler = (e) => {
        e.preventDefault();
        // const {email} = this.state;
        // if(!email)
        // {
        //     this.setState({errors: {email: "пуста пота"}});
        // }
        
        var errors = validationFields(this.state);
        this.setState({errors: errors, isValidation: true});
        console.log("Наш стейт", this.state);
        
        //this.setState({"email": "222"});
    }
    onChangeHandler = (e) => {
        const {name, value} = e.target;
        //console.log(name, value);
        const {isValidation} = this.state;
        if(isValidation)
        {
            const data = { ...this.state,
                            [name]: value };
            const errors = validationFields(data);
            this.setState({[name]: value, errors: errors});
        }
        else
            this.setState({[name]: value});
    }
    render() {
        //console.log(this.state);
        const {errors} = this.state;
        return (
            <div className="row">
                <h1 className="text-center">Реєстрація</h1>
                <div className="offset-md-3 col-md-6">
                    <form onSubmit={this.onSubmitHandler}>
                        
                        <InputTextField
                            field="fio"
                            label="ПІБ"
                            value={this.state.fio}
                            error={errors.fio}
                            onChange={this.onChangeHandler}
                         />

                        <InputTextField
                            field="email"
                            label="Пошта"
                            value={this.state.email}
                            error={errors.email}
                            onChange={this.onChangeHandler}
                         />

                        <InputTextField
                            field="password"
                            label="Пароль"
                            value={this.state.password}
                            error={errors.password}
                            onChange={this.onChangeHandler}
                            type="password"
                         />

                         <InputTextField
                            field="confirmPassword"
                            label="Повтор пароль"
                            value={this.state.confirmPassword}
                            error={errors.confirmPassword}
                            onChange={this.onChangeHandler}
                            type="password"
                         />

                        <button type="submit" className="btn btn-success">Реєстрація</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default RegisterPage
