import React from 'react'

const User = ( { user, deleteUser } ) => {
    return (
        <tr key={user._id}>
            <td>{user.name}</td>
            <td>{user.last_name}</td>
            <td>{user.email}</td>
            <td>
                <button
                    className="btn btn-small"
                    type="button"
                    onClick={() => deleteUser(user._id)}
                >
                    Delete
                  </button>
            </td>
        </tr>
    )
}

export default User;