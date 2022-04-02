import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useLoginUserMutation } from '../../../queries/users/hooks'

export const useLoginFormHandler = () => {
    const {mutate: loginUser} = useLoginUserMutation()

    return useFormik({
    initialValues: {
        email: '',
        password: ''
    },
    onSubmit: values => {
        loginUser(values)
    },
    validationSchema
})}

const validationSchema = Yup.object({
    email: Yup.string()
            .email()
            .required("Email is required"),
    password: Yup.string()
            .min(6, "Password needs to be at least 6 characters long")
            .required("Password is required")
})

