import { Formik, useFormik } from "formik"
import * as Yup from 'yup'

export const useExpenseFormHandler = () => {
    return useFormik({
        initialValues,
        onSubmit: (values, {resetForm}) => {
            resetForm({values: initialValues})
        },
        validationSchema

    })
}

const initialValues = {
    title: '',
    total: 0.00,
    categories: [],
    notes: ''
}

const validationSchema = Yup.object({
    title: Yup.string().required("Expenses must have a title"),
    total: Yup.number().required(),
    notes: Yup.string().required()
})