import { useEditModal, useEditStore } from '../../store'

import './BookContainer.css'

const BookContainer = ({ title, author, year, id, index }) => {
	const { setIsOpen } = useEditModal()
	const { setTitle, setAuthor, setYear, setId } = useEditStore()
	const chooseBook = () => {
		setIsOpen(true)
		setTitle(title)
		setAuthor(author)
		setYear(year)
		setId(id)
	}
	return (
		<button className='listItem' onClick={() => chooseBook()}>
			<div className='index'>{index + 1}.</div>
			<div className='bookContainer'>
				<div className='bookContainerTitleKeeper'>
					<div>Название:</div>
					<div className='bookContainerTitle'>{title}</div>
				</div>
				<div className='bookContainerAuthorKeeper'>
					<div>Автор:</div>
					<div className='bookContainerAuthor'>{author}</div>
				</div>
				<div className='bookContainerYearKeeper'>
					<div>Год издания:</div>
					<div className='bookContainerYear'>{year}</div>
				</div>
			</div>
		</button>
	)
}

export default BookContainer
