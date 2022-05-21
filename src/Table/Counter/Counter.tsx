import React from 'react';
import s from './Counter.module.css'
import {Increment} from "./Increment/Increment";
import {Reset} from "./Reset/Reset";

type CounterType = {
    resultNum: number
    counterNum: () => void
    removeNum: () => void
}

export const Counter:React.FC<CounterType> = (props) => {
    return (
        <div className={s.counter}>
            <Increment
                counterNum={props.counterNum}
                resultNum={props.resultNum}
            />
            <Reset
                removeNum={props.removeNum}
                resultNum={props.resultNum}
            />
        </div>
    );
};
