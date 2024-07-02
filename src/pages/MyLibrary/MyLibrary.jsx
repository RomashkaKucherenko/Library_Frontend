import { TextField } from '@mui/material'
import { useEffect, useState } from 'react'

import { EditBooks } from '../EditBooks'
import { BookContainer } from '../../components/BookContainer'
import { useEditModal, useBooksStore } from '../../store'

import './MyLibrary.css'

const MyLibrary = () => {
	const { books } = useBooksStore()
	const { isOpen } = useEditModal()
	const [search, setSearch] = useState('')

	const handleSearchChange = value => {
		setSearch(value)
	}

	const findBooks = () => {
		const findedBooks = []
		books.forEach(book => {
			if (
				book.title.includes(search.trim()) ||
				book.author.includes(search.trim())
			) {
				findedBooks.push(book)
			}
		})
		return findedBooks
	}

	useEffect(() => {
		findBooks()
	}, [search])

	return !isOpen ? (
		<div className='myLibraryContainer'>
			<div className='myLibraryHeader'>
				<div className='bookListTitle'>
					Список книг в моей библиотеке
				</div>
				<TextField
					id='standard-basic'
					label='Поиск'
					variant='standard'
					onChange={e => handleSearchChange(e.target.value)}
					value={search}
				/>
			</div>
			<div className='booksListContainer'>
				{findBooks().length !== 0
					? findBooks().map((book, index) => (
							<BookContainer
								title={book.title}
								author={book.author}
								year={book.year}
								index={index}
								key={`${book.title}_${book.author}`}
								id={book.id}
							/>
					  ))
					: books.map((book, index) => (
							<BookContainer
								title={book.title}
								author={book.author}
								year={book.year}
								index={index}
								key={`${book.title}_${book.author}`}
								id={book.id}
							/>
					  ))}
			</div>
		</div>
	) : (
		<EditBooks />
	)
}

export default MyLibrary
