import React from 'react'
import { Card } from '../../components/card/card'
import { ListItem } from '../../components/list-item/list-item'
import { useGetRequest } from '../../hooks/useGetRequest'
import { Book } from '../../types/book.type'
import './home.css'


export const Home = () => {
    const {data: books} = useGetRequest('/book/list-books')

    console.log({book: books[0]})

    const renderItem = (item: Book) => {
        const { id } = item
        return <ListItem key={id} book={item} />
    }

    return (
        <div className="Home">
            <Card>
                {books?.map(renderItem)}
            </Card>
        </div>
    )
}