import { User } from '../../types/User.types'
import './SingleUserDetailPage.style.css'

type SingleUserDetailPageProps = {
	Backto: () => void
	data: User
}

export const SingleUserDetailPage = ({
	Backto,
	data,
}: SingleUserDetailPageProps) => {
	return (
		<div className='viewpage-container'>
			<div>
				<p>Firstname: {data.firstName} </p>
				<p>Lastname: {data.lastName} </p>
				<p>Email: {data.email} </p>
				<p>Address: {data.address} </p>
				<p>Phone: {data.phoneNumber} </p>
				<img src={data.imageUrl} alt='user-image' />
			</div>
			<input type='button' value='Close' onClick={Backto} />
		</div>
	)
}
