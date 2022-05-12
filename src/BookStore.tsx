import React, {useState} from 'react';
import ListOfBooks from "./components/ListOfBooks/ListOfBooks";
import PrivateOffice from "./components/PrivatOffice/PrivateOffice";
import {Book} from "./interfaces";
import {booksFromDatabase} from "./booksFromDatabase";
import s from './standart.module.css'
import Background from "./UI/Background/Background";
import {useSetRecoilState} from "recoil";
import {showAlertState} from "./recoil/showAlertState";


function addBoughtBookById(books:any,bookId:number){
    if(bookId in books){
        books[bookId]+=1
    }else{
        books[bookId]=1
    }
    return books
}



function BookStore() {
    const [balance, setBalance] = useState(500)
    const [boughtBooks, setBoughtBooks] = useState<Object>({})
    const [books, setBooks] = useState<Array<Book>>(booksFromDatabase)
    const setShowAlert = useSetRecoilState(showAlertState)

    function buyBook(bookId: number): void {
        const boughtBook: Book = books.find(book => book.id === bookId)!
        console.log(boughtBook,boughtBooks)
        if (balance < boughtBook.price) {
            setShowAlert(true)
            return
        }
        setBooks([
            ...books.filter(el => el !== boughtBook),
            {...boughtBook, amount: boughtBook.amount - 1}
        ])
        setBalance(balance - boughtBook!.price)
        setBoughtBooks(addBoughtBookById(boughtBooks,bookId))
    }

    return (
        <Background>
            <div className={s.wrapper}>
                <PrivateOffice
                    balance={balance}
                    amountBoughtBooks={Object.values(boughtBooks).reduce((acc,val)=>acc+val,0)}
                    priceOfBoughtBooks={
                        Object.entries(boughtBooks).reduce((acc, [id,amount]) => {
                            return acc + books.find(book => book.id.toString() === id)!.price * amount
                        }, 0)
                    }
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
