import React from 'react'
import { Card } from '../../components/card/card'
import { Hello } from '../../components/hello/hello'
import { ListItem } from '../../components/list-item/list-item'
import { RegisterBookForm } from '../../forms/register-book/registerBook'
import { useGetRequest } from '../../hooks/useGetRequest'
import { Book } from '../../types/book.type'
import './home.css'


export const Home = () => {
	const { data: books = [] } = useGetRequest('/book/list-books')

	const renderItem = (item: Book) => {
		const { id } = item
		return <ListItem key={id} book={item} />
	}

	return (
		<div className="Home">

			<div>
				<Card>
					<Hello />
				</Card>

				<div className='RegisterBookContainer'>
					<Card>
						<RegisterBookForm />
					</Card>
				</div>
			</div>

			{	books.length && <div className='ListBookContainer'>
				<Card>
					{books.map(renderItem)}
				</Card>
			</div>}

		</div>
	)
}