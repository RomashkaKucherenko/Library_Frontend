import { create } from 'zustand'

const initialBooksStore = {
	title: '',
	author: '',
	year: '',
	id: '',
}

const useEditStore = create(set => ({
	...initialBooksStore,
	setTitle: newTitle => set({ title: newTitle }),
	setAuthor: newAuthor => set({ author: newAuthor }),
	setYear: newYear => set({ year: newYear }),
	setId: newId => set({ id: newId }),
}))

export default useEditStore
