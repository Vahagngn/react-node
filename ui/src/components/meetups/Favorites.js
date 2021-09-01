import MeetupItem from './meetupItem';
function FavoritesPage() {

  return <section>
  <h2 style = {{margin: "10px 0 0 50px"}}>Favorite Meetups</h2>
    <ul>
     {
      <MeetupItem/>
     }
  </ul>
  </section>
}

export default FavoritesPage;