import MeetupItem from './meetupItem';
import api from '../../Api';
import {useState, useEffect,useContext} from 'react';
import FavoritesContext from './store/favorite.context';

function AllMeetupsPage() {

  const [loadedMeetups, setLoadedMeetups] = useState([]);
  const [loadedFavorites, setLoadedFavorites] = useState([]);
 const [isLoading, setIsLoading] = useState(true);
 const favoritesCtx = useContext(FavoritesContext);
 const meetups = [];

//  async function getMeetups() {
   
//   // setIsLoading(true);
//  await api.get('/api/page/meetups').then(res => {
//     res.map(meetup => {
//       if(meetup.isFavorite === false)
//       {
//         meetups.push(meetup);
//         setLoadedMeetups(meetups)
//         // setIsLoading(false)
//         console.log(res);
//       }
//     })
//   });

// }




 function getMeetups() {
  setIsLoading(true);
  api.get('/api/page/meetups').then(res => {
    setLoadedMeetups(res)
  })
    setIsLoading(false);
}



async function deleteMeetupHandler(id) {
  // debugger
  const filteredMeetups = loadedMeetups.length ? loadedMeetups.filter(metup => metup._id !== id) : null;
  setLoadedMeetups(filteredMeetups);
  const response = await fetch(`/api/page/meetup/delete/${id}`, {
      method: "DELETE"
  });
  // favoritesCtx.favorites.map(meetup => {
  //   if(meetup.meetupsId === id) {
  //     favoritesCtx.removeFavorite(meetup._id);
  //   }
  // });
 
  const filteredFavMeetups = favoritesCtx.favorites.filter(m => m.meetupsId !== id);
  setLoadedFavorites(filteredFavMeetups);
}

useEffect(() => {
  getMeetups();
 }, []);

 //GET
//    async function getMeetups() {
//     setIsLoading(true);
//    await api.get('/api/page/meetups').then((data) => {
//     const meetups = [];

//     for(const key in data) {
//       const meetup = {
//         id: key,
//         ...data[key] //add all key,value pairs from nested object to meetup object
//       };
//       meetups.push(meetup);
//     }
//     setLoadedMeetups(meetups);
//     setIsLoading(false);

//    });
//  }


 //DELETE FROM MEETUPS
//   function deleteMeetupHandler(id) {
//     // 
//     // api.delete(`/api/page/meetup/delete/${id}`).then(res => {
      
//     //    console.log(res, "res");
//     //  })
//     fetch(`/api/page/meetup/delete/${id}`,
//      { method: 'DELETE' })
//     .then(() => console.log("deleted"))
//     .catch(error => {
//       console.error('There was an error!', error);
//   });
//     const filteredMeetups = loadedMeetups.filter(m => m.id !== id);
//     setLoadedMeetups(filteredMeetups);
// }




 //DELETE FROM Favorites
function deleteFavMeetupHandler(id) {
  // 
  favoritesCtx.removeFavorite(id);
  const filteredFavMeetups = favoritesCtx.favorites.filter(m => m._id !== id);
  setLoadedFavorites(filteredFavMeetups);
}

//  if(isLoading) {
//   return <section>
//     <p>Loading...</p>
//   </section>
// }

    return <section>
        <h2 style = {{margin: "10px 0 0 50px"}}>All Meetups</h2>
  <ul className = "listSection">
     {
       loadedMeetups.length ?
       loadedMeetups.map((meetup, index) => {
          return (

            <MeetupItem 
            key = {index} 
            meetup = {meetup}
            deleteMeetup = {deleteMeetupHandler}
            deleteFavMeetup = {deleteFavMeetupHandler}
            /> 
          )
       }): <p>List is empty</p>
       
      }
  </ul>
  </section>

}



export default AllMeetupsPage;