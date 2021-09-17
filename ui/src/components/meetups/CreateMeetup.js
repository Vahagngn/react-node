import NewMeetupForm from './ui/NewMeetupForm';
import api from '../../Api';
import {useHistory} from 'react-router-dom';

function CreateMeetupPage() {
  const history = useHistory();

  function AddMeetupHandler(meetupData) {
    const meetup = {
      title: meetupData.title,
      address: meetupData.address,
      description: meetupData.description,
      meetupsId: meetupData.meetupsId,
      isFavorite: false
    }
     api.post('/api/page/meetup/create', meetup);

     history.replace('/allmeetups');
  }
  return <section>
  <h2 style = {{margin: "10px 0 0 50px"}}>Create New Meetup</h2>
  <NewMeetupForm onAddMeetup = {AddMeetupHandler}/>
</section>
}

export default CreateMeetupPage;