import { TextField } from '@mui/material'
import './MyLibrary.css'

const MyLibrary = () => {
	return (
		<div className='myLibraryContainer'>
			<TextField id='standard-basic' label='Поиск' variant='standard' />
		</div>
	)
}

export default MyLibrary
