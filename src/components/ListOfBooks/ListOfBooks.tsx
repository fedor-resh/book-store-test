import React from 'react';
import {Book} from "../../interfaces";
import BookItem from "../BookItem/BookItem";
import s from './ListOfBooks.module.css'
import {useInput} from "../../customHooks";
// @ts-ignore
import {ReactComponent as Search} from "../../assets/svg/search.svg";
export interface ListOfBooksProps{
    books:Book[]
    buyBook:(id: number)=>void
}

const ListOfBooks = ({books, buyBook}:ListOfBooksProps) => {
    const search = useInput('')
    return (
        <div className={s.list__of__books}>
            <h3 className={s.title}>доступные книги</h3>

            <div className={s.input__wrapper}>
                <label>
                    <Search/>
                    <input placeholder='search' className={s.input} {...search.bind}  type="text"/>
                </label>
            </div>
            {books.filter(book => book.name.toLowerCase().includes(search.value.toLowerCase())).length !== 0
                ? books.filter(book => book.name.toLowerCase().includes(search.value.toLowerCase()))
                .sort((x,y)=>x.name>y.name?1:-1).map(book=>
                <BookItem key={book.id} book={book} buyBook={buyBook}/>)

                :<p className={s.empty}>нет совпадений</p>
            }
        </div>
    );
};

export default ListOfBooks;