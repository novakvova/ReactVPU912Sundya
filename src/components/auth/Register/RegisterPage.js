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
            email: '',
            password: '',
            confirmPassword: '',
            fio: '',
        }
    }

    onSubmitHandler = (e) => {
        e.preventDefault();
        
        var errors = validationFields(this.state);
        const isValid = Object.keys(errors).length === 0;
        if(isValid)
        {
            // let json = JSON.parse(this.state);
            // alert(json);
            console.log("send server", this.state);
        }
        else{
            this.setState({errors: errors, isValidation: true});
        }
        


        //console.log("Наш стейт", this.state);
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
