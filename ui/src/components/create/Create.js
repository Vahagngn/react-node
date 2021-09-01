import '../global.css'
import api from "../../Api";
import { useEffect, useState } from 'react';

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

            <button type="submit" className="btn">Create</button>
        </form>
    );
}

export default Create;