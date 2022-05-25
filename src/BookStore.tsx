import React, { useState } from 'react'
import ListOfBooks from './components/ListOfBooks/ListOfBooks'
import PrivateOffice from './components/PrivatOffice/PrivateOffice'
import { Book } from './interfaces'
import { booksFromDatabase } from './booksFromDatabase'
import s from './standart.module.css'
import Background from './UI/Background/Background'
import { useSetRecoilState } from 'recoil'
import { showAlertState } from './recoil/showAlertState'

class BoughtBooks {
	[value: number]: number

	addBoughtBookById(bookId: number) {
		if (bookId in this) {
			this[bookId] += 1
		} else {
			this[bookId] = 1
		}
		return this
	}
}

function BookStore() {
	const [balance, setBalance] = useState(500)
	const [boughtBooks, setBoughtBooks] = useState<BoughtBooks>(
		new BoughtBooks()
	)
	const [books, setBooks] = useState<Array<Book>>(booksFromDatabase)
	const setShowAlert = useSetRecoilState(showAlertState)

	function getPriceOfBoughtBooks() {
		return Object.entries(boughtBooks).reduce(
			(acc, [id, amount]) => {
				return (
					acc +
					books.find(
						(book) =>
							book.id.toString() ===
							id
					)!.price *
						amount
				)
			},
			0
		)
	}

	function getAmountOfBoughtBooks() {
		return Object.values(boughtBooks).reduce(
			(acc, val) => acc + val,
			0
		)
	}

	function buyBook(bookId: number): void {
		const boughtBook: Book = books.find(
			(book) => book.id === bookId
		)!
		if (balance < boughtBook.price) {
			setShowAlert(true)
			return
		}
		setBooks([
			...books.filter((el) => el !== boughtBook),
			{ ...boughtBook, amount: boughtBook.amount - 1 },
		])
		setBalance(balance - boughtBook.price)
		setBoughtBooks(boughtBooks.addBoughtBookById(bookId))
	}

	return (
		<Background>
			<div className={s.wrapper}>
				<PrivateOffice
					incrementBalance={() =>
						incrementBalance(
							setBalance
						)
					}
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
	)
}

function incrementBalance(
	setBalance: (arg0: (prev: number) => number) => void
) {
	while (true) {
		const x: number = +prompt('на сколько попонить?')!
		if (!isNaN(x)) {
			setBalance((prev: number) => prev + x)
			break
		}
	}
}

export default BookStore
