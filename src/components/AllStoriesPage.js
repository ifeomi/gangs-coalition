const AllStoriesPage = ({ stories }) => {
    const Thumbnail = ({ story }) => {
        return (
            <div>
                <img src={story.image} />
                <img src={story.image} alt={story.name + " image"}/>
                <h1>{story.name}</h1>
            </div>

        )
    }
    let storyThumbnails = []
    for (let i = 0; i < stories.length; i++){
    for (let i = 0; i < stories.length; i++) {
        storyThumbnails.push(<Thumbnail story={stories[i]} />)
    }

    return (
        <div>
            <h1>Here is the list of stories!</h1>
            <h1>All Stories</h1>
            {storyThumbnails}
        </div>
    )
}

export default AllStoriesPage