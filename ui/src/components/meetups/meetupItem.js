import Card from './ui/Card';
import classes from './meetupItem.module.css';
import { useLocation, withRouter } from 'react-router-dom';
import {useState} from 'react';
import api from '../../Api';

const MeetupItem = (props) => {

 const location = useLocation();

   //  const {favorites, setFavorites} = useState(null);
   const favorites = [];
   const itemIsFavorite = false;




 function AddToFavoriteHandler(favMeetup) {

    const fav = {
      id: favMeetup.id, 
      title: favMeetup.title,
      address: favMeetup.address,
      description: favMeetup.description
    }
    // setFavorites(fav);
    favorites.concat(fav);

      favorites.forEach(meetup => {
        if(meetup.id === favMeetup.id) {
          itemIsFavorite = true;
        }
      });
    //   itemIsFavorite = favorites.some( meetup => {
    //   meetup.id = favMeetup.id;
    // })
    console.log(favorites);
    console.log(itemIsFavorite);
// favorites.some(meetup => {
//     meetup.id === id;
//    });
  //  console.log(favorites.some(meetup => {
  //   meetup.id === id;
  //  }))

  api.post('/api/favMeetup', favorites).
  then(response => {console.log(response.data.id)}).
  catch(error => {console.log(error.message)})
 }

 function deleteMeetupHandler(id) {
  const filteredMeetups = props.meetups.filter(m => m.id !== id);
  props.filteredMeetups(filteredMeetups);
 }
 
  return (
    
    <li >
      <Card>
     <div >
       <p>Meetup Title:{props.title}</p>
       <p>Meetup Address:{props.address}</p>
       <p>Description:{props.description}</p>
     </div>
     <div  className = {classes.buttons}>
       {
           location.pathname !== '/favorites' && ( <div>  <button className = "btn" onClick = {() => AddToFavoriteHandler(props)}> {itemIsFavorite? 'Remove from favorites': 'To Favorite'}</button></div>)
       }
       <div>  <button className = "btn" onClick = {() => deleteMeetupHandler(props.id)}>Delete</button></div>
     </div>
      </Card>
    </li>
  )
}

export default  withRouter(MeetupItem) ;