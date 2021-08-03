import Firebase from "../Firebase";
import { spacing } from '@material-ui/system';
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
            
            <Box mx="auto" bgcolor="background.paper" p={1}>
                <form id="regForm" onSubmit={submitForm}>

                    <h1 className="reginput">Submit your story</h1>
                    <label>
                        Full Name:
                        <input name="name" type="text" className = "reginput"/>
                    </label>

                    <label>
                        Your Story:
                        <textarea name="text" className = "reginput"/>
                    </label>

                    <label>
                        Redact your name:
                        <input type="checkbox" name ="redact" className = "reginput"/>
                    </label>

                    <input type="submit" value="Submit" className = "reginput-submit"/>
                    
                </form>
            </Box>
        </div>
    )
}

export default NewStory;