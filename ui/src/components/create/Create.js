import '../global.css'
import api from "../../Api";
import { useEffect, useState } from 'react';
import { NavLink } from "react-router-dom"

function Create() {

    return (
        <form className="createForm" action="/data" method="POST">
            <h2 className="createTodo">Create todo</h2>

            <div className="input-field">
                <input type="text" name="title" placeholder = "Program Name"/>
                <label></label>
            </div>
            <div className="input-field">
                <input type="text" name="user_name" placeholder = "User Name"/>
                <label></label>
            </div>
            <div className="input-field">
                <input type="text" name="user_age" placeholder = "Age"/>
                <label></label>
            </div>
            <div className="input-field">
                <input type="text" name="speciality" placeholder = "Speciality"/>
                <label></label>
            </div>

            <NavLink to="/"><button type="submit" className="btn">Create</button></NavLink>
        </form>
    );
}

export default Create;