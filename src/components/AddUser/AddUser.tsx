import { ErrorMessage, Field, Form, Formik } from 'formik'
import * as Yup from 'yup'
import { User } from '../../types/User.types'
import './AddUser.style.css'

type AddUserProps = {
	BackToClickHandler: () => void
	SubmitClickHandler: (data: User) => void
}

const validationSchema = Yup.object().shape({
	firstName: Yup.string().required('First Name is required'),
	lastName: Yup.string().required('Last Name is required'),
	email: Yup.string()
		.email('Invalid email address')
		.required('Email is required'),
	address: Yup.string().required('Address is required'),
	phoneNumber: Yup.string().required('Phone Number is required'),
	imageUrl: Yup.string().url('Invalid URL').required('Image URL is required'),
})

export const AddUser = ({
	BackToClickHandler,
	SubmitClickHandler,
}: AddUserProps) => {
	const initialValues: User = {
		id: '',
		firstName: '',
		lastName: '',
		email: '',
		address: '',
		phoneNumber: '',
		imageUrl: '',
	}

	const onSubmit = (values: User) => {
		const data: User = {
			...values,
			id: new Date().toJSON().toString(),
		}
		SubmitClickHandler(data)
	}

	return (
		<div className='add-details-section'>
			<h2>Add New User</h2>
			<Formik
				initialValues={initialValues}
				validationSchema={validationSchema}
				onSubmit={onSubmit}
			>
				<Form className='add-details-form'>
					<Field type='text' name='firstName' placeholder='First Name' />
					<ErrorMessage name='firstName' component='div' />

					<Field type='text' name='lastName' placeholder='Last Name' />
					<ErrorMessage name='lastName' component='div' />

					<Field type='text' name='email' placeholder='Email' />
					<ErrorMessage name='email' component='div' />

					<Field type='text' name='address' placeholder='Address' />
					<ErrorMessage name='address' component='div' />

					<Field type='text' name='phoneNumber' placeholder='Phone Number' />
					<ErrorMessage name='phoneNumber' component='div' />

					<Field type='text' name='imageUrl' placeholder='Image URL' />
					<ErrorMessage name='imageUrl' component='div' />

					<button type='submit'>Save</button>
					<button type='button' onClick={BackToClickHandler}>
						Back
					</button>
				</Form>
			</Formik>
		</div>
	)
}
