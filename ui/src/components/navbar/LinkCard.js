

export const LinkCard = ({ link }) => {
    return (
      <div className="container" style={{position: 'relative', margin: 'auto'}}>
        <h2>Link</h2>

        <p>Your link: <a href={link.to} target="_blank" rel="noopener noreferrer">Click to follow the link</a></p>
        <p>From: <a href={link.from} target="_blank" rel="noopener noreferrer">{link.from}</a></p>
        <p>Number of clicks: <strong>{link.clicks}</strong></p>
        <p>Date of creation: <strong>{new Date(link.date).toLocaleDateString()}</strong></p>
      </div>
    )
}