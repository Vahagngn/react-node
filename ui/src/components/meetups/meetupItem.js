import Card from './ui/Card';
import classes from './meetupItem.module.css';
import { useLocation, withRouter } from 'react-router-dom';
import {useEffect, useContext} from 'react';
import api from '../../Api';
import FavoritesContext from './store/favorite.context';


function MeetupItem(props){
 const favoritesCtx = useContext(FavoritesContext);
 const itemIsFavorite = favoritesCtx.itemIsFavorite(props.meetup._id);
 const location = useLocation();
 let buttonText = "";


 function ToggleFavoriteHandler(favMeetupId) {
  //  
if(itemIsFavorite) {
  buttonText = "To Favorite";
  // favoritesCtx.removeFavorite(favMeetupId);
} else {
  const fav = {
    // _id: favMeetupId, 
    title: props.meetup.title,
    address: props.meetup.address,
    description: props.meetup.description,
    meetupsId: favMeetupId,
    isFavorite: true
  }

  favoritesCtx.addFavorite(fav);
  buttonText = "Added to favorites";
  // setFavorites(fav);
  // favorites.concat(fav);


// api.post('/api/address/favorite/create', fav);

}
 }


 function deleteFavMeetupHandler(id) {
  //  if(props.meetup.isFavorite === true) {
  //   props.deleteFavMeetup(id);
  //   // favoritesCtx.removeFavorite(id);
  //  }
  props.deleteFavMeetup(id);
 }
 function deleteMeetupHandler(id) {
   console.log(id, "meetupi pkhntsvadz id");
   console.log(favoritesCtx.favorites, "favorite list");
  favoritesCtx.favorites.map((meetup) => {
    if(meetup.meetupsId === id) {
      console.log(meetup._id, "meetup._id");
      console.log(meetup.meetupsId, "meetup.meetupsId");
      props.deleteFavMeetup(meetup._id);
    }
  });
  props.deleteMeetup(id);

  // favoritesCtx.removeFavorite(id);
}

//  function itemIsFavoriteHandler(meetupId){
//   // 
//   return favorites.some(meetup => 
//     meetup.id === meetupId)
// }

//  async function deleteMeetupHandler(id) {
//     await api.delete(`/api/page/meetup/delete/${id}`).then(() => {
//       const filteredMeetups = props.meetups.filter(m => m.id !== id);
//       props.filteredMeetups(filteredMeetups);
//     });
//  }

  return (
    
    <li key = {props.meetup._id}>
      <Card>
     <div >
       <p>Meetup Title: { props.meetup.title}</p>
       <p>Meetup Address: { props.meetup.address}</p>
       <p>Description:  { props.meetup.description}</p>
     </div>
     <div  className = {classes.buttons}>
       {
           location.pathname !== '/favorites' && ( <div>  <button className = "btn" onClick = {() => {ToggleFavoriteHandler(props.meetup._id)}}> {itemIsFavorite ? 'Added to favorites': 'To Favorite'}</button></div>)
       }
       <div>  <button className = "btn" onClick = {() =>  {(location.pathname === '/favorites') ?  deleteFavMeetupHandler(props.meetup._id): deleteMeetupHandler(props.meetup._id)}}>Delete</button></div>
     </div>
      </Card>
    </li>
  )
}

export default  withRouter(MeetupItem) ;