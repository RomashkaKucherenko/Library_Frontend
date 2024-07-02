import { create } from 'zustand'
import axios from 'axios'

const initialBooksStore = {
	books: [],
	isLoading: false,
	errors: [],
}

const useBooksStore = create(set => ({
	...initialBooksStore,
	fetchBooks: async () => {
		const { data } = await axios.get('http://localhost:3002/book')
		set({ books: data })
	},
	setIsLoading: status => set({ isLoading: status }),
	setBooksErrors: error =>
		set(prevState => ({ errors: [...prevState.errors, error] })),
}))

export default useBooksStore
