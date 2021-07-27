import Firebase from "../Firebase";

const NewStory = () => {
    const submitForm = (event) => {
        event.preventDefault();
        const db = Firebase.firestore();
        db.collection("stories").add({
            name: event.target.name.value,
            text: event.target.text.value,
            // image: event.target.name.value
            approved: false
        })
    }
    return (
        <div>
            <h1>Register</h1>
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
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        </div>
    )
}

export default NewStory;