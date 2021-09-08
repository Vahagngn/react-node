import MeetupItem from './meetupItem';
import {useEffect, useState, useContext} from 'react';
import api from '../../Api';
import FavoritesContext from './store/favorite.context';

function FavoritesPage() {

  const [loadedFavorites, setLoadedFavorites] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const favoritesCtx = useContext(FavoritesContext);


  useEffect(() => {
    getFavorites();
   }, []);

//GET 
 function getFavorites() {
    setIsLoading(true);
    debugger
     api.get('/api/address/favorites ').then(response => {
      setLoadedFavorites(response);
      setIsLoading(false);
     });
   }

   
   //DELETE FROM FAVORITES
  function deleteFavMeetupHandler(id) {
  //   debugger
   favoritesCtx.removeFavorite(id);
  const filteredFavMeetups = loadedFavorites.filter(m => m._id !== id);
  setLoadedFavorites(filteredFavMeetups);
}


 if(isLoading) {
  return <section>
    <p>Loading...</p>
  </section>
}

  return <section>
  <h2 style = {{margin: "10px 0 0 50px"}}>Favorite Meetups</h2>
    <ul>
    {
       loadedFavorites.map((meetup, index) => {
          return (

            <MeetupItem 
            key = {index} 
            meetup = {meetup}
            deleteFavMeetup = {deleteFavMeetupHandler}
            /> 
          )
       })
       
      }
  </ul>
  </section>
}

export default FavoritesPage;