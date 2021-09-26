import React, { Component } from 'react'
import InputTextField from '../../common/InptTextField';
import { validationFields } from './validation';

export class LoginPage extends Component {
    state = {
        email: '',
        password: '',
        isValidation: false,
        errors: {
            email: '',
            password: ''
        }
    }

    onSubmitHandler = (e) => {
        e.preventDefault();
        var errors = validationFields(this.state);
        const isValid = Object.keys(errors).length === 0;
        if(isValid)
        {
            console.log("send server", this.state);
        }
        else{
            this.setState({errors: errors, isValidation: true});
        }
    }
    onChangeHandler = (e) => {
        const {name, value} = e.target;
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
        const {errors} = this.state;
        return (
            <div className="row">
                <h1 className="text-center">Вхід на сайт</h1>
                <div className="offset-md-3 col-md-6">
                    <form onSubmit={this.onSubmitHandler}>
                        

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

                        

                        <button type="submit" className="btn btn-dark">Вхід</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default LoginPage
