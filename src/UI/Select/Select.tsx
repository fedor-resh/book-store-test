import React, {FC, SetStateAction, useRef, useState} from 'react';
import s from './Select.module.css'
// @ts-ignore
import {ReactComponent as Arrow} from './arrow.svg';

interface SelectProps{
    options:(number|string)[]
    selected:(number|string)
    setSelected:SetStateAction<any>
}
const Select:FC<SelectProps> = ({options,selected = options[0],setSelected}) => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const list = useRef(null)
    return (
        <div className={`${s.wrapper} ${isModalOpen&&s.hover}`}
             ref={list}
             onMouseOver={()=>setIsModalOpen(true)}
             onMouseLeave={()=>setIsModalOpen(false)}>
            <div className={s.selected__wrapper}>
                <Arrow className={s.arrowSvg}/>
                <p className={s.selected}>sorting by {selected}</p>
            </div>
            <div className={s.list} >
                {options.map((text)=>
                    <div
                        key={text}
                        className={s.item}
                        onClick={()=>{
                            setSelected(text)
                            setIsModalOpen(false)
                        }}>
                        <p>{text}</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Select;