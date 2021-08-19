import { useCallback, useContext, useEffect, useState } from 'react';
import '../global.css';
import api from "../../Api";

function Content() {

    // const {token} = useContext(AuthContext)
    // const {form, setForm} = useState()
    // const {loading, error, request} = useHttp()
    const [todos, setTodos] = useState(null);

    // const getTodos = useCallback( async () => {
    // try {
    // const data = await request('/', 'GET', {...form})
    // console.log(data, "data")
    // }catch (e) {}
    // }, [token, request])
    function getData() {
        api.get('/data').then(res => {
            setTodos(res);
        })
    }

    useEffect(() => {
        getData()
    }, [])

    async function deleteUser(id) {
        const filteredTodos = todos.filter(todo => todo._id !== id)
        setTodos(filteredTodos)
        const response = await fetch(`/delete/${id}`, {
            method: "DELETE"
        });
    }

    return (
        todos !== null ?
            <div className="contentContainer">
                <h2 className="todosPage">Todos page</h2>
                <ul>
                    {
                        todos.length ? 
                            todos.map(todo => {
                                return (
                                    <li className="todo" key={todo._id}>
                                        <form>
                                            <label className="userInfo">
                                                <input type="checkbox" name="completed" />
                                                <span id="userInfo">
                                                    Program Name: <span>{todo.title}</span><br />
                                                    User Name: <span>{todo.user_name}</span><br />
                                                    Age: <span>{todo.user_age}</span><br />
                                                    Speciality: <span>{todo.speciality}</span><br />
                                                </span>
                                                <input type="hidden" name="id" />
                                                <div className="flex buttons">
                                                    <button 
                                                    onClick={() => deleteUser(todo._id)} 
                                                    className="btn btn-small" 
                                                    type="button"
                                                >
                                                    Delete
                                                </button>
                                                </div>
                                            </label>
                                        </form>
                                    </li>
                                )
                            }) : 
                            <p>List is empty</p>
                    }
                </ul>
            </div> : null
    );
}

export default Content;