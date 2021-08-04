import {storage, Firebase} from "../Firebase";
import {useState} from 'react'

const NewStory = () => {

    const [submitted, setSubmitted] = useState(false)

    const submitForm = (event) => {
        event.preventDefault();
        const db = Firebase.firestore();
        const newStory = {
            name: event.target.name.value,
            text: event.target.text.value,
            redact: event.target.redact.value,
            approved: false
        }

        const uploadedFile = event.target.image.files;

        // if image is uploaded, add it to the story
        if (uploadedFile.length > 0) {
            const image = uploadedFile[0];
            const storageRef = storage.ref();
            const imageRef = storageRef.child(image.name);
            imageRef.put(image).then((r) => {
                r.ref.getDownloadURL().then((url) => {
                    newStory.image = url
                    db.collection("stories").add(newStory)
                });
            });
        } else {
            db.collection("stories").add(newStory)
        }

        setSubmitted(true)
    }
    return submitted ? 
        <div>
            <h1>Story Received</h1>
            Thank you for sharing your story with us!
        </div> : (
        <div>
            <h1>Submit your story</h1>
            <div className="reg">
                <form id="regForm" onSubmit={submitForm}>
                    <label>
                        Full Name:
                        <input name="name" type="text"/>
                    </label>

                    <label>
                        Your Story:
                        <textarea name="text"/>
                    </label>

                    <label>
                        Redact your name:
                        <input type="checkbox" name ="redact"/>
                    </label>

                    <label>
                        Upload an image:
                        <input type="file" name="image" accept="image/x-png,image/jpeg" />
                    </label>

                    <input type="submit" value="Submit"/>
                    
                </form>
            </div>
        </div>
    )
}

export default NewStory;