import React, {useState} from 'react';
import ListOfBooks from "./components/ListOfBooks/ListOfBooks";
import PrivateOffice from "./components/PrivatOffice/PrivateOffice";
import {Book} from "./interfaces";
import {booksFromDatabase} from "./booksFromDatabase";
import s from './standart.module.css'
import Background from "./UI/Background/Background";
import {useSetRecoilState} from "recoil";
import {showAlertState} from "./recoil/showAlertState";

class BoughtBooks {
    addBoughtBookById(bookId: number) {
        if (bookId in this) {
            // @ts-ignore
            this[bookId] += 1
        } else {
            // @ts-ignore
            this[bookId] = 1
        }
        return this
    }
}


function BookStore() {
    const [balance, setBalance] = useState(500)
    const [boughtBooks, setBoughtBooks] = useState<BoughtBooks>(new BoughtBooks())
    const [books, setBooks] = useState<Array<Book>>(booksFromDatabase)
    const setShowAlert = useSetRecoilState(showAlertState)

    function getPriceOfBoughtBooks() {
        return Object.entries(boughtBooks).reduce((acc, [id, amount]) => {
            return acc + books.find(book => book.id.toString() === id)!.price * amount
        }, 0)
    }

    function getAmountOfBoughtBooks() {
        return Object.values(boughtBooks).reduce((acc, val) => acc + val, 0)
    }

    function buyBook(bookId: number): void {
        const boughtBook: Book = books.find(book => book.id === bookId)!
        if (balance < boughtBook.price) {
            setShowAlert(true)
            return
        }
        setBooks([
            ...books.filter(el => el !== boughtBook),
            {...boughtBook, amount: boughtBook.amount - 1}
        ])
        setBalance(balance - boughtBook.price)
        setBoughtBooks(boughtBooks.addBoughtBookById(bookId))
    }
    function incrementBalance(){
        setBalance(balance=>balance + +prompt('на сколько попонить?')!)
    }
    return (
        <Background>
            <div className={s.wrapper}>
                <PrivateOffice
                    incrementBalance={incrementBalance}
                    balance={balance}
                    amountBoughtBooks={getAmountOfBoughtBooks()}
                    priceOfBoughtBooks={getPriceOfBoughtBooks()}
                />
                <ListOfBooks
                    books={books}
                    buyBook={buyBook}
                />
            </div>
        </Background>
    );
}

export default BookStore;
