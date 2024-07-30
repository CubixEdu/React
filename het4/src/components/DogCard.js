import {Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography} from "@mui/material";
import {useDogs} from "../contexts/dogContext";

export const DogCard = ({dog}) => {
    const dogs = useDogs();

    const handleDelete = () => {
        dogs.delete(dog.id);
    }

    return (
        <Card >
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image={dog.url}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {dog.name}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary" color="error" onClick={handleDelete}>
                    Delete
                </Button>
            </CardActions>
        </Card>
);
}