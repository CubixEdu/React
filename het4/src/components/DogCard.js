import {Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography} from "@mui/material";
import {useDogs} from "../contexts/dogContext";
import {useNavigate} from "react-router-dom";

export const DogCard = ({dog}) => {
    const dogs = useDogs();
    const navigate = useNavigate();

    const handleDelete = () => {
        dogs.delete(dog.id);
    }

    const handleEdit = () => {
        navigate(`/edit/${dog.id}`);
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
                <Button size="small" color="primary" onClick={handleEdit}>
                    Edit
                </Button>
                <Button size="small" color="primary" color="error" onClick={handleDelete}>
                    Delete
                </Button>
            </CardActions>
        </Card>
);
}