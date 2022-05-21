import React from 'react';
import s from './Increment.module.css'

type IncrementType = {
    counterNum: () => void
    resultNum: number
}

export const Increment: React.FC<IncrementType> = (props) => {

    function CounterNumHandler() {
        return props.counterNum()
    }

    const style = `${s.increment} ${props.resultNum === 5? s.incrementIsFalse : ''}`

    return (
        <button onClick={CounterNumHandler}
                className={style}
        >
            <span>INC</span>
        </button>
    );
};
