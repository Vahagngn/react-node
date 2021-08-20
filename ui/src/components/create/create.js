import '../global.css'
import api from "../../Api";
import { useEffect, useState } from 'react';

function Create() {

    const [data, setData] = useState();

    return (
        <form className="createForm" action="/data" method="POST">
            <h2 className="createTodo">Create todo</h2>

            <div className="input-field">
                <input type="text" name="title" />
                <label>Program Name</label>
            </div>
            <div className="input-field">
                <input type="text" name="user_name" />
                <label>User Name</label>
            </div>
            <div className="input-field">
                <input type="text" name="user_age" />
                <label>Age</label>
            </div>
            <div className="input-field">
                <input type="text" name="speciality" />
                <label>Speciality</label>
            </div>

            <button type="submit" className="btn">Create</button>
        </form>
    );
}

export default Create;