import React from 'react';
import s from './Reset.module.css'

type ResetType = {
    resultNum: number
    removeNum: () => void
}

export const Reset:React.FC<ResetType>= (props) => {
    const style = `${s.reset} ${props.resultNum? s.resetInactive: ''}`
    const removeResultNum = () => {props.removeNum()}
    return (
        <button onClick={removeResultNum}
             className={style}>
            <span>Reset</span>
        </button>
    );
};
