import React from 'react';
import {Book} from "../../interfaces";
import BookItem from "../BookItem/BookItem";
import s from './ListOfBooks.module.css'

export interface ListOfBooksProps{
    books:Book[]
    buyBook:(id: number)=>void
}

const ListOfBooks = ({books, buyBook}:ListOfBooksProps) => {
    return (
        <div>
            <h3 className={s.title}>доступные книги</h3>
            {books&&books.sort((x,y)=>x.name>y.name?1:-1).map(book=>
                <BookItem key={book.id} book={book} buyBook={buyBook}/>
            )}
        </div>
    );
};

export default ListOfBooks;