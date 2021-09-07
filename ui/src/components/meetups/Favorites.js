import MeetupItem from './meetupItem';
import {useEffect, useState} from 'react';
import api from '../../Api';


function FavoritesPage() {

  const [loadedFavorites, setLoadedFavorites] = useState([]);
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    getFavorites();
   }, []);
 function getFavorites() {
    setIsLoading(true);
     api.get('/api/address/favorites ').then(response => {
       debugger
      const favorites = [];
  
      for(const key in response) {
        const favorite = {
          id: key,
          ...response[key] //add all key,value pairs from nested object to meetup object
        };
        favorites.push(favorite);
      }
   
      setLoadedFavorites(favorites);
      setIsLoading(false);
  
     });
   }

   
  function deleteMeetupHandler(id) {
    debugger
    api.delete(`/api/address/favorite/delete/${id}`).then(res => {
      
       console.log(res, "res");
     })
  const filteredFavMeetups = loadedFavorites.filter(m => m.id !== id);
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
            deleteMeetup = {deleteMeetupHandler}
            /> 
          )
       })
       
      }
  </ul>
  </section>
}

export default FavoritesPage;