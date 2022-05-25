import React, { useState } from 'react'
import { Book } from '../../interfaces'
import BookItem from '../BookItem/BookItem'
import s from './ListOfBooks.module.css'
import { useInput } from '../../customHooks'
// @ts-ignore
import { ReactComponent as Search } from '../../assets/svg/search.svg'
import Select from '../../UI/Select/Select'
export interface ListOfBooksProps {
	books: Book[]
	buyBook: (id: number) => void
}

const ListOfBooks = ({ books, buyBook }: ListOfBooksProps) => {
	const [filter, setFilter] = useState<'name' | 'id' | 'amount'>('name')
	const filterOptions = ['name', 'price', 'amount']
	const search = useInput('')
	return (
		<div className={s.list__of__books}>
			<h3 className={s.title}>доступные книги</h3>
			<div className={s.flex}>
				<div className={s.input__wrapper}>
					<label>
						<Search />
						<input
							placeholder="search"
							className={
								s.input
							}
							{...search.bind}
							type="text"
						/>
					</label>
				</div>
				<Select
					options={filterOptions}
					selected={filter}
					setSelected={setFilter}
				/>
			</div>
			{books.filter((book) =>
				book.name
					.toLowerCase()
					.includes(
						search.value.toLowerCase()
					)
			).length !== 0 ? (
				books
					.filter((book) =>
						book.name
							.toLowerCase()
							.includes(
								search.value.toLowerCase()
							)
					)
					.sort((x, y) =>
						x[filter] >
						y[filter]
							? 1
							: -1
					)
					.map((book) => (
						<BookItem
							key={
								book.id
							}
							book={
								book
							}
							buyBook={
								buyBook
							}
						/>
					))
			) : (
				<p className={s.empty}>
					нет совпадений
				</p>
			)}
		</div>
	)
}

export default ListOfBooks
