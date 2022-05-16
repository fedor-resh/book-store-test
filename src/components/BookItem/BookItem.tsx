import React, {FC} from 'react';
import {Book} from "../../interfaces";
import Button from "../../UI/Button/Button";
import s from './BookItem.module.css'
import '../../UI/Button/Button.module.css'

interface BookProps {
    book:Book
    buyBook: (id: number) => void,
}

const BookItem:FC<BookProps> = ({book, buyBook}) => {
    return (
        <div className={s.book__item} key={book.id}>
            <div>
                <p className={s.name}>{book.name}</p>
                <p className={s.price}>Цена: {book.price}</p>
            </div>
            {book.amount === 0
                ? <p className={s.alert}>нет в наличии</p>
                : <Button className={s.button} onClick={() => buyBook(book.id)}>купить</Button>
            }

        </div>
    );
};

export default BookItem;