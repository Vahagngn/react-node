import React from 'react'

const Todo = ({ todo, deleteUser }) => {
    return (
        <li className="todo" key={todo._id}>
            <form>
                <label className="userInfo">
                    <input type="checkbox" name="completed" />
                    <span id="userInfo">
                        Added by user: <span>{todo.added_user}</span><br />
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
}

export default Todo