import { Link } from 'react-router-dom'

export const LinksList = ({ links, deleteLink }) => {
  if (!links.length) {
    return <p className="center">No links</p>
  }

  return (
    <table style={{ position: 'relative', margin: 'auto', width: '70%' }}>
      <thead>
        <tr>
          <th>Number</th>
          <th>Original</th>
          <th>Abbreviated</th>
          <th>Open</th>
          <th>Delete</th>
        </tr>
      </thead>

      <tbody>
        {links.map((link, index) => {
          return (
            <tr key={link._id}>
              <td>{index + 1}</td>
              <td>{link.from}</td>
              <td>{link.to}</td>
              <td>
                <Link to={`/detail/${link._id}`}> Open </Link>
              </td>
              <td>
                <Link to="/links" onClick={() => deleteLink(link._id)}> Delete </Link>
              </td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}