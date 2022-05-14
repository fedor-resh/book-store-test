export interface Book {
    id: number,
    name: string,
    price: number,
    amount: number,
    [key:string]:any
}