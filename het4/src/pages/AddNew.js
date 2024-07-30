import {Button, Stack, TextField} from "@mui/material";
import {useEffect, useState} from "react";
import {useDogs} from "../contexts/dogContext";
import {useNavigate} from "react-router-dom";
import {Image} from "../utils/image";


export const AddNew = () => {
    const [name, setName] = useState("");
    const [url, setUrl] = useState("");
    const dogs = useDogs();
    const navigate = useNavigate();

    useEffect(() => {
        Image.getRandomUrl().then(randomUrl => setUrl(randomUrl));
    }, []);

    const handleAdd = () => {
        if (name && url) {
            dogs.create(name, url)
            navigate("/")
        }
    }


    return (
        <Stack spacing={2}>
            <TextField label="Name" value={name} onChange={(e) => setName(e.target.value)} />
            <TextField label="Image Url" value={url} onChange={(e) => setUrl(e.target.value)} />
            <Button variant="contained" onClick={handleAdd}>Add</Button>
        </Stack>
    )
}