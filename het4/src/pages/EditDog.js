import {Button, Stack, TextField} from "@mui/material";
import {useState} from "react";
import {useLoaderData, useNavigate, useParams} from "react-router-dom";
import {useDogs} from "../contexts/dogContext";

export const EditDog = () => {
    const dogs = useDogs();
    const dog = useLoaderData();

    const navigate = useNavigate();


    const [values, setValues] = useState({
        name: dog.name,
        url: dog.url
    });

    const handleChange = (field) => (e) => {
        setValues(prev => ({
            ...prev,
            [field]: e.target.value
        }))
    }

    const handleSave = () => {
        dogs.update(dog.id, values)
        navigate('/')
    }

    return (
        <Stack spacing={2}>
            <TextField label="Name" value={values.name} onChange={handleChange("name")}/>
            <TextField label="Image Url" value={values.url} onChange={handleChange("url")}/>
            <Button variant="contained" onClick={handleSave}>Save</Button>
        </Stack>
    );
}