import React, {useState} from 'react';
import ListOfBooks from "./ListOfBooks/ListOfBooks";
import PrivateOffice from "./PrivatOffice/PrivateOffice";
import {Book} from "./interfaces";
import {booksFromDatabase} from "./booksFromDatabase";


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

    function buyBook(bookId: number): void {
        const boughtBook: Book = books.find(book => book.id === bookId)!
        console.log(boughtBook,boughtBooks)
        if (balance < boughtBook.price) {
            alert('не хватает средств на счету')
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
        <div>
            <ListOfBooks
                books={books}
                buyBook={buyBook}
            />

            <PrivateOffice
                balance={balance}
                amountBoughtBooks={Object.values(boughtBooks).reduce((acc,val)=>acc+val,0)}
                priceOfBoughtBooks={
                    Object.entries(boughtBooks).reduce((acc, [id,amount]) => {
                        return acc + books.find(book => book.id.toString() === id)!.price * amount
                    }, 0)
                }
            />
        </div>
    );
}

export default BookStore;
