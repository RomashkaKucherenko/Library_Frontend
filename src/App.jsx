import { Routes, Route } from 'react-router-dom'
import { ResponsiveAppBar } from './ResponsiveAppBar'

import { MyLibrary } from './pages/MyLibrary'
import { EditBooks } from './pages/EditBooks'
import { AddBook } from './pages/AddBook'

import './App.css'

const App = () => {
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
