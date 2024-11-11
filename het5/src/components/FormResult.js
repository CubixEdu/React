import {useFormikContext} from "formik";
import {Button, Stack} from "@mui/material";


export const FormResult = () => {
    const {values, isSubmitting, isValid, resetForm} = useFormikContext();
    const isVisible = isSubmitting && isValid;


    return isVisible ? (
        <Stack spacing={2}>
            <pre>{JSON.stringify(values, null, 4)}</pre>
            <Button onClick={resetForm}>Reset</Button>
        </Stack>
    ) : null;
}