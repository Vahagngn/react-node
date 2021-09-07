import NewMeetupForm from './ui/NewMeetupForm';
import api from '../../Api';

function CreateMeetupPage() {

  function AddMeetupHandler(meetupData) {

    const meetup = {
      title: meetupData.title,
      address: meetupData.address,
      description: meetupData.description,
    }
    //  api.post('/api/meetup/create', meetup).
    //  then(response => {console.log(response.data.id)}).
    //  catch(error => {console.log(error.message)})
  }
  return <section>
  <h2 style = {{margin: "10px 0 0 50px"}}>Create New Meetup</h2>
  <NewMeetupForm onAddMeetup = {AddMeetupHandler}/>
</section>
}

export default CreateMeetupPage;