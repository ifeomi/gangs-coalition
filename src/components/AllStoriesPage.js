import Modal from '@material-ui/core/Modal';
import { useState } from 'react'
import StoryPage from "./StoryPage"

const AllStoriesPage = ({ stories }) => {
    const Thumbnail = ({ story }) => {
        const [open, setOpen] = useState(false);
        const handleOpen = () => {
            setOpen(true);
        };
        const handleClose = () => {
            setOpen(false);
        };
        return (
            
        <div>

            <div onclick= {handleOpen}>
                <img src={story.image} />
                <h1>{story.name}</h1>

            </div>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="simple-modal-title"
              aria-describedby="simple-modal-description"
            >
              <StoryPage story = {story} />
            </Modal>
        </div>

        )
    }
    let storyThumbnails = []
    for (let i = 0; i < stories.length; i++){
        storyThumbnails.push(<Thumbnail story={stories[i]} />)
    }

    return (
        <div>
            <h1>Here is the list of stories!</h1>
            {storyThumbnails}
        </div>

    )
}

export default AllStoriesPage