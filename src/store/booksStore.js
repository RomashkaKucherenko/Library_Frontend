import { create } from 'zustand'

const initialBooksStore = {
	books: [],
	isLoading: false,
	errors: [],
}

const useBooksStore = create(set => ({
	...initialBooksStore,
	setBooks: books => {
		set({ books })
	},
	setBooksErrors: error =>
		set(prevState => ({ errors: [...prevState.errors, error] })),
}))

export default useBooksStore
