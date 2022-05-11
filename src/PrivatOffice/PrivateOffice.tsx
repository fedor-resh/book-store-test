import React from 'react';

export interface PrivateOfficeProps{
    balance:number
    amountBoughtBooks:number
    priceOfBoughtBooks:number
}

const PrivateOffice = ({balance, amountBoughtBooks, priceOfBoughtBooks}:PrivateOfficeProps) => {
    return (
        <div style={{display:"inline-block"}}>
            <h3>Личный кабинет</h3>
            <p>баланс {balance}</p>
            <p>вы купили {amountBoughtBooks} книги на сумму {priceOfBoughtBooks}₽</p>
        </div>
    );
};

export default PrivateOffice;