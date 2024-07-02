import { TextField, Button } from '@mui/material'
import axios from 'axios'

import { useBooksStore, useEditModal, useEditStore } from '../../store'

import './EditBooks.css'

const EditBooks = () => {
	const { title, author, year, id, setTitle, setAuthor, setYear } =
		useEditStore()
	const { fetchBooks } = useBooksStore()
	const { setIsOpen } = useEditModal()

	const handleTitleChange = value => {
		setTitle(value)
	}

	const handleAuthorChange = value => {
		setAuthor(value)
	}

	const handleYearChange = value => {
		setYear(value)
	}

	const saveFunction = async () => {
		const save = await axios.put(`http://localhost:3002/book/${id}`, {
			title,
			author,
			year,
		})
		await fetchBooks()
	}

	const deleteFunction = async () => {
		const destroy = await axios.delete(`http://localhost:3002/book/${id}`)
		await fetchBooks()
	}

	const onSaveClick = () => {
		saveFunction()
		setIsOpen(false)
	}

	const onDeleteClick = () => {
		deleteFunction()
		setIsOpen(false)
	}

	return (
		<div className='editBooksContainer'>
			<div className='editPageTitle'>Редактирование книги</div>
			<div className='editInputsContainer'>
				<TextField
					id='standard-basic'
					label='Название'
					variant='outlined'
					value={title}
					onChange={e => handleTitleChange(e.target.value)}
					className='input'
				/>
				<TextField
					id='standard-basic'
					label='Автор'
					variant='outlined'
					value={author}
					onChange={e => handleAuthorChange(e.target.value)}
					className='input'
				/>
				<TextField
					id='standard-basic'
					label='Год издания'
					variant='outlined'
					value={year}
					onChange={e => handleYearChange(e.target.value)}
					className='input'
				/>
			</div>
			<div className='editButtonsContainer'>
				<Button variant='contained' onClick={() => onSaveClick()}>
					Сохранить
				</Button>
				<Button
					variant='contained'
					color='error'
					onClick={() => onDeleteClick()}>
					Удалить
				</Button>
			</div>
		</div>
	)
}

export default EditBooks
