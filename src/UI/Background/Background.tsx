import React from 'react';
// @ts-ignore
import {ReactComponent as Shape} from "../../assets/svg/background-shape.svg";
import s from './Background.module.css'

const Background = ({children}:any) => {
    return (
        <div style={{overflow:"hidden"}}>
            {children}
            <Shape className={s.shape}/>
            <div className={s.left__circle}></div>
            <div className={s.right__circle}></div>
        </div>
    );
};

export default Background;