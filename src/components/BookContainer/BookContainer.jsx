import './BookContainer.css'

const BookContainer = ({ title, author, year, index }) => {
	return (
		<div className='listItem'>
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
		</div>
	)
}

export default BookContainer
