import MeetupItem from './meetupItem';
import {useEffect, useState, useContext} from 'react';
import api from '../../Api';
import FavoritesContext from './store/favorite.context';

function FavoritesPage() {

  const [loadedFavorites, setLoadedFavorites] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const favoritesCtx = useContext(FavoritesContext);
  const favorites = [];
  let content;

  useEffect(() => {
    getFavorites();
   }, []);

//GET 
 function getFavorites() {
    // setIsLoading(true);
    debugger
     api.get('/api/page/meetups').then(response => {
       response.map((meetup) => {
         if(meetup.isFavorite === true) {
         favorites.push(meetup);
          setLoadedFavorites(favorites);
          // setIsLoading(false);
         }
       })
      // setLoadedFavorites(response);
      // setIsLoading(false);
     });
   }

   
   //DELETE FROM FAVORITES
  function deleteFavMeetupHandler(id) {
   debugger
   favoritesCtx.removeFavorite(id);
  const filteredFavMeetups = loadedFavorites.filter(m => m._id !== id);
  setLoadedFavorites(filteredFavMeetups);
}


//  if(isLoading) {
//   return <section>
//     <p>Loading...</p>
//   </section>
// }

  return <section>
  <h2 style = {{margin: "10px 0 0 50px"}}>Favorite Meetups</h2>
  <h5 style = {{margin: "10px 0 0 50px"}}>Total: <span>{loadedFavorites.length}</span></h5>
      <ul className = "listSection">
    {
      loadedFavorites.length ? 
       loadedFavorites.map((meetup, index) => {
          return (

            <MeetupItem 
            key = {index} 
            meetup = {meetup}
            deleteFavMeetup = {deleteFavMeetupHandler}
            /> 
          )
       }) : <p>There are no favorites!!! Add Some???</p> 
       
      }
      
  </ul>
  </section>
}

export default FavoritesPage;