import MeetupItem from './meetupItem';
import api from '../../Api';
import {useState, useEffect} from 'react';

function AllMeetupsPage() {

 const {loadedMeetups, setLoadedMeetups} = useState(null);
 const [isLoading, setIsLoading] = useState(true);

 useEffect(() => {
  getMeetups();
 }, []);

 async function getMeetups() {
  setIsLoading(true);
   await api.get('/api/meetups').then(response => {
    const meetups = [];

    for(const key in response) {
      const meetup = {
        id: key,
        ...response[key] //add all key,value pairs from nested object to meetup object
      };
      meetups.push(meetup);
    }
    setLoadedMeetups(meetups);
    setIsLoading(false);

   });


  
 }

 if(isLoading) {
  return <section>
    <p>Loading...</p>
  </section>
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