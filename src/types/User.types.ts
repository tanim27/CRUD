export interface User {
	id: string
	firstName: string
	lastName: string
	email: string
	address: string
	phoneNumber: string
	imageUrl: string
}

// export const dummyUser: User[] = [
// 	{
// 		id: new Date().toJSON().toString(),
// 		firstName: 'Abdullah',
// 		lastName: 'Tanim',
// 		email: 'abdullahtanim27@gmail.com',
// 		address: 'Mirpur',
// 		phoneNumber: '123',
// 		imageUrl: 'https://randomuser.me/api/portraits/men/43.jpg',
// 	},
// ]

export enum pageEnum {
	list,
	add,
	edit,
}
