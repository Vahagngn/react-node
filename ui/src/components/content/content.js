import '../global.css'

function Content() {
    return (
        <div className="contentContainer">
            <h2 className="todosPage">Todos page</h2>
            <ul>
                <li className="todo">
                    <form>
                        <label className="userInfo">
                            <input type="checkbox" name="completed" />
                            <span id="userInfo">
                                Program Name: <span>Program Name</span><br />
                                User Name: <span>User Name</span><br />
                                Age: <span>Age</span><br />
                                Speciality: <span>Speciality</span><br />
                            </span>
                            <input type="hidden" name="id" />
                            <div className="flex buttons">
                                <button className="btn btn-small" type="submit">Save</button>
                                <button className="btn btn-small" type="button">Delete</button>
                            </div>
                        </label>
                    </form>
                </li>
            </ul>
        </div>
    );
}

export default Content;