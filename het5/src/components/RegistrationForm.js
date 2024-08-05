import {Box, Button, Stack} from "@mui/material";
import {Field, Form, Formik} from "formik";
import {TextField} from "formik-mui";
import {validation} from "../utils/validation";
import {FormResult} from "./FormResult";

const validateForm = values => {
    const errors = {};

    if (values.password !== values.passwordConfirm) {
        errors.passwordConfirm = "Passwords do not match";
    }

    return errors;
}



export const RegistrationForm = () => {
    return (
        <Box pt={4}>
            <Formik
                initialValues={{ username: "", email: "", password: "", passwordConfirm: ""}}
                validate={validateForm}
                onSubmit={(values) => {
                    console.log(values)
                }}
            >
                {({isSubmitting}) => (
                    <Stack>
                        <FormResult />
                        <Form>
                            <Stack spacing={2}>
                                <Field type="text" name="username" component={TextField} label="Username" validate={validation.username} />
                                <Field type="email" name="email" component={TextField} label="Email" validate={validation.email} />
                                <Field type="password" name="password" component={TextField} label="Password" validate={validation.password} />
                                <Field type="password" name="passwordConfirm" component={TextField} validate={validation.password} label="Confirm Password" />

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