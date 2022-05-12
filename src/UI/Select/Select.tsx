import React from 'react';

interface SelectProps{
    setState:(value:string)=>void
}

const Select = ({setState}:SelectProps) => {
    return (
        <input
            onChange={e=>{setState(e.target.value)}}

        />
    );
};

export default Select;