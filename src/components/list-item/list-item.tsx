import React from 'react'
import { Book } from '../../types/book.type';
import { ReadMore } from '../read-more/read-more'
import "./list-item.css"


type Props = {
	book: Book;
	children?:
	| JSX.Element
	| JSX.Element[]
};

export const ListItem = ({ book }: Props) => {
	return (
		<div className="ListItemContainer">
			<div className="Image">
				<img
					alt={book.title}
					height={100}
					width={100}
					src={book.imagePath}
				/>
			</div>
			<div className="About">
				<h1 className="Title">{book.title}</h1>
				<ReadMore text={book.description} />
			</div>
		</div>
	)
}