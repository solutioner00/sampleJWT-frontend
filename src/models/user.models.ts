export interface User {
	data: {
		token: string,
		user: {
			id: number,
			email: string,
			name_first: string,
			name_last: string,
		}  
	},
	error: string,
}
