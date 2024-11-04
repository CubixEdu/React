import {
    Button,
    FormControl,
    IconButton,
    InputAdornment,
    InputLabel,
    OutlinedInput,
    Stack,
    TextField
} from "@mui/material";
import {useState} from "react";
import {useDogs} from "../contexts/dogContext";
import {useNavigate} from "react-router-dom";
import {Image} from "../utils/image";
import ShuffleIcon from '@mui/icons-material/Shuffle';


export const AddNew = () => {
    const [name, setName] = useState("");
    const [url, setUrl] = useState("");
    const dogs = useDogs();
    const navigate = useNavigate();


    const handleGetRandomUrl = () => {
        Image.getRandomUrl().then(randomUrl => setUrl(randomUrl));

    }

    const handleAdd = () => {
        if (name && url) {
            dogs.create(name, url)
            navigate("/")
        }
    }


    return (
        <Stack spacing={2}>
            <TextField label="Name" value={name} onChange={(e) => setName(e.target.value)}/>
            <FormControl>
                <InputLabel htmlFor="image-url">Image Url</InputLabel>
                <OutlinedInput
                    id="image-url"
                    label="Image Url"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleGetRandomUrl}
                                edge="end"
                            >
                                <ShuffleIcon/>
                            </IconButton>
                        </InputAdornment>
                    }/>
            </FormControl>

            <Button variant="contained" onClick={handleAdd}>Add</Button>
        </Stack>
    )
}