import { useState } from 'react'
import Modal from '@material-ui/core/Modal'
import StoryPage from './StoryPage'

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
            <div key={story.id}>
                <StoryPage story={story} showTitle={false} showText={false} />
                <input type="button" onClick={handleOpen} value="Open Story" />
                <Modal open={open} onClose={handleClose}>
                    <StoryPage story={story} showTitle={false} showText={true} />
                </Modal>
            </div>
        )
    }

    let storyThumbnails = []
    for (let i = 0; i < stories.length; i++) {
        storyThumbnails.push(<Thumbnail story={stories[i]} />)
    }

    return (
        <div>
            <h1>All Stories</h1>
            {storyThumbnails}
        </div>
    )
}
export default AllStoriesPage