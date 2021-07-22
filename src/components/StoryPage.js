
const StoryPage = ({ story }) => {

    return (
        <div>
            <img src={story.image} alt={story.name + " image"}/>
            <h1>{story.name}</h1>
            <h1>{story.text}</h1>
        </div>
    )
}

export default StoryPage