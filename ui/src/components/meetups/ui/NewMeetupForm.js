import Card from './Card';
import classes from './NewMeetupForm.module.css';
import {useRef} from 'react';

function NewMeetupForm(props) {

 const titleInputRef = useRef();
 const addressInputRef = useRef();
 const descriptionInputRef = useRef();
 

 function SubmitHandler(event) {
    event.preventDefault();


    const enteredTitle = titleInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredDescription= descriptionInputRef.current.value;


    const meetupData = {
      title: enteredTitle, 
      address: enteredAddress,
      description: enteredDescription
    }


    props.onAddMeetup(meetupData);
 }




  return <Card>
    <form className ={classes.form} onSubmit = {SubmitHandler}>
       <div className="input-field">
         <label For="title"></label>
         <input type="text" id="Title" required ref = {titleInputRef} placeholder = "Meetup Title"/>
       </div>
       <div className="input-field">
         <label For="address"></label>
         <input type="text" id="address" required ref = {addressInputRef} placeholder = "Address"/>
       </div>
       <div className="input-field">
         <label For="description"></label>
         <input type="text" id="description" required ref = {descriptionInputRef} placeholder = "Description"/>
  
       </div>
       <div className={classes.buttons}>
        <button  className = "btn">Add New Meetup</button>
       </div>
    </form>
  </Card>
}

export default NewMeetupForm;