import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { UsersAll, UsersDelete } from '../../actions/users';


const HomePage = () => {

    const dispatch = useDispatch();
    const {list} = useSelector(state => state.users);
     
    useEffect(() => {
        try {
            dispatch(UsersAll())
                .then()
                .catch();
        }
        catch(error) {
            console.log("Server error global");
        }
    }, [])

    const onDeleteClick = (id) => {
        try {
            dispatch(UsersDelete(id))
                .then()
                .catch();
        }
        catch(error) {
            console.log("Server error global");
        }
    }

    return (
        <div className="row">
            <h1 className="text-center">Головна сторінка</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">ФІО</th>
                        <th scope="col">Email</th>
                        <th scope="col">Image</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        list.map((user, index) => {
                            return (
                                <tr key={index}>
                                    <td>{user.fio}</td>
                                    <td>{user.email}</td>
                                    <td>
                                        <img src={"http://localhost:15247"+user.image+"?t="+new Date().getTime()} alt="Самогон" width="150" />
                                    </td>
                                    <td>
                                        <button className="btn btn-danger" onClick={() => onDeleteClick(user.id)}>Delete</button>
                                        <Link className="btn btn-success" to={`/user/edit/${user.id}`}>Edit</Link>
                                    </td>
                                </tr>
                            );
                        })
                    }
                </tbody>
            </table>
        </div>
    );
}

export default HomePage;