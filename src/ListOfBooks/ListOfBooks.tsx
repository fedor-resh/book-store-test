import React from 'react';
import {Book} from "../interfaces";
import BookItem from "../components/Book";

export interface ListOfBooksProps{
    books:Book[]
    buyBook:(id: number)=>void
}

const ListOfBooks = ({books, buyBook}:ListOfBooksProps) => {
    return (
        <div>
            {books&&books.sort((x,y)=>x.name>y.name?1:-1).map(book=>
                <BookItem book={book} buyBook={buyBook}/>
            )}
        </div>
    );
};

export default ListOfBooks;