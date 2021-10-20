import { useEffect, useState } from 'react';
import '../global.css';
import api from "../../Api";
import Todo from './Todo/Todo'
import axios from 'axios';



function Content() {

    const [todos, setTodos] = useState(null);

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
        <div>
            <h1>The page will be ready soon</h1>
        </div>
        // todos !== null ?
        //     <div className="contentContainer">
        //         <h2 className="todosPage">Todos page</h2>
        //         <ul>
        //             {
        //                 todos.length ? 
        //                     todos.map((todo, index) => {
        //                         return (
        //                             <Todo 
        //                                 key={index}
        //                                 todo={todo}
        //                                 deleteUser={deleteUser} 
        //                             />
        //                         )
        //                     }) : 
        //                     <p>List is empty</p>
        //             }
        //         </ul>
        //     </div> : null
    );
}

export default Content;