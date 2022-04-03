import { useFormik } from "formik"
import * as Yup from 'yup'


export const useLoginFormHandler = () => {

    return useFormik({
        initialValues,
        onSubmit: (values, {resetForm}) => {
            resetForm({values: initialValues})
        },
        validationSchema
    })
}

const validationSchema = Yup.object({
    email: Yup.string()
        .email()
        .required("Email is required"),
    password: Yup.string()
        .min(6, "Password needs to be at least 6 characters long")
        .required("Password is required")
})

const initialValues = {
    email: '',
    password: ''
}