import MeetupItem from './meetupItem';
import api from '../../Api';
import {useState, useEffect} from 'react';

function AllMeetupsPage() {

 const {loadedMeetups, setLoadedMeetups} = useState(null);

 useEffect(() => {
  getMeetups();
 }, []);

 function getMeetups() {
   api.get('/api/meetups').then(response => {
     setLoadedMeetups(response);
   })
 }

    return <section>
        <h2 style = {{margin: "10px 0 0 50px"}}>All Meetups</h2>
  <ul>
     {
       <MeetupItem meetups = {loadedMeetups} filteredMeetups = {setLoadedMeetups}/>
      }
  </ul>
  </section>
  
}

export default AllMeetupsPage;