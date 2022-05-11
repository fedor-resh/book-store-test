import React from 'react';
import {Book} from "../interfaces";
import Button from "../UI/Button";
import s from './Book.module.css'

interface BookProps {
    book:Book
    buyBook: (id: number) => void,
}

const BookItem = ({book, buyBook}: BookProps) => {
    return (
        <div key={book.id}>
            <p>{book.name}</p>

            {book.amount === 0
                ? <p style={{display: "inline-block"}}>нет в наличии</p>
                : <Button onClick={() => buyBook(book.id)}>купить</Button>
            }

            <p>Цена: {book.price}</p>
        </div>

    );
};

export default BookItem;