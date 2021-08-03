import {Firebase} from "../Firebase";

import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import InputAdornment from '@material-ui/core/InputAdornment';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';


const NewStory = () => {
    const submitForm = (event) => {
        event.preventDefault();
        const db = Firebase.firestore();
        db.collection("stories").add({
            name: event.target.name.value,
            text: event.target.text.value,
            redact: event.target.redact.value,
            // TODO: add image url
            approved: false
        })
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