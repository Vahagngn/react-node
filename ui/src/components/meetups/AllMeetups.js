import MeetupItem from './meetupItem';
import api from '../../Api';
import {useState, useEffect} from 'react';

function AllMeetupsPage() {

  const [loadedMeetups, setLoadedMeetups] = useState([]);
 const [isLoading, setIsLoading] = useState(true);

 useEffect(() => {
  getMeetups();
 }, []);

   async function getMeetups() {

  setIsLoading(true);
   await api.get('/api/page/meetups').then((data) => {
    const meetups = [];

    for(const key in data) {
      const meetup = {
        id: key,
        ...data[key] //add all key,value pairs from nested object to meetup object
      };
      meetups.push(meetup);
    }
    setLoadedMeetups(meetups);
    setIsLoading(false);

   });


  
 }

  function deleteMeetupHandler(id) {
    debugger
    api.delete(`/api/page/meetup/delete/${id}`).then(res => {
      
       console.log(res, "res");
     })
  const filteredMeetups = loadedMeetups.filter(m => m.id !== id);
  setLoadedMeetups(filteredMeetups);
 
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
       loadedMeetups.map((meetup, index) => {
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



export default AllMeetupsPage;