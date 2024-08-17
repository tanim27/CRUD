import { useEffect, useState } from 'react'
import { User, pageEnum } from '../../types/User.types'
import { AddUser } from '../AddUser/AddUser'
import { EditUserData } from '../EditUserData/EditUserData'
import { Userlist } from '../User/Userlist'
import './Home.style.css'

export const Home = () => {
	const [user, setUser] = useState<User[]>([])
	const [page, setPage] = useState(pageEnum.list)
	const [dataToEdit, setDataToEdit] = useState({} as User)

	useEffect(() => {
		try {
			const storedData = localStorage.getItem('userData')
			if (storedData) {
				const parsedData = JSON.parse(storedData)
				if (Array.isArray(parsedData)) {
					setUser(parsedData)
				} else {
					console.error('Invalid data format in local storage')
				}
			}
		} catch (error) {
			console.error('Failed to rehydrate user data from local storage:', error)
		}
	}, [])

	useEffect(() => {
		try {
			if (user.length > 0) {
				localStorage.setItem('userData', JSON.stringify(user))
			} else {
				localStorage.removeItem('userData')
			}
		} catch (error) {
			console.error('Failed to persist user data to local storage:', error)
		}
	}, [user])

	const AddUserClickHandler = () => {
		setPage(pageEnum.add)
	}

	const ShowDetailsPage = () => {
		setPage(pageEnum.list)
	}

	const AddUserDetailsHandler = (data: User) => {
		setUser([...user, data])
		setPage(pageEnum.list)
	}

	const DeleteHandler = (data: User) => {
		// const updatedUserList = user.filter((user) => user.id!== id)
		const indexToDelete = user.indexOf(data)
		const updatedUserList = [...user]
		updatedUserList.splice(indexToDelete, 1)
		setUser(updatedUserList)
	}

	const EditUserHandler = (data: User) => {
		setDataToEdit(data)
		setPage(pageEnum.edit)
	}

	const UpdateDataHandler = (data: User) => {
		const updatedUserList = user.map((user) =>
			user.id === data.id ? data : user,
		)
		setUser(updatedUserList)
		setPage(pageEnum.list)
	}

	return (
		<>
			<header>
				<h1>Welcome to Eutropia IT</h1>
			</header>

			{page === pageEnum.list && (
				<div className='user-section'>
					<Userlist
						list={user}
						deleteUser={DeleteHandler}
						onEdit={EditUserHandler}
					/>
					<input type='button' value='Add User' onClick={AddUserClickHandler} />
				</div>
			)}

			{page === pageEnum.add && (
				<AddUser
					BackToClickHandler={ShowDetailsPage}
					SubmitClickHandler={AddUserDetailsHandler}
				/>
			)}

			{page === pageEnum.edit && (
				<EditUserData
					data={dataToEdit}
					BackToClickHandler={ShowDetailsPage}
					EditClickHandler={UpdateDataHandler}
				/>
			)}
		</>
	)
}
