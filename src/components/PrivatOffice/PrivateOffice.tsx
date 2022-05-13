import React from 'react';
import s from './PrivatOffice.module.css'
import Button from "../../UI/Button/Button";
import avatar from '../../assets/svg/avatar.png'
import Alert from "../../UI/Alert/Alert";

const PrivateOffice = ({balance, amountBoughtBooks, priceOfBoughtBooks}:PrivateOfficeProps) => {
    return (
        <div className={s.wrapper}>
        <div className={s.sticky}>
            <div className={s.private__office}>
                <img src={avatar} alt="avatar"/>
                <h3>Личный кабинет</h3>
                <p>баланс {balance}₽</p>
                <p>вы купили {amountBoughtBooks} книги <br/> на сумму {priceOfBoughtBooks}₽</p>
                <Alert type='error' message='не хватает средств'/>
                <Button className={s.first__button}>пополнить баланс</Button>
                <Button className={s.button}>купленные книги</Button>
            </div>
        </div>
        </div>

);
};

export interface PrivateOfficeProps{
    balance:number
    amountBoughtBooks:number
    priceOfBoughtBooks:number
}

export default PrivateOffice;