import { create } from 'zustand'

const useEditModal = create(set => ({
	isOpen: false,
	setIsOpen: newState => set({ isOpen: newState }),
}))

export default useEditModal
