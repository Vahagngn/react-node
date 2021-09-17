import {createContext, useState} from 'react';
import api from '../../../Api';
const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
  addFavorite: (favoriteMeetup) => {},
  removeFavorite: (meetupId) => {},
  itemIsFavorite: (meetupId) => {}
});

export function FavoritesContextProvider(props) {
  const [userFavorites, setUserFavorites] = useState([]);



  function addfavoritesHandler(favoriteMeetup){
  // debugger;
    setUserFavorites((prevUserFavorites) => {
      return prevUserFavorites.concat(favoriteMeetup);
    });
    api.post('/api/page/meetup/create', favoriteMeetup);
  }


  function removeFavoriteHandler(meetupId){
   
    setUserFavorites((prevUserFavorites) => {
     return prevUserFavorites.filter(prevMeetupsId => 
        prevMeetupsId._id !== meetupId);
    });
    // const filteredFavMeetups = userFavorites.filter(m => m._id !== meetupId);
    // setUserFavorites(filteredFavMeetups);
    api.delete(`/api/page/meetup/delete/${meetupId}`);
  }

  function itemIsFavoriteHandler(meetupId){

    return userFavorites.some(meetup => 
      meetup.meetupsId === meetupId)
  }

  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    addFavorite: addfavoritesHandler,
    removeFavorite: removeFavoriteHandler,
    itemIsFavorite: itemIsFavoriteHandler
  };
  return (<FavoritesContext.Provider value={context}>
    {props.children}
  </FavoritesContext.Provider>)
}

export default FavoritesContext;