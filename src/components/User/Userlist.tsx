import { useState } from 'react'
import { User } from '../../types/User.types'
import { SingleUserDetailPage } from '../SingleUserDetailPage/SingleUserDetailPage'
import './Userlist.style.css'

type UserlistProps = {
	list: User[]
	deleteUser: (data: User) => void
	onEdit: (data: User) => void
}

export const Userlist = ({ list, deleteUser, onEdit }: UserlistProps) => {
	const [singlePage, setSinglePage] = useState(false)
	const [dataToShow, setDataToShow] = useState(null as User | null)

	const ViewDetailsPage = (data: User) => {
		setDataToShow(data)
		setSinglePage(true)
	}

	const BackToHandler = () => {
		setSinglePage(false)
	}

	return (
		<div className='user-list'>
			<h1>User List</h1>
			<div className='individual-detail'>
				{list.map((user) => {
					console.log(user)
					return (
						<div key={user.id}>
							<p>
								Username: {user.firstName} {user.lastName}
							</p>
							<p>Email: {user.email}</p>
							<p>Address: {user.address}</p>
							<p>Contact: {user.phoneNumber}</p>
							<div className='image-container'>
								<p>Profile Image:</p>
								<img src={user.imageUrl} alt='' />
							</div>
							<div className='button-container'>
								<input
									type='button'
									value='View'
									onClick={() => ViewDetailsPage(user)}
								/>
								<input
									type='button'
									value='Edit'
									onClick={() => onEdit(user)}
								/>
								<input
									type='button'
									value='Delete'
									onClick={() => deleteUser(user)}
								/>
							</div>
						</div>
					)
				})}
			</div>

			{singlePage && dataToShow !== null && (
				<SingleUserDetailPage Backto={BackToHandler} data={dataToShow} />
			)}
		</div>
	)
}
