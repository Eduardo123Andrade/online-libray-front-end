import React from 'react'
import { ReadMore } from '../read-more/read-more'
import "./list-item.css"


type Props = {
	book: Book;
	children?:
	| JSX.Element
	| JSX.Element[]
};

interface Book {
	id: number
	title: string
	page: number
	frontCover: string
	description: string
}


export const ListItem = ({ book }: Props) => {
	return (
		<div className="Container">
			<div className="Image">
				<img
					alt={book.title}
					height={100}
					src={book.frontCover}
				/>
			</div>
			<div className="About">
				<h1 className="Title">{book.title}</h1>
				<ReadMore text={book.description} />
			</div>
		</div>
	)
}