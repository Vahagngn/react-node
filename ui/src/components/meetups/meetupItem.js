import Card from './ui/Card';
import classes from './meetupItem.module.css';
import { useLocation, withRouter } from 'react-router-dom';
import {useState} from 'react';
import api from '../../Api';

const MeetupItem = (props) => {

 const location = useLocation();

   //  const {favorites, setFavorites} = useState(null);
   const favorites = [];
   let itemIsFavorite = false;




 function ToggleFavoriteHandler(favMeetupId) {

debugger
if(itemIsFavorite) {
  props.deleteMeetup(favMeetupId);
} 
    const fav = {
      id: favMeetupId, 
      title: props.meetup.title,
      address: props.meetup.title.address,
      description: props.meetup.title.description
    }
    // setFavorites(fav);
    favorites.concat(fav);


  api.post('/api/address/favorite/create', fav).
  then(response => {console.log(response)})

  itemIsFavorite = !itemIsFavorite;

 }

 function deleteMeetupHandler(id) {
   props.deleteMeetup(id);
 }

 function itemIsFavoriteHandler(meetupId){
  debugger
  return favorites.some(meetup => 
    meetup.id === meetupId)
}

//  async function deleteMeetupHandler(id) {
//     await api.delete(`/api/page/meetup/delete/${id}`).then(() => {
//       const filteredMeetups = props.meetups.filter(m => m.id !== id);
//       props.filteredMeetups(filteredMeetups);
//     });
//  }

  return (
    
    <li key = {props.meetup.id}>
      <Card>
     <div >
       <p>Meetup Title:{props.meetup.title}</p>
       <p>Meetup Address:{props.meetup.address}</p>
       <p>Description:{props.meetup.description}</p>
     </div>
     <div  className = {classes.buttons}>
       {
           location.pathname !== '/favorites' && ( <div>  <button className = "btn" onClick = {() => ToggleFavoriteHandler(props.meetup.id)}> {!itemIsFavorite ? 'Remove from favorites': 'To Favorite'}</button></div>)
       }
       <div>  <button className = "btn" onClick = {() => deleteMeetupHandler(props.meetup.id)}>Delete</button></div>
     </div>
      </Card>
    </li>
  )
}

export default  withRouter(MeetupItem) ;