import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Container from "@material-ui/core/Container";


const StoryPage = ({story}) => {
    if (story.image === undefined) {
        story.image = 'public/image_placeholder.png'
    }

    return (
        <Container maxWidth={"sm"}>
            <h1>Sample Story</h1>
            <Card sx={{maxWidth: 345}}>
                <CardContent>
                    <CardMedia
                        sx={{height: 140}}
                        component={"img"}
                        src={story.image}
                        alt={story.name + " image"}
                    />
                    <Typography gutterBottom variant="h5" component="div">
                        {story.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {story.text}
                    </Typography>
                </CardContent>
            </Card>
        </Container>
    )
}

export default StoryPage