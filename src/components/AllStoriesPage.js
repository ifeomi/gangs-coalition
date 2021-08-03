import {useState} from 'react'
import Modal from '@material-ui/core/Modal'
import Grid from '@material-ui/core/Grid';
import StoryPage from './StoryPage'

const AllStoriesPage = ({stories}) => {
    const Thumbnail = ({story}) => {
        const [open, setOpen] = useState(false);
        const handleOpen = () => {
            setOpen(true);
        };
        const handleClose = () => {
            setOpen(false);
        };

        return (
            <div key={story.id}>
                <StoryPage story={story} showTitle={false} showText={false}/>
                <input type="button" onClick={handleOpen} value="Open Story"/>
                <Modal open={open} onClose={handleClose}>
                    <StoryPage story={story} showTitle={false} showText={true}/>
                </Modal>
            </div>
        )
    }

    let storyThumbnails = []
    for (let i = 0; i < stories.length; i++) {
        storyThumbnails.push(<Thumbnail story={stories[i]}/>)
    }

    return (
        <div>
            <h1>All Stories</h1>
            <div>
                <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    spacing={3}
                >
                    <Grid item xs={10}>
                        <h1> hello </h1>
                    </Grid>
                    {storyThumbnails}
                </Grid>>
            </div>

        </div>
    )
}
export default AllStoriesPage