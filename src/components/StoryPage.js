
const StoryPage = ({ story }) => {

    return (
        <div>
            <img src={story.avatar_url} />
            <h1>{story.login}</h1>
            <h1>{story.followers} Followers</h1>
        </div>
    )
}

export default StoryPage