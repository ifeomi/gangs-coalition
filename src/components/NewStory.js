import {storage, Firebase} from "../Firebase";

import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import InputAdornment from '@material-ui/core/InputAdornment';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';


const NewStory = () => {
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
    }
    return (
        <div>
            <h1>Submit your story</h1>
            <div>
                <form id="regForm" onSubmit={submitForm}>
                    <TextField
                        id="name"
                        name="name"
                        label="Your name"
                        helperText="Providing your name is optional. Publicly redact your name by checking the box on the right."
                        variant="outlined"
                        InputProps={{
                        endAdornment: <InputAdornment position="end"><Checkbox name="redact"/></InputAdornment>
                        }}
                    />

                    <TextField
                        id="text"
                        name="text"
                        label="Your story"
                        helperText="Share as many or as few details as you'd like about your experience with NYPD gang policing here."
                        variant="outlined"
                        multiline
                    />

                    <TextField
                        id="image"
                        name="image"
                        label="Upload an image"
                        defaultValue=""
                        helperText="You can upload an image to accompany your story. It will be publicly visible."
                        variant="outlined"
                        type="file"
                        InputLabelProps={{ shrink: true }}
                        InputProps={{ accept: "image/*" }}
                    />

                    <Box mx="auto">
                        <Button variant="contained" color="primary" type="submit" disableElevation>
                            Submit
                        </Button>
                    </Box>
                </form>
            </div>
        </div>
    )
}

export default NewStory;