import React from 'react'
import './card.css'

type Props = {
    children?: JSX.Element | JSX.Element[];
  };

export const Card = ({children} : Props) => {
    return (
        <div className="Card">
            {children}
        </div>
    )
}