import {useDogs} from "../contexts/dogContext";
import {Box, Button, Grid, Stack} from "@mui/material";
import {DogCard} from "../components/DogCard";
import {useNavigate} from "react-router-dom";

export const DogList = () => {
    const dogs = useDogs();
    const navigate = useNavigate();

    const handleAddNew = () => {
        navigate("/new")
    }

    return (
        <Stack>
            <Grid container spacing={2}>
                {dogs.list.map((dog) => (
                    <Grid item xs={3} key={dog.id}>
                        <DogCard dog={dog}/>
                    </Grid>
                ))}
            </Grid>
            <Box sx={{mt: 4}}>
                <Button onClick={handleAddNew}>Add New</Button>
            </Box>
        </Stack>

    );
}