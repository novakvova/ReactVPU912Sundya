import React, { Component } from 'react'

export class RegisterPage extends Component {
    state = {
        email: 'ss@dd.dd'
    }

    onSubmitHandler = (e) => {
        e.preventDefault();
        console.log("Наш стейт", this.state);
        //this.setState({"email": "222"});
    }
    onChangeHandler = (e) => {
        const {name, value} = e.target;
        //console.log(name, value);
        this.setState({[name]: value});
    }
    render() {
        //console.log(this.state);
        return (
            <div className="row">
                <h1 className="text-center">Реєстрація</h1>
                <div className="offset-md-3 col-md-6">
                    <form onSubmit={this.onSubmitHandler}>
                        <div className="mb-3">
                            <label htmlFor="email">Пошта</label>
                            <input type="text"
                                className="form-control" 
                                id="email"
                                name="email"
                                value={this.state.email}
                                onChange={this.onChangeHandler}
                                placeholder="Вкажіть пошту" />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="password">Пароль</label>
                            <input type="password"
                                className="form-control" 
                                id="password"
                                name="password"
                                value={this.state.password}
                                onChange={this.onChangeHandler}
                                placeholder="Вкажіть пароль" />
                        </div>

                        <button type="submit" className="btn btn-success">Реєстрація</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default RegisterPage
