import { useFormik } from "formik"
import * as Yup from 'yup'

export const useSignupFormHandler = () => {
    return useFormik({
        initialValues,
        onSubmit: (values, {resetForm}) => {
            resetForm({values: initialValues})
        },
        validationSchema
})}

const validationSchema = Yup.object({
    firstName: Yup.string(),
    lastName: Yup.string(),
    email: Yup.string().email(),
    password: Yup.string().min(6, "Password must be at least 6 characters")
})

const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    password: ''
}
