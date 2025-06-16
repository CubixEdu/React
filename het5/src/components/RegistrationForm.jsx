import {Box, Button, Stack} from "@mui/material";
import {Field, Form, Formik} from "formik";
import {TextField} from "formik-mui";
import {validation} from "../utils/validation";
import {FormResult} from "./FormResult";


const validateForm = values => {
    const errors = {};

    if (values.password !== values.passwordConfirm) {
        errors.passwordConfirm = "Passwords do not match"
    }


    return errors;
}


export const RegistrationForm = () => {
    return (
        <Box pt={4}>
            <Formik
                initialValues={{username: '', email: '', password: '', passwordConfirm: ''}}
                onSubmit={(values) => console.log(values)}
                validate={validateForm}
            >
                {({isSubmitting}) => (
                    <Stack>
                        <FormResult />
                        <Form>
                            <Stack spacing={2}>
                                <Field type="text" name="username" component={TextField} validate={validation.username} label="Username" />
                                <Field type="email" name="email" component={TextField} validate={validation.email} label="Email" />
                                <Field type="password" name="password" validate={validation.password} component={TextField} label="Password" />
                                <Field type="password" name="passwordConfirm" validate={validation.password} component={TextField} label="Confirm Password" />

                                <Button type="submit" disabled={isSubmitting}>
                                    Submit
                                </Button>
                            </Stack>
                        </Form>

                    </Stack>

                )}
            </Formik>
        </Box>
    )
}