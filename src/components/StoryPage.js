import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Container from "@material-ui/core/Container";
import image_placeholder from '../image_placeholder.png';

const StoryPage = ({story, showTitle, showText}) => {
    // set default image if missing
    if (story.image === undefined) {
        story.image = image_placeholder
    }
    if (story.redact === "on") {
        story.name = "Redacted"
    
    }

    return (
        <Container maxWidth={"sm"}>
            {showTitle &&
            <h1>Sample Story</h1>
            }
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
                    {showText &&
                    <Typography variant="body2" color="text.secondary">
                        {story.text}
                    </Typography>
                    }
                </CardContent>
            </Card>
        </Container>
    )
}

export default StoryPage