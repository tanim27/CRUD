import { ErrorMessage, Field, Form, Formik, FormikProps } from 'formik'
import { User } from '../../types/User.types'

type EditUserDataProps = {
	data: User
	BackToClickHandler: () => void
	EditClickHandler: (data: User) => void
}

const validateForm = (values: User) => {
	const errors: Partial<User> = {}

	if (!values.firstName) {
		errors.firstName = 'First Name is required'
	}

	if (!values.lastName) {
		errors.lastName = 'Last Name is required'
	}

	if (!values.email) {
		errors.email = 'Email is required'
	} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
		errors.email = 'Invalid email address'
	}

	if (!values.address) {
		errors.address = 'Address is required'
	}

	if (!values.phoneNumber) {
		errors.phoneNumber = 'Phone Number is required'
	}
	// else if (!/^\d{10}$/.test(values.phoneNumber)) {
	// 	errors.phoneNumber = 'Invalid phone number'
	// }

	if (!values.imageUrl) {
		errors.imageUrl = 'Image URL is required'
	} else if (
		!/^(https?:\/\/)?[\w\-]+(\.[\w\-]+)+[/#?]?.*$/i.test(values.imageUrl)
	) {
		errors.imageUrl = 'Invalid image URL'
	}

	return errors
}

export const EditUserData = ({
	data,
	BackToClickHandler,
	EditClickHandler,
}: EditUserDataProps) => {
	const initialValues: User = {
		id: data.id,
		firstName: data.firstName,
		lastName: data.lastName,
		email: data.email,
		address: data.address,
		phoneNumber: data.phoneNumber,
		imageUrl: data.imageUrl,
	}

	const onSubmit = (values: User) => {
		EditClickHandler(values)
	}

	return (
		<div>
			<h3>EditUserData</h3>
			<div>
				<Formik
					initialValues={initialValues}
					validate={validateForm}
					onSubmit={onSubmit}
				>
					{(formik: FormikProps<User>) => (
						<Form className='add-details-form'>
							<Field type='text' name='firstName' placeholder='First Name' />
							<ErrorMessage name='firstName' component='div' />

							<Field type='text' name='lastName' placeholder='Last Name' />
							<ErrorMessage name='lastName' component='div' />

							<Field type='text' name='email' placeholder='Email' />
							<ErrorMessage name='email' component='div' />

							<Field type='text' name='address' placeholder='Address' />
							<ErrorMessage name='address' component='div' />

							<Field
								type='text'
								name='phoneNumber'
								placeholder='Phone Number'
							/>
							<ErrorMessage name='phoneNumber' component='div' />

							<Field type='text' name='imageUrl' placeholder='Image URL' />
							<ErrorMessage name='imageUrl' component='div' />

							<button type='submit'>Save</button>
							<button type='button' onClick={BackToClickHandler}>
								Back
							</button>
						</Form>
					)}
				</Formik>
			</div>
		</div>
	)
}
