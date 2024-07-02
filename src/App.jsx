import { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { ResponsiveAppBar } from './components/ResponsiveAppBar'

import { MyLibrary } from './pages/MyLibrary'
import { EditBooks } from './pages/EditBooks'
import { AddBook } from './pages/AddBook'
import useBooksStore from './store/booksStore'

import './App.css'

const App = () => {
	const { fetchBooks, setIsLoading } = useBooksStore()

	useEffect(() => {
		setIsLoading(true)
		fetchBooks()
		setIsLoading(false)
	}, [])

	return (
		<div className='appContainer'>
			<ResponsiveAppBar />
			<Routes>
				<Route path='/' element={<MyLibrary />} />
				<Route path='/edit' element={<EditBooks />} />
				<Route path='/add' element={<AddBook />} />
			</Routes>
		</div>
	)
}

export default App
