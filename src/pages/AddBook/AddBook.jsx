import { useState } from 'react'
import { TextField, Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

import useBooksStore from '../../store/booksStore'

import './AddBook.css'

const AddBook = () => {
	const [title, setTitle] = useState('')
	const [author, setAuthor] = useState('')
	const [year, setYear] = useState('')
	const { setIsLoading, fetchBooks } = useBooksStore()
	const navigation = useNavigate()

	const handleTitleChange = value => {
		setTitle(value)
	}

	const handleAuthorChange = value => {
		setAuthor(value)
	}

	const handleYearChange = value => {
		setYear(value)
	}

	const addBook = async () => {
		const add = await axios.post('http://localhost:3002/book', {
			title,
			author,
			year: Number(year),
		})
		await fetchBooks()
	}

	const addBookClick = () => {
		if (title && author && year) {
			setIsLoading(true)
			addBook()
			navigation('/')
			setIsLoading(false)
		}
	}

	return (
		<div className='addBookContainer'>
			<div className='addTitle'>Добавить книгу в библиотеку</div>
			<div className='inputsContainer'>
				<TextField
					id='outlined-basic'
					label='Название'
					variant='outlined'
					className='input'
					onChange={e => handleTitleChange(e.target.value)}
				/>
				<TextField
					id='outlined-basic'
					label='Автор'
					variant='outlined'
					className='input'
					onChange={e => handleAuthorChange(e.target.value)}
				/>
				<TextField
					id='outlined-basic'
					label='Год издания'
					variant='outlined'
					className='input'
					onChange={e => handleYearChange(e.target.value)}
					type='number'
				/>
			</div>
			<Button
				className='addButton'
				variant='contained'
				onClick={() => addBookClick()}>
				Добавить
			</Button>
		</div>
	)
}
export default AddBook
