import React, { useState } from 'react'
import './read-more.css'

interface Props {
    text: string
}

export const ReadMore = ({ text }: Props) => {
    const [isReadMore, setIsReadMore] = useState(true);

    const toggleReadMore = () => {
        setIsReadMore(!isReadMore);
    };

    return (
        <p className="Text">
            {isReadMore ? text.slice(0, 180) : text}
            <span onClick={toggleReadMore} className="read-or-hide">
                {isReadMore ? "[...read more]" : "[ show less]"}
            </span>
        </p>
    )
}
