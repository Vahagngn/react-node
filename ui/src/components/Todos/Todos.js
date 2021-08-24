import { useEffect, useState } from 'react';
import '../global.css';
import api from "../../Api";
import Todo from './Todo/Todo'



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
            setTodos(res)
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
                            todos.map((todo, index) => {
                                return (
                                    <Todo 
                                        key={index}
                                        todo={todo}
                                        deleteUser={deleteUser} 
                                    />
                                )
                            }) : 
                            <p>List is empty</p>
                    }
                </ul>
            </div> : null
    );
}

export default Content;