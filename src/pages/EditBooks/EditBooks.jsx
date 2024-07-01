import { TextField } from '@mui/material'

import './EditBooks.css'

const EditBooks = () => {
	return (
		<div className='editBooksContainer'>
			<TextField id='standard-basic' label='Поиск' variant='standard' />
		</div>
	)
}

export default EditBooks
